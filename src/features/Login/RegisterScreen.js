import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";
import { Alert, ActivityIndicator, StyleSheet, View } from 'react-native';

//firebase api imports (will be used to create user)
import { setDoc, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../../firebase";

//i18next imports
import { useTranslation } from "react-i18next";

import { useNavigation } from "@react-navigation/native";
//import { ActivityIndicator } from 'react-native-paper';

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
//dispatch(fetchUser()) which happens upon Main.js render and nowhere else to minimize redundancy.

//NOTE: there is an auth event listener in the login screens which redirects to HomeScreen upon successful account creation
const RegisterScreen = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    //const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [classCode, setClassCode] = useState("");
    const [loading, setLoading] = useState(false);


    //registerUser creates a new user only if a valid class code already exists within firebase's "classrooms" collection.
    //Function is triggered by signUp button's onPress.
    const registerUser = async() => {
      setLoading(true);

      if(classCode) {

        await db.collection("classrooms").doc(classCode).get()
          .then((snapshot) => { //checking if classCode exists
            if(snapshot.exists) { 

                createUser(); //see below

            } else {//classCode does not exist
                setLoading(false);
                /* marked for translation */
                Alert.alert("Invalid class code");
            }
          });

      } else { //classCode is falsy (empty string)
        setLoading(false);
        /* marked for translation */
        Alert.alert("Invalid class code")
      }

    }

    //createUserWithEmailAndPassword: https://firebase.google.com/docs/auth/web/password-auth
    //if we successfully register, we 
    //1) add the user (and initial user metadata) to our user list
    //2) add the user's email to the specified classCode's classrooms collection in firebase
    const createUser = async() => {
      await auth.createUserWithEmailAndPassword(email, password) //creating user
        .then((userCredential) => {
           //successfully registered. This API call also signs the user in, 
           //which triggers the onAuthStateChanged() event listener in LoginScreen, 
           //which pushes us to "HomeScreen" in the navigation stack.
          const user = userCredential.user;
          console.log("\n\tUser Registered: ", auth.currentUser.email)
          postUser(); //see below

          //alert popup: https://reactnative.dev/docs/alert
          /* marked for translation */
          Alert.alert(`Welcome, ${firstName} ${lastName}!`, 
                      `Your account has been successfully created.`);
        })
        .catch((error) => { //firebase createUser failed
            setLoading(false);
            console.log("RegisterScreen.js createUser | Error Code: ", error.code, "| Message: ", error.message);
            /* marked for translation */
            Alert.alert("Invalid Registration", "Email or password is invalid. Make sure your password is at least 6 characters.");
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
      setLoading(false);
    } 
    //end of registerUser methods

    return (
        <Container behavior="padding">
          {/* here a ternary operator is used to render a spinner if loading == true (see below) */}
          {!loading ? (
            <ImageBg source={require("../../../assets/homepagebackground.png")}>
              <TitleText color="secondary" size="title">
                {t("common:makeanewaccount")}
                {/* Register For Save Tuba */}
              </TitleText>
    
              <InputContainer>
                {/* <Input
                  placeholder={"Phone Number (ex +7 9435553201)"}
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

                {/* asynchronously register & push user to db, setting loading icon to visible while we do so */}
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
          ) : (
            <View style={[styles.container, styles.horizontal]}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          )}
        </Container>
      );
}

export default RegisterScreen;

const styles = StyleSheet.create({
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