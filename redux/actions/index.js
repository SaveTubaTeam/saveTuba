import firebase from "firebase/app";
import { Firestore } from "firebase/firestore";
import { USER_STATE_CHANGE, USER_ADD_EXPERIENCE_45, USER_ADD_EXPERIENCE_90 } from "../constants/index";

import { getFirestore, ref, onValue } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

// COULD BE SOURCE OF ERRORS USE THE FIREBASE.FIRESTORE() THING PLEASE CHECK

export function fetchUser() {
  return (dispatch) => {
    console.log("Funciton called");
    console.log(auth.currentUser.uid);
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log(snapshot.data());
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("User does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function addExperienceToUser(exp, currentUser) {
  return (dispatch) => {
    switch (exp) {
      case 45:
        db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        currentScore: currentUser.currentScore + 45,
      }).then(() => {
        console.log("User updated");
        currentUser.currentScore = currentUser.currentScore + 45;
        dispatch({type: USER_ADD_EXPERIENCE_45, currentUser: currentUser});
      });
      break;
      // case 90:
      // case 120:
      // case 135:
      default:
        dispatch({type: USER_ADD_EXPERIENCE_90, currentUser: currentUser});
    }
  };
}