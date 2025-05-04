import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// DEVELOPMENT
// const firebaseConfig = {
//   apiKey: "AIzaSyCa8CJLDlxZav6LylYflDDQQbL_m8tTZGs", //This is the Google Cloud Console browser key inside of project savetuba-5e519
//   authDomain: "savetuba-5e519.firebaseapp.com",
//   projectId: "savetuba-5e519",
//   storageBucket: "savetuba-5e519.appspot.com",
//   messagingSenderId: "218900793188",
//   appId: "1:218900793188:web:a1cc3aa38d180fc6815c71"
// };

// PRODUCTION
const firebaseConfig = {
  apiKey: "AIzaSyA4KXOgT6JLTMLm4r2Pw9S0Z3agFzXSmrY", //This is the Google Cloud Console browser key inside of project savetuba-t
  authDomain: "savetuba-t.firebaseapp.com",
  projectId: "savetuba-t",
  storageBucket: "savetuba-t.firebasestorage.app",
  messagingSenderId: "952931746511",
  appId: "1:952931746511:web:c5086a496048dbb4a22dba",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

//currently using compat instead of modular Firebase Web APK: https://firebase.google.com/docs/web/modular-upgrade
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, app, storage, googleProvider };
