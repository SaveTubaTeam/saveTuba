import { TitleText } from "../../components/title-text.component";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { auth } from "../../../firebase";

import { fetchImages } from "../../../redux/slices/imageSlice";
import { setKazakh, setEnglish, setRussian } from "../../../redux/slices/languageSlice";
import { useDispatch } from "react-redux";



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

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(fetchImages());

    const language = i18n.language;
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

    if (auth.currentUser) {
      navigation.replace("HomePage");


    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("HomePage");


      }
    });

    return unsubscribe;
  }, []);

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

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword("tester@gmail.com", "test123") // changed from email, password
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));



  };


  return (
    // <SafeArea>
    <Container behavior="padding">
      <ImageBg source={require("../../../assets/loginBackground.png")}>
        <InputContainer>
          <Input
            placeholder={t("common:email")} //Email
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
        </ButtonContainer>
      </ImageBg>
    </Container>
    // </SafeArea> // safe area is not needed because we want the background to go to the border
  );
};

export default LoginScreen;
