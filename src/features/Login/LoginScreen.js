import { TitleText } from "../../components/title-text.component";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { auth, db } from "../../../firebase";
import { GoogleAuthProvider } from 'firebase/auth';
import { StyleSheet, ImageBackground, Image, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { apiSlice } from "../../../redux/apiSlice";
import SelectorLogin from "./LanguageSelectorLogin";
import Toast from 'react-native-toast-message';
import { GoogleSignin, statusCodes, isErrorWithCode } from "@react-native-google-signin/google-signin";
import Constants from "expo-constants";

const LoginScreen = () => {
  const userSlice = useSelector(state => state.user);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //initial config
  useEffect(() => {
    auth.languageCode = i18n.language;
    GoogleSignin.configure({
      webClientId: "218900793188-0krdujh2ub4j1bkiddti006k2cste6jo.apps.googleusercontent.com",
    });
    console.log("\n\tinside LoginScreen.js")
  }, [])

  //updating the auth object with an observer to track changes to the existing user
  useEffect(() => {
    console.log('Most recent userSlice store:', userSlice);

    //we set an observer on the auth object via onAuthStateChanged()
    const login = auth.onAuthStateChanged((user) => { //basically listening/waiting for google sign in
      if (user) {  //see here for User object attributes: https://firebase.google.com/docs/reference/js/v8/firebase.User
        console.log(`\n\n\t!!! USER SIGNED IN: ${user.email} !!!`);
      }
    }); //end of login function

    return login; //this line prevents login from being called more than once
  }, [userSlice, i18n]); //end of useEffect(). I believe rerender happens every time button onPress event is triggered.

  /* marked for translation */
  async function googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      //this line is tricky: https://stackoverflow.com/questions/70607284/provider-credential-is-undefined-in-expo-firebase-google-authentication
      const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
      setLoading(true);
      await handleGAuth(googleCredential);
      setLoading(false);
    } catch (error) {
      console.error(`GOOGLE SIGN IN ERROR: ${error.code} | ${error} `);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            Toast.show({
              type: 'info',
              text1: "Exited Google Sign In",
              visibilityTime: 2000,
            });
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            Toast.show({
              type: 'error',
              text1: "Google Sign In Already In Progress",
              text2: "Please try again or contact support at savetuba2023@gmail.com",
              visibilityTime: 4000,
            });
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            Toast.show({
              type: 'error',
              text1: "Google Play Services Unavailable",
              text2: "Please try again or contact support at savetuba2023@gmail.com",
              visibilityTime: 4000,
            });
            break;
          default:
          showDefaultToast(); // some other error happened
        }
      } else { //catch-all not related to google auth
        showDefaultToast();
      }
    }
  };

  //see: https://firebase.google.com/docs/auth/web/google-signin#web_9
  async function handleGAuth(googleCredential) {
    await auth
      .signInWithCredential(googleCredential)
      .then(async(result) => { //successfully signed in. see here for properties of the result object: https://firebase.google.com/docs/reference/js/v8/firebase.auth#usercredential
        const user = result.user;
        //isNewUser always is false: https://stackoverflow.com/questions/62371244/firebase-additionalinfo-isnewuser-always-returns-false
        // const isNewUser = result.additionalUserInfo.isNewUser;
        // console.log(`\tisNewUser: ${isNewUser}`);

        console.log("\n\tLogged in with:", user.email);
        await postUserIfNew(user);
      })
      /* marked for translation */
      .catch((error) => { //auth error codes: https://firebase.google.com/docs/reference/js/auth#autherrorcodes
        console.log(`ERROR: ${error.code} | ${error.message}`);
        showDefaultToast();
      });
  };

  //we sign in with the savetuba account for Guest
  //also please see: https://docs.expo.dev/eas-update/environment-variables/#using-variables-in-appconfigjs
  //the expo docs say that this method is not preferred for referencing .env variables.
  //I, however, do not want to set up EAS Update because I am lazy and I do not understand it.
  async function continueAsGuest() {
    await auth
      .signInWithEmailAndPassword("savetuba2023@gmail.com", Constants.expoConfig.extra.GUEST_LOGIN_PASSWORD)
      .then(async(userCredentials) => {
        const user = userCredentials.user;
        await checkIfTuba(user.email);
        console.log("guest auth successful. Pushing to Main . . .");
        navigation.replace("Main");
      }).catch((error) => {
        Toast.show({
          type: 'error',
          text1: "Guest Login Failed",
          text2: "Please try again or contact support at savetuba2023@gmail.com",
          visibilityTime: 4000,
        });
        console.log(`ERROR with Guest in LoginScreen: ${error}`);
      })
  }

  async function postUserIfNew(user){
    try {
      const userRef = db.collection('users').doc(user.email)
      const userSnapshot = await userRef.get();
      if(userSnapshot.exists) { //this is not a new user

        await checkIfTuba(userSnapshot.data().email);

        //console.log("USER EXISTS");
        console.log("returning user auth successful. Pushing to Main . . .");
        navigation.replace("Main");
        return;
      }
      
      //default is antelope-profile-pic.jpg in our storage bucket under /assets/
      let photoURL = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fantelope-profile-pic.jpg?alt=media&token=26382673-a602-4c7d-b255-18ae83bc525a";
      if(user.photoURL) { //the profile photo has dimensions of 96x96
        photoURL = user.photoURL
      }

      console.log("posting user to firestore . . .");
      console.log(user);
      const displayName = parseDisplayName(user.displayName);
      console.log(displayName);
      await db.collection("users").doc(user.email).set({
        email: user.email,
        firstName: displayName[0],
        lastName: displayName[1],
        classCode: "dummyClassroom",
        photoURL: photoURL,
        experiencePoints: 0,
        isNewUser: true,
      });

      console.log("new user auth successful. Pushing to Main . . .");
      navigation.replace("Main");

      Toast.show({
        type: 'success',
        text1: `Welcome, ${displayName[0]} ${displayName[1]}!`,
        text2: `Your account has been successfully created.`,
        visibilityTime: 4000,
      });
    } catch(error) {
      console.error("Error posting user to Firestore:", error);
      Toast.show({
        type: 'error',
        text1: "Account Creation Failed",
        text2: "Please try again or contact support at savetuba2023@gmail.com",
        visibilityTime: 4000,
      });
    }
  }

  //TODO: add a description of why I did this
  async function checkIfTuba(email) {
    if(email === "savetuba2023@gmail.com") {
      console.log(`LOGGING IN AS GUEST: ${email}`);
      await db.collection('users').doc(email).update({ isNewUser: true }); //to always trigger the about modal
      //re: https://redux-toolkit.js.org/rtk-query/api/created-api/api-slice-utils#invalidatetags
      dispatch(apiSlice.util.invalidateTags(["User"])); //manually force a refetch of now stale cache
    }
  }

  if(loading) {
    return (
      <Container behavior="padding">
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </Container>
    );
  }

  return (
    <Container behavior="padding">
      <ImageBackground 
        source={require("../../../assets/loginBackground.png")}
        style={styles.container}
        fadeDuration={0}
      >
        <ButtonContainer>
          <ButtonOutLine onPress={() => { googleSignIn(); }}>
            <Image 
              source={require("../../../assets/googleLogoButton.png")}
              style={styles.image}
              fadeDuration={0}
            />

            <TitleText color="primary" size="body">
              {/* marked for translation */}
              {`      Sign in with Google`}
            </TitleText>
          </ButtonOutLine>

          <Button onPress={() => navigation.push("AlternativeLogin")}>
            <TitleText color="secondary" size="body">
              Other
            </TitleText>
          </Button>
        </ButtonContainer>

        <BottomContainer>
          {/* LanguageSelector */}
          <SelectorLogin />

          {/* Guest Login */}
          <ButtonOutLine onPress={() => continueAsGuest()} style={{ marginTop: 10 }}>
            <TitleText color="primary" size="body">
              {t("common:continueasguest")}
            </TitleText>
          </ButtonOutLine>

        </BottomContainer>
          
      </ImageBackground>
    </Container>
  );
}; //end of LoginScreen

