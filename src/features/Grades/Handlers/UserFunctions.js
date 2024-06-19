import { db, storage } from "../../../../firebase.js";

async function getUser(loginType, input) {
   console.log(`loginType: ${loginType}, input: ${input}`);
   //querying against the collection https://firebase.google.com/docs/firestore/query-data/queries
   const query = db.collection('users').where(loginType, '==', input);

   //using get() to retrieve query snapshot. Only one doc should exist within the snapshot. 
   //*There is a possiblity that duplicate phone numbers could exist...
   const snapshot = await query.get() //snapshot is a 'docs' array
   if(!snapshot.empty) {
      const userData = snapshot.docs[0].data(); //getting only the first doc in the array
      return userData;
   } else { //no snapshot found, return empty object
      console.log("ERROR in UserFunctions.js getUser(): NO SNAPSHOT FOUND");
      throw error;
   }
}

export { getUser };