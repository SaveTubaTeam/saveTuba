//@ts-check

//this function performs very quickly. 
//if we are experiencing slowdowns for assignments/completions, it most likely? has to do with something else
//need to add error handling to this file. also note that we do not modify the original arrays but make copies instead.
export default function sortAssignments(assignments, completions) {
   let completedAssignments = [];
   let uncompletedAssignments = [];

   for(const assignment of assignments) {
      const modifiedAssignment = determineStatus(completions, assignment);

      if(modifiedAssignment.completionStatus) {
         completedAssignments.push(modifiedAssignment);
      } else {
         uncompletedAssignments.push(modifiedAssignment);
      }
   }

   //original array is now in two parts. we can now sort each part independently.
   //second parameter is to switch the 'comparator' (yes I know its not actually a comparator)
   completedAssignments = sortByDateDue(completedAssignments, "top");
   uncompletedAssignments = sortByDateDue(uncompletedAssignments, "bottom");
   
   //now sorting uncompleted by overdue status
   const overdueAssignments = [];
   // Collect overdue assignments first
   for (let i = 0; i < uncompletedAssignments.length; i++) {
      if (uncompletedAssignments[i].overdue) {
         overdueAssignments.push(uncompletedAssignments[i]);
         uncompletedAssignments.splice(i, 1); // Remove the element from original array
         i--; // Adjust index after splice
      }
   }
   // Push overdue assignments to the end of uncompletedAssignments
   uncompletedAssignments.push(...overdueAssignments);

   //we want uncompleted assignments to show up at the top of the screen so they go first
   let sortedAssignments = uncompletedAssignments.concat(completedAssignments); //for .concat() see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   
   console.log("\n\t\tSORTEDASSIGNMENTS:", sortedAssignments);
   return sortedAssignments;
}

//also adds an attribute to each object 'overdue'
function determineStatus(completions, assignment) {
   let count = 0;
   let completionStatus = false;
   let overdueStatus = false;
   let assignmentCompletionArray = [];

   const dateNow = new Date();
   const dateDue = parsedDate(assignment.dateDue);

   if (!Array.isArray(completions) || !completions.length) { // array does not exist, is not an array, or is empty
      console.log("NO COMPLETIONS AVAILABLE"); //(we still continue w/ the function. this is just for logging purposes)
   }

   for(const completion of completions) {
      if(completion.completionID.split("_")[0] === assignment.assignmentID) {
         count++;
         assignmentCompletionArray.push(completion);
      }
   }

   if(count < assignment.numActivities) {
      if(dateNow > dateDue) {
         overdueStatus = true;
      }
      completionStatus = false;
   } else { //here, count is equal to numActivities. Thus assignmentCompletionArray is nonempty
      const latestSubmissionDate = getLatestDate(assignmentCompletionArray);
      if(latestSubmissionDate > dateDue) {
         overdueStatus = true;
      }
      completionStatus = true;
   }

   const modifiedAssignment = assignment; //adding some attributes to a new object
   modifiedAssignment.numCompletions = count;
   modifiedAssignment.completionStatus = completionStatus;
   modifiedAssignment.overdue = overdueStatus;

   return modifiedAssignment;
}

function getLatestDate(assignmentCompletionArray) {
   let latestAssignmentDate = new Date(0); //epoch time lol

   for(const assignmentCompletion of assignmentCompletionArray) {
      const assignmentDate = parsedDate(assignmentCompletion.submissionTime);
      if(assignmentDate > latestAssignmentDate) {
         latestAssignmentDate = assignmentDate;
      }
   }
   return latestAssignmentDate;
}

//for .sort() see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortByDateDue(array, comparator) {
   array.sort((a, b) => {
      const dateA = parsedDate(a.dateDue);
      const dateB = parsedDate(b.dateDue);
      
      //console.log(`\nDate A: ${dateA} [${dateA.valueOf()}], Date B: ${dateB} [${dateA.valueOf()}]`);
      //dateB - dateA will sort the future to the top etc.
      //dateA - dateB will sort what has already been completed to the top
      if(comparator === "top") {
         return dateB.getTime() - dateA.getTime();
      } else if(comparator === "bottom") {
         return dateA.getTime() - dateB.getTime();
      }
      return dateA.getTime() - dateB.getTime(); //default behaviour if no 'comparator'
   })

   return array;
}

function parsedDate(dateString) {
   let [datePart, timePart] = dateString.split(', ');
   //console.log(`datePart: ${datePart} [${typeof datePart}], timePart:, ${timePart} [${typeof timePart}]`);

   let [day, month, year] = datePart.split('/').map(Number); //converting to int
   //console.log(`day: ${day} [${typeof day}], month: ${month} [${typeof month}], year: ${year} [${typeof year}]`);

   let [hours, minutes, seconds] = timePart.split(':').map(Number);
   //console.log(`hours: ${hours} [${typeof hours}], minutes: ${minutes} [${typeof minutes}], seconds: ${seconds} [${typeof seconds}]`);

   //Date() constructor params: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
   //NOTE: monthIndex is zero-indexed
   const parsedDateObject = new Date(year, (month-1), day, hours, minutes, seconds);
   return parsedDateObject;
}