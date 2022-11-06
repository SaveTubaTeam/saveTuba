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
          dispatch({
            type: ACHIEVEMENTS_STATE_CHANGE,
            achievements: snapshot.data(),
          });
          let test = snapshot.data();
          // console.warn(test);
          // console.log(test["achievements"][0]);
        }
      })
      .catch((error) => {
        // console.warn("Error with achievements: \n " + error);
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
        console.log("CurrentUSerScore: " + currentUser.currentScore + "\nNextLevelXP: " + nextLevelXP );
        if (currentUser.currentScore >= nextLevelXP) {
          db.collection("users")
            .doc(auth.currentUser.uid)
            .update({
              level: currentUser.level + 1,
            });
          currentUser.level = currentUser.level + 1;
          if (currentUser.level == 1) {
            console.log("CurrentLevel: " + currentUser.level);
            // addAchievement("level1");

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
  console.warn(achievement);
  return (dispatch) => {
    let test;
    db.collection("user-achievements")
      .doc(auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          let test = snapshot.data();
          console.log("----------------BELOW----------------------");
          console.warn(test);
          // console.log("------------------Below------------------------");
          // console.warn(test);
          // console.warn(test["achievements"][0]);
          var i = 0;
          let achievInsert = "/achievements/" + achievement;
          while (test["achievements"][i] != undefined ) {
            if (test["achievements"][i] === achievInsert) {
              i = -1;
              break;
            }
            i++;
          }
          console.log("SHOULD NOT BE GETTING HERE IF NO ACHIEVEMENT");
          if (i != -1 || i == 0) {
            test["achievements"][i] = achievInsert;
            // console.log("22-------------------Below-------------------22");
            // console.warn(test);
            setDoc(doc(db, "user-achievements", auth.currentUser.uid), {
              achievements: test["achievements"],
            });
            dispatch({ type: ACHIEVEMENTS_STATE_CHANGE, achievements: test["achievements"] });
            
            db.collection("achievements")
              .doc(achievement)
              .get()
              .then((snapshot) => {
                let totalInfo = snapshot.data();
                let achievementInfo = totalInfo["prompt"];
                // console.log("In index.js");
                // console.warn(achievementInfo["prompt"]);
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