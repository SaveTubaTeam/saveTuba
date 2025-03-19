import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseTestConfig = {
  apiKey: "AIzaSyA4KXOgT6JLTMLm4r2Pw9S0Z3agFzXSmrY",
  authDomain: "savetuba-t.firebaseapp.com",
  projectId: "savetuba-t",
  storageBucket: "savetuba-t.firebasestorage.app",
  messagingSenderId: "952931746511",
  appId: "1:952931746511:web:c5086a496048dbb4a22dba",
  measurementId: "G-TD8RYK4JKE"
};
  

// Initialize Firebase for Testing
let testApp;
if (firebase.apps.length === 0) {
  testApp = firebase.initializeApp(firebaseTestConfig);
} else {
  testApp = firebase.app();
}

// Firestore, Auth, and Storage References
const testDB = testApp.firestore();
const testAuth = testApp.auth();
const testStorage = testApp.storage().ref();
const testGoogleProvider = new firebase.auth.GoogleAuthProvider();

export { testDB, testAuth, testApp, testStorage, testGoogleProvider };
