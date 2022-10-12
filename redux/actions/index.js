import firebase from "firebase/app";
import { Firestore } from "firebase/firestore";
import { USER_STATE_CHANGE, ACHIEVEMENTS_STATE_CHANGE } from "../constants/index";

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
        console.log("Error with user in index.js " + error);
      });
  };
}

export function fetchAchievements() {
  return (dispatch) => {
    db.collection("user-achievements")
    .doc(auth.currentUser.uid)
    .get()
    .then((snapshot) => {
      if (snapshot.exists) {
        dispatch({type: ACHIEVEMENTS_STATE_CHANGE, achievements: snapshot.data() });
        let test = snapshot.data();
        console.warn(test);
        console.log(test["achievements"][0]);

      }
    })
    .catch((error) => {
      console.log("Error with achievements: \n " + error);
    });
  };
}

// Copy addExperienceToUser by doing reverse of what fetch achievements will do;
// 1: Set doc to update user db
// 2: call dispatch of achievements state change
// 3: idk drinhk a beer


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
    dispatch({type: ACHIEVEMENTS_STATE_CHANGE, achievements: null});
  };
}