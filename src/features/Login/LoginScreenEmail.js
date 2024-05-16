import { TitleText } from "../../components/title-text.component";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { auth, db } from "../../../firebase";
import { Alert, Text } from 'react-native';

import { fetchImages } from "../../../redux/slices/imageSlice";
import { setKazakh, setEnglish, setRussian } from "../../../redux/slices/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, fetchUser } from "../../../redux/slices/userSlice";
import { getCacheObject, postBoilerplate, postData } from "../Grades/Handlers/Database";
import { TouchableOpacity } from "react-native-gesture-handler";
import SelectorLogin from "./LanguageSelectorLogin";

const ImageBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  width: 60%;
`;

const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[2]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;

const ButtonContainer = styled.View`
  width: 60%;
  margin-top: ${(props) => props.theme.sizes[2]};
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 100%;
  align-items: center;
`;

const ButtonOutLine = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  margin-top: ${(props) => props.theme.space[1]};
  border: ${(props) => props.theme.space[1]} solid
    ${(props) => props.theme.colors.ui.tertiary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  align-items: center;
  `;

  const BottomContainer = styled.View`
  position: absolute;
  bottom: 4%;
  width: 60%;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

//Please see here for firebase.auth() v8 documentation: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth

const LoginScreenEmail = () => {
  const dispatch = useDispatch();
  const currentUserStore = useSelector(selectCurrentUser);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //fetching images, updating the auth object with an observer to track changes to the existing user
  useEffect(() => {
    console.log("\n\tinside LoginScreenEmail.js")
    console.log('Most recent userData store:', currentUserStore);
    dispatch(fetchImages());

    //we set an observer on the auth object via onAuthStateChanged()
    const login = auth.onAuthStateChanged((user) => { //basically listening/waiting for handleLogin()
      if (user) { //evaluates to true if user is signed in (not null or undefined)
        console.log("auth.currentUser.email:", auth.currentUser.email); //**refers to the fb auth object and not our redux store

        //resetting login form state for sanity
        setEmail("");
        setPassword("");

        console.log("Firebase login successful. Pushing to HomePage for fetchUser()");
        navigation.replace("HomePage");
      }
    }); //end of login function

    return login; //this line prevents login from being called more than once
  }, [currentUserStore, dispatch]); //end of useEffect(). I believe rerender happens every time button onPress event is triggered.

  //this function is called upon pressing the login button
  const handleLogin = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => { //successfully signed in
        const user = userCredentials.user; //referring to userCredentials (auth object) properties
        console.log("\n\tLogged in with:", user.email);
      })
      .catch((error) => {
        Alert.alert("Invalid Login", "email or password is incorrect");
        console.log("Error: ", error.message);
      });
  };

  //we sign in with the savetuba account for Guest
  const continueAsGuest = async() => {
    await auth
      .signInWithEmailAndPassword("savetuba2023@gmail.com", "SaveTubaLehigh")
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("\n\tLogged in with:", user.email);
      }).catch(() => {
        console.log("Error with Guest in LoginScreen");
      })
  }

  //function to send a password reset email: https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
  const sendPasswordReset = async() => {
    auth.languageCode = i18n.language; //setting current language code to localize email.
    console.log("language code for password reset email:", auth.languageCode);

    if(checkIfUserExists()) { //see below
      await auth.sendPasswordResetEmail(email)
        .then(() => {//password reset email sent successfully
          /* marked for translation */
            Alert.alert("Password Reset Email Sent", "An email with instructions to reset your password has been sent to your inbox.");
        }).catch((error) => {
          /* marked for translation */
            Alert.alert("Error", "Please enter a valid email address");
        })
    } else {
      /* marked for translation */
      Alert.alert("Invalid Email", "No such account with the given email exists");
    }
  }

  //helper for sendPasswordReset
  const checkIfUserExists = async() => {
    //checking if account exists
    await db.collection('users').doc(email).get().then((snapshot) => {
      if(snapshot.exists) {
        console.log("user exists. sending password reset email to:", email);
        return true;
      } else {
        console.log(email, "not found within 'users' collection");
        return false;
      }
    })
  }

  return (
    <Container behavior="padding">
      <ImageBg source={require("../../../assets/loginBackground.png")}>
        <InputContainer>
          <Input
            placeholder={t("common:email")} //Email changed to phone number
            placeholderTextColor="#696969"
            value={email}
            onChangeText={(text) => setEmail(text)} // Need to change for production
            autoCapitalize="none"
          />
          <Input
            placeholder={t("common:password")} //Password
            placeholderTextColor="#696969"
            value={password}
            onChangeText={(text) => setPassword(text)} // Need to change for production
            autoCapitalize="none"
            secureTextEntry
          />
        </InputContainer>

        <ButtonContainer>
          <Button onPress={() => {
            handleLogin();
          }}>
            <TitleText color="secondary" size="body">
              {t("common:login")}
            </TitleText>
          </Button>

          {/* <ButtonOutLine onPress={() => navigation.push("LoginPhone")}>
            <TitleText color="primary" size="body">
              Phone Number Login
            </TitleText>
          </ButtonOutLine> */}

          <ButtonOutLine onPress={() => navigation.push("Register")}>
            <TitleText color="primary" size="body">
              {t("common:signup")}
            </TitleText>
          </ButtonOutLine>

          {/* Forgot Password link */}
          <TouchableOpacity 
            onPress= {() => {
              console.log("\n\tForgot Password button pressed");
              sendPasswordReset();
            }} 
            style={{alignItems: 'center'}}>
            <Text style={{textDecorationLine: 'underline'}}>
              {/* marked for translation */}
              <TitleText color="secondary" size="button">
              {t("common:forgotpassword")}
              </TitleText>
            </Text>
          </TouchableOpacity>

          {/* This posted the data that was pulled from the post method above */}
          {/* <Button onPress={postData}>
            <TitleText color="secondary" size="body">
              Post
            </TitleText>
          </Button> */}

          {/*<Button onPress={() => postBoilerplate("GradeX", "ChapterX")}>
            <TitleText color="secondary" size="body">
              Post Boilerplate
            </TitleText>
        </Button>*/}
        </ButtonContainer>

        <BottomContainer>

        {/* LanguageSelector */}
        <SelectorLogin />

          {/* Guest Login */}
          {/* marked for translation */}
          <ButtonOutLine onPress={() => continueAsGuest()} style={{marginTop: 10}}>
            <TitleText color="primary" size="body">
              {t("common:continueasguest")}
            </TitleText>
          </ButtonOutLine>
          </BottomContainer>
          
      </ImageBg>
    </Container>
  );
}; //end of LoginScreen

export default LoginScreenEmail;
