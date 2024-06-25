import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
import { ImageBg } from "../../components/Grades/grades.styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { db } from "../../../firebase";
import AssignmentCard from "./AssignmentCard";
import HeaderComponent from "./HeaderComponent";
import sortAssignments from "./sortAssignments";

function AssignmentsPage() {
   const { t } = useTranslation();
   const classroomObject = useSelector(state => state.user.classroom);
   const [assignments, setAssignments] = useState(null);
   const completions = useSelector(state => state.user.completions);

   // realtime listener
   useEffect(() => {
      if(!classroomObject) { //guard clause
         setAssignments(null);
         return; 
      } 

      const unsubscribe = db.collection("teachers").doc(classroomObject.teacher.email).collection(`Assignments_${classroomObject.classCode}`)
         .onSnapshot((querySnapshot) => { //querySnapshot will always exist (no undefined)

            if(querySnapshot.size === 0) { //guard clause for empty snapshot
               console.log("ASSIGNMENTS SNAPSHOT IS EMPTY");
               return;
            }
            // const docChanges = querySnapshot.docChanges();
            // if(docChanges.length === 0) { //guard clause for no changes
            //    return;
            // }

            let assignmentsArray = [];
            querySnapshot.forEach((doc) => {
               assignmentsArray.push(doc.data());
            });
            console.log("\t\tASSIGNMENTS:", assignmentsArray);
            
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

   }, [completions]) //end of useEffect. 
   //assignments will always update cuz of the listener, 
   //and we add a dependency completions to also update this useEffect when user completes an activity

   let content;
   if(assignments) {
      content = (
         <FlatList
            data={ assignments }
            style={{ width: "100%", height: "100%" }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <AssignmentCard content={item} />}
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
         <HeaderComponent title={"Assignments"} />

         <ImageBg source={require("../../../assets/assignmentsBg.jpg")} resizeMode="cover">
            {content}
         </ImageBg>
      </SafeArea>
   )
}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: "100%",
      justifyContent: 'center',
      backgroundColor: "rgba(65, 128, 152, 0.2)"
   }
})

export default AssignmentsPage;