import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, ImageBackground } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { db } from "../../../firebase";
import AssignmentCard from "./AssignmentCard";
import HeaderComponent from "./HeaderComponent";
import sortAssignments from "./sortAssignments";

function AssignmentsPage() {
   const { t } = useTranslation();
   const classroom = useSelector(state => state.user.classroom);
   const [assignments, setAssignments] = useState(null);
   const completions = useSelector(state => state.user.completions);

   // realtime listener
   useEffect(() => {
      if(!classroom || Object.keys(classroom).length === 0 || classroom.dummyClassroom) { //guard clause against uninitialized classroom
         setAssignments(null);
         return; 
      } 

      const assignmentsRef = db.collection("teachers").doc(classroom.teacher.email).collection(`Assignments_${classroom.classCode}`)

      const unsubscribe = assignmentsRef.onSnapshot((querySnapshot) => { //querySnapshot will always exist (no undefined)
            //re: https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot
            if(querySnapshot.empty) { //guard clause for empty snapshot
               console.log("ASSIGNMENTS SNAPSHOT IS EMPTY");
               setAssignments(null);
               return;
            }

            let assignmentsArray = [];
            querySnapshot.forEach((doc) => {
               assignmentsArray.push(doc.data());
            });
            console.log("\t\tNUMBER OF ASSIGNMENTS:", assignmentsArray.length);
            
            const sortedAssignments = sortAssignments(assignmentsArray, completions);
            setAssignments(sortedAssignments);

         }, (error) => {
            console.error("ERROR in Assignments listener:", error);
         });
         
      //cleanup function
      return () => { 
         unsubscribe(); 
         console.log("-------- unsubscribed from assignments listener --------")
      } // Unsubscribe when component unmounts (here this means on signout or when hmr reloading)

   }, [completions, classroom]) //end of useEffect. 
   //assignments will always update cuz of the listener, 
   //and we add a dependency completions to also update this useEffect when user completes an activity

   let content;
   if(assignments) {
      content = (
         <FlatList
            data={ assignments }
            style={{ width: "100%", height: "100%" }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <AssignmentCard content={item}/>}
            contentContainerStyle={{ alignItems: "center", marginTop: 5 }}
         />
      )
   } else {
      content = (
         <View style={styles.container}>
            <ActivityIndicator size="large" color="rgba(65, 128, 152, 1)" style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }} /> 
         </View>
      )
   }

   return (
      <SafeArea>
         {/* marked for translation */}
         <HeaderComponent title={t("common:assignments")} />

         <ImageBackground 
            source={require("../../../assets/assignmentsBg.jpg")}
            resizeMode="cover"
            style={styles.imageBackground}
            fadeDuration={0}
         >
            {content}
         </ImageBackground>
      </SafeArea>
   )
}

const styles = StyleSheet.create({
   imageBackground: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      width: "100%",
    },
   container: {
      height: "100%",
      width: "100%",
      justifyContent: 'center',
      backgroundColor: "rgba(65, 128, 152, 0.2)"
   }
})

export default AssignmentsPage;