import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";
import { Alert } from 'react-native';

//firebase api imports (will be used to create user)
import { setDoc, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../../firebase";

//i18next imports
import { useTranslation } from "react-i18next";

import { useNavigation } from "@react-navigation/native";

//styled components
const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;
const BackButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border: ${(props) => props.theme.space[1]} solid
    ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.space[4]};
  bottom: 0;
`;

const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[2]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[2]};
  color: green;
`;

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
// align-content: center;
const ButtonContainer = styled.View`
  width: 50%;
  align-self: center;
`;
const InputContainer = styled.View`
  width: 70%;
  margin-top: 30px;
  align-self: center;
`;

//Design pattern: userSlice user state (redux) is NOT set in RegisterScreen. We only ever set user state via
//dispatch(fetchUser()) which happens upon login and nowhere else to minimize redundancy.
const RegisterScreen = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [classCode, setClassCode] = useState("");


    //registerUser creates a new user only if a valid class code already exists within firebase's "classrooms" collection.
    //Function is triggered by signUp button's onPress.
    const registerUser = async() => {
      await db.collection("classrooms").doc(classCode).get()
        .then((snapshot) => { //checking if classCode exists
          if(snapshot.exists) { 

              createUser(); //see below

          } else {//classCode does not exist
              Alert.alert("Invalid class code");
          }
        });
    }

    //createUserWithEmailAndPassword: https://firebase.google.com/docs/auth/web/password-auth
    //if we successfully sign in, we 
    //1) add the user (and initial user metadata) to our user list
    //2) add the user's email to the specified classCode's classrooms collection in firebase
    const createUser = async() => {
      await auth.createUserWithEmailAndPassword(email, password) //creating user
        .then((userCredential) => { //successfully signed in
          const user = userCredential.user;
          postUser(); //see below

          //alert popup, OK button pushes user to Login screen. https://reactnative.dev/docs/alert
          Alert.alert(`Welcome, ${firstName} ${lastName}!`, 
                      `Your account has been successfully created.`,
                      [{text: 'OK', onPress: () => {
                          console.log('OK Pressed. Pushing to Login screen');
                          navigation.navigate("Login");
                      }}]);
        })
        .catch((error) => { //firebase createUser failed
            console.log("RegisterScreen.js createUser | Error Code: ", error.code, "| Message: ", error.message);
            Alert.alert("Invalid Registration", "Make sure your password is longer than 6 characters.");
        });
    }

    //posting user to "users" and "classrooms" collection
    const postUser = async() => {
      //1) setting user within the "users" doc
      //const cleanedPhoneNumber = phoneNumber.replace(/\D/g,''); //regex removing all non-digit chars
      await setDoc(doc(db, "users", email), {
        //setting user metadata
        //phoneNumber: cleanedPhoneNumber,
        email: email,
        firstName: firstName,
        lastName: lastName,
        classCode: classCode,
        experiencePoints: 0
      });
      //2) adding student's email to the specified class within the "classrooms" doc
      await updateDoc(doc(db, "classrooms", classCode), {
          students: arrayUnion(email)
      });
      //resetting registration form for sanity
      //setPhoneNumber("");
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setClassCode("");
    } 
    //end of registerUser methods

    return (
        <Container behavior="padding">
          <ImageBg source={require("../../../assets/homepagebackground.png")}>
            <TitleText color="secondary" size="title">
              {t("common:makeanewaccount")}
              {/* Register For Save Tuba */}
            </TitleText>
  
            <InputContainer>
              {/* <Input
                placeholder={"Phone Number"}
                onChangeText={(text) => setPhoneNumber(text)}
                placeholderTextColor="#696969"
                value={phoneNumber}
                autoCapitalize="none"
              /> */}
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
              <Input
                placeholder={t("common:classcode")}
                onChangeText={(text) => setClassCode(text)}
                placeholderTextColor="#696969"
                value={classCode}
                autoCapitalize="none"
              />
            </InputContainer>
  
            <ButtonContainer>
              <Button
                onPress={() => { 
                  registerUser();
                }}
              >
                <TitleText color="secondary" size="body">
                  {t("common:signup")}
                </TitleText>
              </Button>
            {/* NOTE: Teacher Registration is now handled on the teacher interface web application only. */}
            {/* <ButtonContainer>
              <Button
                onPress={() => {
                  this.props.navigation.navigate("RegisterTeacher");
                }}
              >
                <TitleText color="secondary" size="body">
                  {t("common:teachersignup")}
                </TitleText>
              </Button>
            </ButtonContainer> */}
              <BackButton
                onPress={() => {
                  navigation.navigate("LoginEmail");
                }}
              >
                <TitleText color="primary" size="body">
                  {t("common:back")}
                </TitleText>
              </BackButton>
            </ButtonContainer>

          </ImageBg>
        </Container>
      );
}

export default RegisterScreen;