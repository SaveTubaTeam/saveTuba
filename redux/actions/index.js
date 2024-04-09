import firebase from "firebase/app";
import { Firestore, setDoc, updateDoc } from "firebase/firestore";
import {
  USER_STATE_CHANGE,
  ACHIEVEMENTS_STATE_CHANGE,
  MODAL_OPENED,
  MODAL_CLOSED,
} from "../constants/index";

import { getFirestore, ref, onValue } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

//This whole file needs to be scratched to fit new toolkit
//nothing here is written using async await lmao

//   04/09/24 --> All of the below functions have been "unplugged" from the rest of the app, meaning that they
//are no longer utilized/called anywhere.

// COULD BE SOURCE OF ERRORS USE THE FIREBASE.FIRESTORE() THING PLEASE CHECK

export function fetchUser() {
  return (dispatch) => { //getting currentUser in "users" collection, dispatching currentUser data if found
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

//fetching achievements from currentUser in the "user-achievements" collection. Faulty macro problem logic I believe.
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

//adds experience to currentUser's currentScore field in db, calculating nextLevelXP threshold
//and incrementing currentUser's level field in db if threshold passed. 
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
          Math.pow((currentUser.level + 1.0) / 0.2, 2.1) //calculates a scaling factor for number of experience points needed until the next level
        );
        // console.log("CurrentUSerScore: " + currentUser.currentScore + "\nNextLevelXP: " + nextLevelXP );
        if (currentUser.currentScore >= nextLevelXP) { //if threshold passed
          db.collection("users")
            .doc(auth.currentUser.uid)
            .update({
              level: currentUser.level + 1,
            });
          currentUser.level = currentUser.level + 1;

          //dispatching level1 achievement
          if (currentUser.level == 1) {
            // console.log("CurrentLevel: " + currentUser.level);
            dispatch(addAchievement("level1"));

          }
        }

        //returns updated currentUser
        dispatch({ type: USER_STATE_CHANGE, currentUser: currentUser });
      });
  };
}

//passing null initial state back to user.js and user-achievements.js after signout.
export function signOutUser() {
  return (dispatch) => {
    dispatch({ type: USER_STATE_CHANGE, currentUser: null });
    dispatch({ type: ACHIEVEMENTS_STATE_CHANGE, achievements: null });
  };
}

//
export function addAchievement(achievement) {
  // console.warn(achievement);
  return (dispatch) => {
    let test;
    db.collection("user-achievements")
      .doc(auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) { //checking if currentUser.uid exists
          let achievements = snapshot.data(); //grabbing all user field data
          var i = 0;
          let achievInsert = "/achievements/" + achievement;
          while (achievements["achievements"][i] != undefined ) { //I believe this loops through the existing field data???
            if (achievements["achievements"][i] === achievInsert) {
              i = -1;
              break;
            }
            i++;
          }

          //below logic does not and should not work.
          if (i != -1 || i == 0) {
            achievements["achievements"][i] = achievInsert;
            setDoc(doc(db, "user-achievements", auth.currentUser.uid), {//setting achievement field in currentUser if nonexistent??
              achievements: achievements["achievements"],
            });
            dispatch({ type: ACHIEVEMENTS_STATE_CHANGE, achievements: achievements["achievements"] });//dispatch change to user store
            
            db.collection("achievements")
              .doc(achievement)
              .get()
              .then((snapshot) => {
                let totalInfo = snapshot.data();
                let achievementInfo = totalInfo["prompt"]; //dispatching prompt for modal
              dispatch({ type: MODAL_OPENED, achievement: achievement, info: achievementInfo });//dispatching action to open modal
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

//dispatching action to close achievement modal.
export function closeAchievementModal(achievement) {
  return (dispatch) => {
    dispatch({ type: MODAL_CLOSED, achievement: achievement });
  };
}


