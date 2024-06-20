import { db, storage } from "../../../../firebase.js";

async function getUser(userEmail) {
   const start = performance.now(); // Start performance timer

   //console.log(`userEmail: ${userEmail}`);
   if(userEmail === 'none') {
      throw new Error("auth was undefined in Main.js");
   }
   const userRef = db.collection('users').doc(userEmail);
   const userSnapshot = await userRef.get();
   if(userSnapshot.exists) {
      const userData = userSnapshot.data();

      const elapsedTimeSeconds = (performance.now() - start) / 1000;
      console.log(`\t\t\t\tgetUser done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
      return userData;
   } else { //no user found
      console.log("ERROR in UserFunctions.js getUser(): NO SNAPSHOT FOUND");
      throw new Error("no shapshot found for getUser");
   }
}

//EXAMPLE QUERY COLLECTION
// const query = db.collection('users').where(loginType, '==', input);

//    //using get() to retrieve query snapshot. Only one doc should exist within the snapshot. 
//    //*There is a possiblity that duplicate phone numbers could exist...
//    const snapshot = await query.get() //snapshot is a 'docs' array
//    if(!snapshot.empty) {
//       const userData = snapshot.docs[0].data(); //getting only the first doc in the array
//       return userData;
//    } else { //no snapshot found
//       console.log("ERROR in UserFunctions.js getUser(): NO SNAPSHOT FOUND");
//       throw new Error("no shapshot found for getUser");
//    }

async function updateUserXP(newXP, oldXP, email, classCode) {
   const start = performance.now(); // Start performance timer

   const userRef = db.collection('users').doc(email);
   const xp = oldXP + newXP;
   await userRef.update({ experiencePoints: xp }); //update user's document

   const classroomRef = db.collection("classrooms").doc(classCode);
   const classroomSnapshot = await classroomRef.get();
   if(classroomSnapshot.exists) {
      const studentsArray = classroomSnapshot.data().students;

      studentsArray.forEach((student) => {
         if(student.email === email) {
            student.experiencePoints += newXP
            return; //exit forEach to prevent extraneous iteration
         }
      })

      await classroomRef.update({ students: studentsArray }); //update studentsArray

      const elapsedTimeSeconds = (performance.now() - start) / 1000;
      console.log(`\t\t\t\tupdateUserXP done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
   } else { //no studentsArray found
      console.log("ERROR in UserFunctions.js updateUserXP(): NO SNAPSHOT FOUND");
   }
}

export { getUser, updateUserXP };