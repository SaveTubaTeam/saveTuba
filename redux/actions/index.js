import firebase from "firebase/app";
import { Firestore } from "firebase/firestore";
import { USER_STATE_CHANGE, USER_ADD_EXPERIENCE_45, USER_ADD_EXPERIENCE_90 } from "../constants/index";

import { getFirestore, ref, onValue } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

// COULD BE SOURCE OF ERRORS USE THE FIREBASE.FIRESTORE() THING PLEASE CHECK

export function fetchUser() {
  return (dispatch) => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function addExperienceToUser(exp, currentUser) {
  return (dispatch) => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        currentScore: currentUser.currentScore + exp,
      }).then(() => {
        currentUser.currentScore = currentUser.currentScore + exp;

        var nextLevelXP = Math.ceil(     Math.pow((currentUser.level + 1.0) / (0.2), 2.1) );

        if (currentUser.currentScore >= nextLevelXP) {
          db.collection("users")
          .doc(auth.currentUser.uid)
          .update({
            level: currentUser.level + 1,
          });
          currentUser.level = currentUser.level + 1;
        }

        dispatch({type: USER_STATE_CHANGE, currentUser: currentUser});
      });
  };
}

export function signOutUser() {
  return (dispatch) => {
    dispatch({type: USER_STATE_CHANGE, currentUser: null});
  };
}