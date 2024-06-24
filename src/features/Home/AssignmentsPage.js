import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
import { ImageBg } from "../../components/Grades/grades.styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { db } from "../../../firebase";
import AssignmentCard from "./AssignmentCard";
import { Ionicons } from "@expo/vector-icons";

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
               console.log("ASSIGNMENTS ARRAY IS EMPTY");
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
      } // Unsubscribe when component unmounts (here this means on signout)

   }, [completions]) //end of useEffect. 
   //assignments will always update cuz of the listener, 
   //and we add a dependency completions to also update this useEffect

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

function HeaderComponent({ title }) {
   return (
      <View style={styles.header}>
         <Text style={styles.headerText}>
            {title}
         </Text>

         <TouchableOpacity style={styles.parentIcon}>
            <Ionicons name="people-circle" size={45} color="#748816" />
         </TouchableOpacity>

      </View>
   )
}

//this function performs very quickly. 
//if we are experiencing slowdowns for assignments/completions, it most likely? has to do with something else
//need to add error handling to this function chain. also note that we do not modify the original arrays
function sortAssignments(assignments, completions) {
   const completionIDArray = [];
   let completedAssignments = [];
   let uncompletedAssignments = [];

   for(const completion of completions) {
      const completionID = completion.completionID.split("_")[0];
      completionIDArray.push(completionID);
   }

   for(const assignment of assignments) {
      const modifiedAssignment = countOccurences(completionIDArray, assignment);

      if(modifiedAssignment.completionStatus) {
         completedAssignments.push(modifiedAssignment);
      } else {
         uncompletedAssignments.push(modifiedAssignment);
      }
   }

   //original array is now in two parts. we can now sort each part independently.
   completedAssignments = sortByDateDue(completedAssignments);
   uncompletedAssignments = sortByDateDue(uncompletedAssignments);

   //we want uncompleted assignments to show up at the top of the screen so they go first
   const sortedAssignments = uncompletedAssignments.concat(completedAssignments) //for .concat() see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   
   //TODO: add an attribute to each object 'overdue'
   //maybe a function called addOverdueAttribute
   console.log("\n\t\tSORTEDASSIGNMENTS:", sortedAssignments);
   return sortedAssignments;
}

function countOccurences(completionIDArray, assignment) {
   let count = 0;
   let completionStatus = false;

   for(const completionID of completionIDArray) {
      if(completionID === assignment.assignmentID) {
         count++;
      }
   }

   if(count === assignment.numActivities) {
      completionStatus = true;
   }

   const modifiedAssignment = assignment; //adding two attributes to a new object
   modifiedAssignment.numCompletions = count;
   modifiedAssignment.completionStatus = completionStatus;

   return modifiedAssignment;
}

//for .sort() see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortByDateDue(array) {
   array.sort((a, b) => {
      const parsedA = parseDateForConstructor(a.dateDue);
      const parsedB = parseDateForConstructor(b.dateDue);
      
      //Date() constructor params: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
      //NOTE: monthIndex is zero-indexed
      const dateA = new Date(parsedA.year, (parsedA.month - 1), parsedA.day, parsedA.hours, parsedA.minutes, parsedA.seconds);
      const dateB = new Date(parsedB.year, (parsedB.month - 1), parsedB.day, parsedB.hours, parsedB.minutes, parsedB.seconds);

      //console.log(`\nDate A: ${dateA} [${dateA.valueOf()}], Date B: ${dateB} [${dateA.valueOf()}]`);
      //dateB - dateA will sort the future to the top etc.
      //dateA - dateB will sort the past to the top etc.
      return dateB - dateA;
   })

   return array;
}

function parseDateForConstructor(dateString) {
   let [datePart, timePart] = dateString.split(', ');
   //console.log(`datePart: ${datePart} [${typeof datePart}], timePart:, ${timePart} [${typeof timePart}]`);

   let [day, month, year] = datePart.split('/').map(Number); //converting to int
   //console.log(`day: ${day} [${typeof day}], month: ${month} [${typeof month}], year: ${year} [${typeof year}]`);

   let [hours, minutes, seconds] = timePart.split(':').map(Number);
   //console.log(`hours: ${hours} [${typeof hours}], minutes: ${minutes} [${typeof minutes}], seconds: ${seconds} [${typeof seconds}]`);

   return { year: year, month: month, day: day, hours: hours, minutes: minutes, seconds: seconds };
}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: "100%",
      justifyContent: 'center',
      backgroundColor: "rgba(65, 128, 152, 0.1)"
   },
   header: {
      width: "100%",
      backgroundColor: "#C6DC3B",
      borderBottomWidth: 0.5,
      borderBottomColor: "#748816",
      flexDirection: "row",
   },
   headerText: {
      fontFamily: "BalsamiqSans_400Regular",
      color: "#748816",
      fontSize: 20,
      paddingBottom: 15,
      paddingLeft: 15
   },
   parentIcon: {
      position: "absolute",
      right: 15,
      bottom: 5
   }
})

export default AssignmentsPage;