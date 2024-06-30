import { TitleText } from "../../components/title-text.component";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { auth, db, googleProvider } from "../../../firebase";
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { triggerNewUser } from "../../../redux/slices/userSlice";
import SelectorLogin from "./LanguageSelectorLogin";
import Toast from 'react-native-toast-message';
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

const LoginScreen = () => {
  const userSlice = useSelector(state => state.user);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //updating the auth object with an observer to track changes to the existing user
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "218900793188-0krdujh2ub4j1bkiddti006k2cste6jo.apps.googleusercontent.com",
    });
    auth.languageCode = i18n.language;
    
    console.log("\n\tinside LoginScreen.js")
    console.log('Most recent userSlice store:', userSlice);

    //we set an observer on the auth object via onAuthStateChanged()
    const login = auth.onAuthStateChanged((user) => { //basically listening/waiting for google sign in
      //evaluates to true if user is signed in (not null or undefined) and we've finished setting up the user's account in Firestore
      if (user) {  //see here for User object attributes: https://firebase.google.com/docs/reference/js/v8/firebase.User
        console.log(`\n\n\t!!! USER SIGNED IN: ${user.email} !!!`); //**refers to the fb auth object and not our redux store

        if(!loading) {
          console.log("Firebase auth successful. Pushing to Main . . .");
          navigation.replace("Main");
        }
      }
    }); //end of login function

    return login; //this line prevents login from being called more than once
  }, [userSlice]); //end of useEffect(). I believe rerender happens every time button onPress event is triggered.

  /* marked for translation */
  async function googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = googleProvider.credential(userInfo.idToken);
      handleGAuth(googleCredential);
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            Toast.show({
              type: 'error',
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
          // some other error happened
          showDefaultToast();
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
      .then((result) => { //successfully signed in. see here for properties of the result object: https://firebase.google.com/docs/reference/js/v8/firebase.auth#usercredential
        setLoading(true);
        const user = result.user;
        const isNewUser = result.additionalUserInfo.isNewUser;
        console.log("\n\tLogged in with:", user.email);
        postUser(user, isNewUser);
      })
      /* marked for translation */
      .catch((error) => { //auth error codes: https://firebase.google.com/docs/reference/js/auth#autherrorcodes
        const errorCode = error.code;
        console.log(`ERROR: ${errorCode} | ${error.message}`);
        showDefaultToast();
      });
  };

  function showDefaultToast() {
    Toast.show({
      type: 'error',
      text1: "Google Sign In Failed",
      text2: "Please try again or contact support at savetuba2023@gmail.com",
      visibilityTime: 4000,
    });
  }

  //we sign in with the savetuba account for Guest
  async function continueAsGuest() {
    await auth
      .signInWithEmailAndPassword("savetuba2023@gmail.com", "SaveTubaLehigh")
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch(triggerNewUser({isNewUser: true }));
        console.log("\n\tLogged in with:", user.email);
      }).catch(() => {
        Toast.show({
          type: 'error',
          text1: "Guest Login Failed",
          text2: "Please try again or contact support at savetuba2023@gmail.com",
          visibilityTime: 4000,
        });
        console.log("Error with Guest in LoginScreen");
      })
  }

  async function postUser(user, isNewUser){
    if(!isNewUser) { //guard clause for returning (non-new) users
      setLoading(false);
      return; 
    }

    //isNewUser should be boolean true here
    dispatch(triggerNewUser({isNewUser: isNewUser }));

    //default is antelope-profile-pic.jpg in our storage bucket under /assets/
    let photoURL = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fantelope-profile-pic.jpg?alt=media&token=26382673-a602-4c7d-b255-18ae83bc525a";
    if(user.photoURL) { //the profile photo has dimensions of 96x96
      photoURL = user.photoURL
    }

    await db.collection("users").doc(user.email).set({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      classCode: "dummyClassroom",
      photoURL: photoURL,
      experiencePoints: 0,
    });

    Toast.show({
      type: 'success',
      text1: `Welcome, ${user.firstName} ${user.lastName}!`,
      text2: `Your account has been successfully created.`,
      visibilityTime: 4000,
    });

    setLoading(false);
  }

  while(loading) {
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
          {/* marked for translation */}
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