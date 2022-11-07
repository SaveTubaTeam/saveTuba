import firebase from "firebase/app";
import { Firestore, setDoc } from "firebase/firestore";
import {
  USER_STATE_CHANGE,
  ACHIEVEMENTS_STATE_CHANGE,
  MODAL_OPENED,
  MODAL_CLOSED,
} from "../constants/index";

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
        console.log("Error with user in redux/actions/index.js " + error);
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
          dispatch({
            type: ACHIEVEMENTS_STATE_CHANGE,
            achievements: snapshot.data(),
          });
        }
      })
      .catch((error) => {
        console.warn("Error with achievements: \n " + error);
      });
  };
}

export function addExperienceToUser(exp, currentUser) {
  return (dispatch) => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        currentScore: currentUser.currentScore + exp,
      })
      .then(() => {
        currentUser.currentScore = currentUser.currentScore + exp;

        var nextLevelXP = Math.ceil(
          Math.pow((currentUser.level + 1.0) / 0.2, 2.1)
        );
        // console.log("CurrentUSerScore: " + currentUser.currentScore + "\nNextLevelXP: " + nextLevelXP );
        if (currentUser.currentScore >= nextLevelXP) {
          db.collection("users")
            .doc(auth.currentUser.uid)
            .update({
              level: currentUser.level + 1,
            });
          currentUser.level = currentUser.level + 1;
          if (currentUser.level == 1) {
            // console.log("CurrentLevel: " + currentUser.level);
            dispatch(addAchievement("level1"));

          }
        }

        dispatch({ type: USER_STATE_CHANGE, currentUser: currentUser });
      });
  };
}

export function signOutUser() {
  return (dispatch) => {
    dispatch({ type: USER_STATE_CHANGE, currentUser: null });
    dispatch({ type: ACHIEVEMENTS_STATE_CHANGE, achievements: null });
  };
}

export function addAchievement(achievement) {
  // console.warn(achievement);
  return (dispatch) => {
    let test;
    db.collection("user-achievements")
      .doc(auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          let achievements = snapshot.data();
          var i = 0;
          let achievInsert = "/achievements/" + achievement;
          while (achievements["achievements"][i] != undefined ) {
            if (achievements["achievements"][i] === achievInsert) {
              i = -1;
              break;
            }
            i++;
          }

          if (i != -1 || i == 0) {
            achievements["achievements"][i] = achievInsert;
            setDoc(doc(db, "user-achievements", auth.currentUser.uid), {
              achievements: achievements["achievements"],
            });
            dispatch({ type: ACHIEVEMENTS_STATE_CHANGE, achievements: achievements["achievements"] });
            
            db.collection("achievements")
              .doc(achievement)
              .get()
              .then((snapshot) => {
                let totalInfo = snapshot.data();
                let achievementInfo = totalInfo["prompt"];
              dispatch({ type: MODAL_OPENED, achievement: achievement, info: achievementInfo });
              });
          } else {
            closeAchievementModal(achievement);
          }
        }
      })
      .catch((error) => {
        console.warn("Error with achievements: \n " + error);
      });
  };
}

export function closeAchievementModal(achievement) {
  return (dispatch) => {
    dispatch({ type: MODAL_CLOSED, achievement: achievement });
  };
}