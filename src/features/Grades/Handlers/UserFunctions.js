import { db } from "../../../../firebase.js";

async function getUser(userEmail) {
   const start = performance.now(); // Start performance timer

   //console.log(`userEmail: ${userEmail}`);
   if(userEmail === 'none') {
      throw new Error("auth was undefined in Main.js");
   }
   const userRef = db.collection('users').doc(userEmail);
   const userSnapshot = await userRef.get();
   if(!userSnapshot.exists) {
      throw new Error("ERROR in UserFunctions.js getUser(): NO SNAPSHOT FOUND");
   }

   const userData = userSnapshot.data();
   const elapsedTimeSeconds = (performance.now() - start) / 1000;

   console.log(`\t\t\t\tgetUser done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
   return userData;
   
}

async function updateXP(newXP, oldXP, email) {
   const start = performance.now(); // Start performance timer

   const userRef = db.collection('users').doc(email);
   const xp = oldXP + newXP;

   const userDoc = await userRef.get();
   if (!userDoc.exists) { 
      throw new Error(`User ${email} not found.`);
   }

   await userRef.update({ experiencePoints: xp }); //update user's document

   const elapsedTimeSeconds = (performance.now() - start) / 1000;
   console.log(`\t\t\t\tupdateXP done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
}

async function updateClassCode(classCode, email) {
   const start = performance.now(); // Start performance timer

   const userRef = db.collection('users').doc(email);
   const userDoc = await userRef.get();
   if (!userDoc.exists) { 
      throw new Error(`User ${email} not found.`);
   }

   await userRef.update({ classCode: classCode });

   const elapsedTimeSeconds = (performance.now() - start) / 1000;
   console.log(`\t\t\t\tupdateXP done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
}

async function updateIsNewUser(email) {
   const start = performance.now(); // Start performance timer

   const userRef = db.collection('users').doc(email);
   const userDoc = await userRef.get();
   if (!userDoc.exists) { 
      throw new Error(`User ${email} not found.`);
   }
   await userRef.update({ isNewUser: false });

   const elapsedTimeSeconds = (performance.now() - start) / 1000;
   console.log(`\t\t\t\tupdateXP done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
}

async function getCompletionsArray(userEmail) {
   const start = performance.now(); // Start performance timer

   const completionsArray = []; //initializing array

   if(userEmail === 'none') {
      throw new Error("redux store does not contain the attribute 'email'");
   }

   //get all docs in a collection: https://firebase.google.com/docs/firestore/query-data/get-data#web_15
   const completionsRef = db.collection('users').doc(userEmail).collection("Completions");
   const completionsQuerySnapshot = await completionsRef.get();
   completionsQuerySnapshot.forEach((doc) =>{
      // doc.data() is never undefined for query doc snapshots
      completionsArray.push(doc.data());
   });
   
   const elapsedTimeSeconds = (performance.now() - start) / 1000;
   console.log(`\t\t\t\tgetCompletionsArray done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);

   return completionsArray;
}

async function postCompletion(userEmail, completionID, content) {
   const start = performance.now(); // Start performance timer
   const completionData = {};

   if (Array.isArray(content)) { //true if content is an array (from ImageUpload [Mastery, ImageBoom, Snapshot])
      completionData.imageFilePaths = content;
   } else if (typeof content === 'string') { //true if content is from Memory, Sorting, Quiz, Reorder
      completionData.score = content;
   } else {
      throw new Error("incorrect data type for 'content' in postCompletion")
   }

   let submissionTime = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Almaty', hour12: false });
   completionData.submissionTime = submissionTime;

   completionData.completionID = completionID;

   const completionDocRef = db.collection('users').doc(userEmail).collection("Completions").doc(completionID);
   const completionDoc = await completionDocRef.get()
   if(completionDoc.exists) { //we want to keep the submissionTime of the first submission, so we do not write over it.
      const dontUpdateSubmissionTime = completionData;
      delete dontUpdateSubmissionTime.submissionTime;
      await completionDocRef.update({ ...dontUpdateSubmissionTime });
   } else { //Note how we set the ref and not the document
      await completionDocRef.set(completionData); //if the document does not exist, we set it.
   }

   const elapsedTimeSeconds = (performance.now() - start) / 1000;
   console.log(`\t\t\t\tpostCompletion done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
}

async function getClassroom(classCode) {
   const start = performance.now(); // Start performance timer

   let classroomObject = {};

   const classroomRef = db.collection("classrooms").doc(classCode);
   const classroomSnapshot = await classroomRef.get();
   if (!classroomSnapshot.exists) {
      throw new Error(`Classroom ${classCode} not found.`);
   }

   const classroomDoc = classroomSnapshot.data();
   if(classroomDoc.teachers) {
      classroomObject.teacher = classroomDoc.teachers[0];
      classroomObject.classCode = classroomDoc.classCode;
      classroomObject.className = classroomDoc.className;
      classroomObject.gradeLevel = classroomDoc.gradeLevel;
   } else { //to catch dummyClassroom
      classroomObject = classroomDoc;
   }

   const elapsedTimeSeconds = (performance.now() - start) / 1000;
   console.log(`\t\t\t\tgetClassroom done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);

   return classroomObject;
}

export { getUser, updateXP, updateClassCode, updateIsNewUser, getCompletionsArray, postCompletion, getClassroom };