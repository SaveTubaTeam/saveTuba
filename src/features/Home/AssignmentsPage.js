import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
import { useNavigation } from "@react-navigation/native";
import { ImageBg } from "../../components/Grades/grades.styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { db } from "../../../firebase";
import AssignmentCard from "./AssignmentCard";

function AssignmentsPage() {
   const { t } = useTranslation();
   const classroomObject = useSelector(state => state.user.classroom);
   const [assignments, setAssignments] = useState(null);

   // realtime listener
   useEffect(() => {
      if(!classroomObject) { //guard clause
         setAssignments(null);
         return; 
      } 

      const unsubscribe = db.collection("teachers").doc(classroomObject.teacher.email).collection(`Assignments_${classroomObject.classCode}`)
         .onSnapshot((querySnapshot) => {
            let assignmentsArray = [];
            querySnapshot.forEach((doc) => {
               assignmentsArray.push(doc.data());
            });
            console.log("\t\tASSIGNMENTS:", assignmentsArray);
            setAssignments(assignmentsArray);
         }, (error) => {
            console.error("ERROR in Assignments listener:", error);
         });
         
      //cleanup function
      return () => unsubscribe(); // Unsubscribe when component unmounts

   }, []) //end of useEffect

   const renderItem = ({ item }) => {
      return (
         <AssignmentCard content={item} />
      )
   }

   let content;
   if(assignments) {
      content = (
         <FlatList
            data={ assignments }
            style={{ width: "100%", height: "100%" }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ alignItems: "center", marginTop: 5 }}
         />
      )
   } else {
      content = (
         <View style={styles.container}>
            <ActivityIndicator size="large" color="#C6DC3B" style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }} /> 
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

function HeaderComponent({ title }) {
   return (
      <View style={styles.header}>
         <Text style={styles.headerText}>
            {title}
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: "100%",
      justifyContent: 'center'
   },
   header: {
      width: "100%",
      justifyContents: "flex-start",
      backgroundColor: "#C6DC3B",
      borderBottomWidth: 0.5,
      borderBottomColor: "#748816"
   },
   headerText: {
      fontFamily: "BalsamiqSans_400Regular",
      color: "#748816",
      fontSize: 20,
      paddingBottom: 15,
      paddingLeft: 15
   }
})

export default AssignmentsPage;