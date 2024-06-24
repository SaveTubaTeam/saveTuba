
//this function performs very quickly. 
//if we are experiencing slowdowns for assignments/completions, it most likely? has to do with something else
//need to add error handling to this function chain. also note that we do not modify the original arrays
export default function sortAssignments(assignments, completions) {
   const completionIDArray = [];
   const submissionTimeArray = [];
   let completedAssignments = [];
   let uncompletedAssignments = [];

   for(const completion of completions) {
      const completionID = completion.completionID.split("_")[0];
      completionIDArray.push(completionID);

      const submissionTime = completion.submissionTime;
      submissionTimeArray.push(submissionTime);
   }

   for(const assignment of assignments) {
      const modifiedAssignment = determineStatus(completions, assignment);

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
   let sortedAssignments = uncompletedAssignments.concat(completedAssignments) //for .concat() see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
   
   console.log("\n\t\tSORTEDASSIGNMENTS:", sortedAssignments);
   return sortedAssignments;
}

//also adds an attribute to each object 'overdue'
function determineStatus(completions, assignment) {
   let count = 0;
   let completionStatus = false;
   let overdueStatus = false;

   for(const completion of completions) {
      if(completion.completionID.split("_")[0] === assignment.assignmentID) {
         count++;
      }

      const parsedSubmissionDate = parseDateForConstructor(completion.submissionTime);
      const parsedDateDue = parseDateForConstructor(assignment.dateDue);

      const submissionDate = new Date(parsedSubmissionDate.year, (parsedSubmissionDate.month - 1), parsedSubmissionDate.day, parsedSubmissionDate.hours, parsedSubmissionDate.minutes, parsedSubmissionDate.seconds);
      const dateDue = new Date(parsedDateDue.year, (parsedDateDue.month - 1), parsedDateDue.day, parsedDateDue.hours, parsedDateDue.minutes, parsedDateDue.seconds);

      if(submissionDate > dateDue) {
         overdueStatus = true;
      }
   }

   if(count === assignment.numActivities) {
      completionStatus = true;
   }

   const modifiedAssignment = assignment; //adding two attributes to a new object
   modifiedAssignment.numCompletions = count;
   modifiedAssignment.completionStatus = completionStatus;
   modifiedAssignment.overdue = overdueStatus;

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