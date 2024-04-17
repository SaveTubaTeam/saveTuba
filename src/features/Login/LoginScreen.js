import { TitleText } from "../../components/title-text.component";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { auth } from "../../../firebase";
import { Alert } from 'react-native';

import { fetchImages } from "../../../redux/slices/imageSlice";
import { setKazakh, setEnglish, setRussian } from "../../../redux/slices/languageSlice";
import { useDispatch } from "react-redux";
import { getCacheObject, postBoilerplate } from "../Grades/Handlers/Database";

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

//Please see here for firebase.auth() v8 documentation: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  //fetching images, setting global language
  useEffect(() => {
    dispatch(fetchImages());
    // const language = i18n.language; --> need to check this out. default is always ru, overriding redux pattern
    const language = "en"; //need a selector
    if (language === "en") { //English
      dispatch(setEnglish());
      console.log("set language to en");
    } else if (language === "ru") { //Russian
      dispatch(setRussian());
      console.log("set language to ru");
    } else if (language === "kk") { //Kazakh
      dispatch(setKazakh());
      console.log("set language to kk");
    }
    /*if (auth.currentUser) { //currentUser is either null or filled. Null is treated as a falsy.
      console.log(auth.currentUser);
      navigation.replace("HomePage");
    }*/

    //we set an observer on the auth object via onAuthStateChanged()
    const login = auth.onAuthStateChanged((user) => { //basically listening/waiting for handleLogin()
      if (user) { //evaluates to true if user is signed in (not null or undefined)
        console.log("auth.currentUser.email:", auth.currentUser.email);

        //should dispatch user to store here

        //resetting login form state for sanity
        setPhoneNumber("");
        setPassword("");

        console.log("Login successful. Pushing to HomePage!");
        navigation.replace("HomePage");
      }
    });

    return login;
  }, []); //end of useEffect(). I believe rerender happens every time button onPress event is triggered.

  // const imageMap = useSelector(state => state.imageMap.imageData);
  // console.log("Image Map 1: ", imageMap);
  // const handleSignup = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log(user.email);
  //     })
  //     .catch((error) => alert(error.message));
  // };

  //signInWithEmailAndPassword does not perform authorization. We append @x.x to the filtered phone number to sign in w/o phone number auth
  //but still provide a unique "key" for each user.
  //Solution taken from here: https://stackoverflow.com/questions/37467492/how-to-provide-user-login-with-a-username-and-not-an-email
  const handleLogin = async () => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g,''); //removing all non-numerical characters from input string via regex
    const phone = cleanedPhoneNumber + '@x.x';

    await auth
      .signInWithEmailAndPassword("tester@gmail.com", "test123")
      .then((userCredentials) => { //successfully signed in
        const user = userCredentials.user; //referring to userCredentials (auth object) properties
        console.log("Logged in with:", user.email);
      })
      .catch((error) => {
        Alert.alert("Invalid Login", "Hint - Phone numbers should be formatted:\n+7 8005550175");
        console.log("Error: ", error.message);
      });
  };


  return (
    // <SafeArea>
    <Container behavior="padding">
      <ImageBg source={require("../../../assets/loginBackground.png")}>
        <InputContainer>
          <Input
            placeholder={t("common:email")} //Email changed to phone number
            placeholderTextColor="#696969"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)} // Need to change for production
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

          <ButtonOutLine onPress={() => navigation.push("Register")}>
            <TitleText color="primary" size="body">
              {t("common:signup")}
            </TitleText>
          </ButtonOutLine>

          {/* This posted the data that was pulled from the post method above */}
          {/* <Button onPress={postData}>
            <TitleText color="secondary" size="body">
              Post
            </TitleText>
          </Button> */}

          {/* <Button onPress={changeData}>
            <TitleText color="secondary" size="body">
              Change Data
            </TitleText>
          </Button> */}

          {/*<Button onPress={() => postBoilerplate("GradeX", "ChapterX")}>
            <TitleText color="secondary" size="body">
              Post Boilerplate
            </TitleText>
        </Button>*/}

        </ButtonContainer>
      </ImageBg>
    </Container>
    // </SafeArea> // safe area is not needed because we want the background to go to the border
  );
}; //end of LoginScreen

export default LoginScreen;
