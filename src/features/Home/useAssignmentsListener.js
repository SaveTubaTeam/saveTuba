import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';

//custom hook
const useAssignmentsListener = (classroomObject) => {
   const [assignments, setAssignments] = useState(null);
   const [unsubscribeFromAssignments, setUnsubscribeFromAssignments] = useState(null);

   useEffect(() => {
      if(!classroomObject) { //guard clause
         setAssignments(null);
         return; 
      } 

      db.collection("teachers").doc(classroomObject.teacher.email).collection(`Assignments_${classroomObject.classCode}`)
         .onSnapshot((querySnapshot) => {
            let assignmentsArray = [];
            querySnapshot.forEach((doc) => {
               assignmentsArray.push(doc.data());
            });
            setAssignments(assignmentsArray);
         }, (error) => {
            console.error("ERROR in Assignments listener:", error);
         });

      //setUnsubscribeFromAssignments(unsubscribe);


   }, [classroomObject]) //end of useEffect

   return { 
      assignments: assignments, 
      //unsubscribeFromAssignments: unsubscribeFromAssignments 
   };
}

export default useAssignmentsListener;