import React, { Component } from 'react';
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
  textdecorationcolor: green;
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

//Design pattern: userSlice state (redux) is NOT set in RegisterScreen. We only ever set user state via
//dispatch(fetchUser()) which happens once in LoginScreen.js and nowhere else.
const RegisterScreen = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [classCode, setClassCode] = useState("");


    //registerUser creates a new user only if a valid class code already exists within firebase.
    //triggered by signUp button's onPress.
    //we also check for a phone number with length of 10 digits.
    const registerUser = async() => {
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g,''); //removing all non-numerical characters from input string via regex

        if(cleanedPhoneNumber.length != 11) { //checking for phoneNumber length
            Alert.alert("Invalid Phone Number", "Please format as follows: +7 8005550175")

        } else { //phoneNumber is of correct length
            await db.collection("classrooms").doc(classCode).get()
                .then((snapshot) => { //checking if classCode exists
                    if(snapshot.exists) { 

                        createUser(cleanedPhoneNumber); //see below

                    } else {//classCode does not exist
                        Alert.alert("Invalid ClassCode", "Please contact support.");
                    }
                });
        }
    }

    //documentation for createUserWithEmailAndPassword: https://firebase.google.com/docs/auth/web/password-auth
    //New users are identified by their "cleaned" phone number. if we successfully sign in, we 
    //1) add the user (and initial user metadata) to our user list
    //2) add the user's phone number to the specified classCode's classrooms collection in firebase
    const createUser = async(cleanedPhoneNumber) => {
        const phone = cleanedPhoneNumber + '@x.x'; //see LoginScreen's handleLogin() for explanation
        await auth.createUserWithEmailAndPassword(phone, password)
            .then((userCredential) => { //successfully signed in
                const user = userCredential.user;

                postUser(cleanedPhoneNumber); //see below

                //alert popup, OK button pushes user to Login screen. https://reactnative.dev/docs/alert
                Alert.alert(`Welcome, ${firstName} ${lastName}!`, 
                            `Your account has been successfully created!\nPhone Number: ${phone}`,
                            [{text: 'OK', onPress: () => {
                                console.log('OK Pressed. Pushing to Login screen');
                                navigation.navigate("Login");
                            }}]);

            })
            .catch((error) => { //firebase createUser failed
                console.log("Error Code: ", error.code, "| Message: ", error.message);
                Alert.alert("Invalid Registration", "Please try again");
            });
    }

    //posting user to "users" and "classrooms" collection
    const postUser = async(cleanedPhoneNumber) => {
        //1) setting user within the "users" doc
        await setDoc(doc(db, "users", cleanedPhoneNumber), {
            //setting user metadata
            phoneNumber: phoneNumber,
            firstName: firstName,
            lastName: lastName,
            classCode: classCode
        });

        //2) adding student's phoneNumber to the specified class within the "classrooms" doc
        await updateDoc(doc(db, "classrooms", classCode), {
            students: arrayUnion(cleanedPhoneNumber)
        });
    } 
    //end of registerUser methods

    //rendering components
    return (
        <Container behavior="padding">
          <ImageBg source={require("../../../assets/homepagebackground.png")}>
            <TitleText color="secondary" size="title">
              {t("common:makeanewaccount")}
              {/* Register For Save Tuba */}
            </TitleText>
  
            <InputContainer>
              <Input
                placeholder={t("common:email")}
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                placeholderTextColor="#696969"
                value={phoneNumber}
                autoCapitalize="none"
              />
              <Input
                placeholder={t("common:password")}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                placeholderTextColor="#696969"
                value={password}
                autoCapitalize="none"
              />
              <Input
                placeholder={t("common:firstname")}
                onChangeText={(firstName) => setFirstName(firstName)}
                placeholderTextColor="#696969"
                value={firstName}
                autoCapitalize="none"
              />
              <Input
                placeholder={t("common:lastname")}
                onChangeText={(lastName) => setLastName(lastName)}
                placeholderTextColor="#696969"
                value={lastName}
                autoCapitalize="none"
              />
              <Input
                placeholder={t("common:classcode")}
                onChangeText={(classCode) => setClassCode(classCode)}
                placeholderTextColor="#696969"
                value={classCode}
                autoCapitalize="none"
              />
            </InputContainer>
  
            <ButtonContainer>
              <Button
                onPress={() => { registerUser() }}
              >
                <TitleText color="secondary" size="body">
                  {t("common:signup")}
                </TitleText>
              </Button>
            </ButtonContainer>

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
  
            <ButtonContainer>
              <BackButton
                onPress={() => {
                  navigation.navigate("Login");
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