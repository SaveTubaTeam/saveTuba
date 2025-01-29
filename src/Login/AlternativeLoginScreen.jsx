import { TitleText } from "../styled-components/title-text.component";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { auth, db } from "../../firebase";
import { Alert, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Toast from 'react-native-toast-message';

const AlternativeLoginScreen = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //updating the auth object with an observer to track changes to the existing user
  useEffect(() => {
   //we set an observer on the auth object via onAuthStateChanged()
   const login = auth.onAuthStateChanged((user) => { //basically listening/waiting for handleLogin()
      if (user) { //evaluates to true if user is signed in (not null or undefined)
         setEmail("");
         setPassword("");
      }
   }); //end of login function

   return login; //this line prevents login from being called more than once
  }, []);

  //this function is called upon pressing the login button
  const handleLogin = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => { //successfully signed in
        const user = userCredentials.user; //referring to userCredentials (auth object) properties
        console.log("\n\tLogged in with:", user.email);
        console.log("Firebase auth successful. Pushing to Main . . .");
        navigation.replace("Main");
      })
      /* marked for translation */
      .catch((error) => { //auth error codes: https://firebase.google.com/docs/reference/js/auth#autherrorcodes
        const errorCode = error.code;
        if(errorCode === "auth/wrong-password") {
          Toast.show({
            type: 'error',
            text1: t("error:incorrectpassword"),
            visibilityTime: 4000,
          });
        } else { //default catch others
          Toast.show({
            type: 'error',
            text1: t("error:invalidlogin"),
            text2: t("error:tryagain"),
            visibilityTime: 4000,
          });
        }
        
        console.log("Error: ", error.message);
      });
  };

  //function to send a password reset email: https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email
  const sendPasswordReset = async() => {
    auth.languageCode = i18n.language; //setting current language code to localize email.
    console.log("language code for password reset email:", auth.languageCode);

    if(userExists()) { //see below
      await auth.sendPasswordResetEmail(email)
        .then(() => {//password reset email sent successfully
          /* marked for translation */
          Toast.show({
            type: 'info',
            text1: t("common:resetemail"),
            text2: t("common:senttoinbox"),
            visibilityTime: 4000,
          });
        }).catch((error) => {
          console.error(error);
          /* marked for translation */
          Toast.show({
            type: 'error',
            text1: t("error:error"),
            text2: t("error:pleaseentervalidemail"),
            visibilityTime: 4000,
          });
        })
    } else {
      /* marked for translation */
      Toast.show({
        type: 'error',
        text1: t("error:invalidemail"),
        text2: t("error:nosuchaccountexists"),
        visibilityTime: 4000,
      });
    }
  }

  //helper for sendPasswordReset
  async function userExists() {
    await db.collection('users').doc(email).get().then((snapshot) => {
      if(snapshot.exists) {
        console.log("user exists. sending password reset email to:", email);
        return true;
      } else {
        console.error(email, "not found within 'users' collection");
        return false;
      }
    })
  }

  return (
    <Container behavior="padding">
      <ImageBackground 
        source={require("../../../assets/loginBackground.png")}
        style={styles.container}
        fadeDuration={0}
      >
        <InputContainer>
          <Input
            placeholder={t("common:email")}
            placeholderTextColor="#696969"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
          <Input
            placeholder={t("common:password")} //Password
            placeholderTextColor="#696969"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            secureTextEntry
          />
        </InputContainer>

        <ButtonContainer>
          <ButtonOutLine onPress={() => { handleLogin(); }}>
            <TitleText color="primary" size="body">
              {t("common:login")}
            </TitleText>
          </ButtonOutLine>

          <Button onPress={() => navigation.push("Register")}>
            <TitleText color="secondary" size="body">
              {t("common:signup")}
            </TitleText>
          </Button>

          {/* Forgot Password link */}
          <TouchableOpacity 
            onPress= {() => {
              console.log("\n\tForgot Password button pressed");
              sendPasswordReset();
            }} 
            style={{alignItems: 'center'}}>
            <Text style={{textDecorationLine: 'underline'}}>
              <TitleText color="secondary" size="button">
                {t("common:forgotpassword")}
              </TitleText>
            </Text>
          </TouchableOpacity>
        </ButtonContainer>

        <BottomContainer>
          <ButtonOutLine onPress={() => navigation.navigate("Login")} style={{marginTop: 10}}>
            <TitleText color="primary" size="body">
              {t("common:back")}
            </TitleText>
          </ButtonOutLine>
        </BottomContainer>
          
      </ImageBackground>
    </Container>
  );
};

export default AlternativeLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
})

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
  align-items: center;
  `;

const BottomContainer = styled.View`
  position: absolute;
  bottom: 15%;
  width: 50%;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;