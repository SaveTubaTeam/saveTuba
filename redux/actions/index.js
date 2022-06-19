import firebase from "firebase/app";
import { Firestore } from "firebase/firestore";
import { USER_STATE_CHANGE } from "../constants/index";

import { getFirestore, ref, onValue } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";

// COULD BE SOURCE OF ERRORS USE THE FIREBASE.FIRESTORE() THING PLEASE CHECK

export function fetchUser() {
  return (dispatch) => {
    // console.log(auth.currentUser.uid);
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          // console.log(snapshot.data());
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
