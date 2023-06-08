// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa8CJLDlxZav6LylYflDDQQbL_m8tTZGs",
  authDomain: "savetuba-5e519.firebaseapp.com",
  projectId: "savetuba-5e519",
  storageBucket: "savetuba-5e519.appspot.com",
  messagingSenderId: "218900793188",
  appId: "1:218900793188:web:a1cc3aa38d180fc6815c71"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export {  db, auth, app};
