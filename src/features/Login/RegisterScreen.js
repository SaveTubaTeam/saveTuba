import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";
import { Alert, ActivityIndicator, StyleSheet, View, ImageBackground } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth, db } from "../../../firebase";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

//Design pattern: userSlice user state (redux) is NOT set in RegisterScreen. We only ever set user state via
//dispatch(fetchUser()) which happens upon Main.js render and nowhere else to minimize redundancy.

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  //const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Toast.show({
      type: 'info',
      text1: "Have a Google Account?",
      text2: "No need to register! Head back to the Google login page.",
      visibilityTime: 4000,
    });
  }, []);

  //createUserWithEmailAndPassword: https://firebase.google.com/docs/auth/web/password-auth
  //if we successfully register, we add the user (and initial user metadata) to Firestore
  async function createUser() {
    setLoading(true);
    await auth.createUserWithEmailAndPassword(email, password) //creating user
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("\n\tUser Registered: ", auth.currentUser.email)
        postUser(); //see below

        /* marked for translation */
        Toast.show({
          type: 'success',
          text1: `Welcome, ${firstName} ${lastName}!`,
          text2: `Your account has been successfully created.`,
          visibilityTime: 4000,
        });
      })
      /* marked for translation */
      .catch((error) => { //firebase createUser failed
        setLoading(false);
        const errorCode = error.code;
        if(errorCode === "auth/email-already-in-use") {
          Toast.show({
            type: 'error',
            text1: "Account Already Exists",
            text2: "An account with this email already exists",
            visibilityTime: 4000,
          });
        } else if(errorCode === "auth/invalid-email") {
          Toast.show({
            type: 'error',
            text1: "Invalid Email",
            text2: "Please enter a valid email address",
            visibilityTime: 4000,
          });
        } else if(errorCode === "auth/weak-password") {
          Toast.show({
            type: 'error',
            text1: "Weak Password",
            text2: "Make sure your password is longer than 6 characters",
            visibilityTime: 4000,
          });
        } else { //default catch others
          Toast.show({
            type: 'error',
            text1: "Invalid Registration",
            text2: "Please try again or contact support at savetuba2023@gmail.com",
            visibilityTime: 4000,
          });
        }
        console.log("RegisterScreen.js createUser | Error Code: ", error.code, "| Message: ", error.message);
      });
  }

  //posting user to "users" and "classrooms" collection
  async function postUser(){
    let photoURL = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fantelope-profile-pic.jpg?alt=media&token=26382673-a602-4c7d-b255-18ae83bc525a";

    await db.collection("users").doc(email).set({
      email: email,
      firstName: firstName,
      lastName: lastName,
      classCode: "dummyClassroom",
      photoURL: photoURL,
      experiencePoints: 0,
      isNewUser: true,
    });

    console.log("new user auth successful. Pushing to Main . . .");
    navigation.replace("Main");

    //resetting registration form for sanity
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
        source={require("../../../assets/registerScreenBg.png")}
        style={styles.imageBackground}
        fadeDuration={0}
      >
        <TitleText color="secondary" size="title">
          {t("common:makeanewaccount")}
        </TitleText>

        <InputContainer>
          <Input
            placeholder={t("common:email")}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#696969"
            value={email}
            autoCapitalize="none"
          />
          <Input
            placeholder={t("common:password")}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#696969"
            value={password}
            autoCapitalize="none"
          />
          <Input
            placeholder={t("common:firstname")}
            onChangeText={(text) => setFirstName(text)}
            placeholderTextColor="#696969"
            value={firstName}
            autoCapitalize="none"
          />
          <Input
            placeholder={t("common:lastname")}
            onChangeText={(text) => setLastName(text)}
            placeholderTextColor="#696969"
            value={lastName}
            autoCapitalize="none"
          />
        </InputContainer>

        <ButtonContainer>
          {/* asynchronously register & push user to db, setting loading icon to visible while we do so */}
          <Button onPress={() => {createUser(); }}>
            <TitleText color="secondary" size="body">
              {t("common:signup")}
            </TitleText>
          </Button>
        </ButtonContainer>

        <BottomContainer>
          <ButtonOutLine onPress={() => navigation.navigate("AlternativeLogin")} style={{marginTop: 10}}>
            <TitleText color="primary" size="body">
              {t("common:back")}
            </TitleText>
          </ButtonOutLine>
        </BottomContainer>

      </ImageBackground>
    </Container>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  margin-bottom: 100px;
  width: 100%;
  align-items: center;
`;

const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[2]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[2]};
  color: green;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.View`
  width: 60%;
  align-self: center;
`;
const InputContainer = styled.View`
  width: 70%;
  margin-top: 30px;
  align-self: center;
`;

const BottomContainer = styled.View`
position: absolute;
bottom: 15%;
width: 50%;
padding-horizontal: ${(props) => props.theme.space[3]};
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