//@returns {string[]} index 1 is first name, index 2 is last name or empty string if it doesnt exist
//NOTE: 
// - this is error-prone to first names with more than one word
// - this is also error-prone to a displayName without a first name (only last name - is that even possible?)
// - function behaviour is unknown if entire displayName is " " or ""
function parseDisplayName(displayName) {
  try {
    const result = [];
    const parts = displayName.split(' ');
    
    result.push(parts[0]); //first name

    if(parts.length === 1) { //no space found
      result.push(" "); //empty string for last name
    } else {
      result.push(parts[1]);
    }

    return result;
  } catch(error) {
    console.error('Error splitting string:', error.message);
  }
}

function showDefaultToast() {
  Toast.show({
    type: 'error',
    text1: "Google Sign In Failed",
    text2: "Please try again or contact support at savetuba2023@gmail.com",
    visibilityTime: 4000,
  });
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    width: 45,
    height: 45,
    left: 5,
  }
})

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  width: 60%;
  margin-top: ${(props) => props.theme.sizes[2]};
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[1]};
  width: 100%;
  align-items: center;
`;

const ButtonOutLine = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border: ${(props) => props.theme.space[1]} solid
    ${(props) => props.theme.colors.ui.tertiary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  justify-content: center;
`;

  const BottomContainer = styled.View`
  position: absolute;
  bottom: 4%;
  width: 70%;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;