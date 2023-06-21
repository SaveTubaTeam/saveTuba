import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { db, auth } from "../../../firebase";
import test from "../Grades/Data/test.json";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../components/title-text.component";

//Doesn't work. Look for a way to just use the object here
/** 
const Flag = styled.Image`
  width: 30px;
  height: 20px;
`;

const LANGUAGES = [  {    code: "kk",    label: <Flag source={require("../../../../assets/kz.jpeg")} />,  },  { code: "ru", label: <Flag source={require("../../../../assets/ru.png")} /> },  { code: "en", label: <Flag source={require("../../../../assets/en.png")} /> },];

const Selector = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = (code) => {
    return i18n.changeLanguage(code);
  }
}
*/

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


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
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
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  async function post() {
    // console.log(test.Grade2.chapters[].lessons[0]);
    const chapters = test.Grade2.chapters;
    for (var chaptersIter = 0; chaptersIter < chapters.length; chaptersIter++) {
      var chapter = (chaptersIter + 1).toString();
      var chapterDoc = "Chapter".concat(chapter);

      var lessons = test.Grade2.chapters[chaptersIter].lessons;
      for (var lessonsIter = 0; lessonsIter < lessons.length; lessonsIter++) {

        var lesson = (lessonsIter + 1).toString();
        var lessonCollection = "Lesson".concat(lesson);

        var minigames = test.Grade2.chapters[chaptersIter].lessons[lessonsIter].minigames;
        // console.log(minigames.length);
        for (var minigamesIter = 0; minigamesIter < minigames.length; minigamesIter++) {
          var minigameName = minigames[minigamesIter].navigation;
          // console.log(minigameName);
          await db.collection("testCollection").doc(chapterDoc).collection(lessonCollection).doc(minigameName).set(minigames[minigamesIter])
            .then(() => {
              console.log("Document ", (chaptersIter + 1), " Lesson ", (lessonsIter + 1), "successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });

        }


      }
    }
    // await db.collection("testCollection").doc("testSet").set(test)
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });
  }

  return (
    // <SafeArea>
    <Container behavior="padding">
      <ImageBg source={require("../../../assets/loginBackground.png")}>
        <InputContainer>
          <Input
            placeholder={t("common:email")} //Email
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
          <Button onPress={handleLogin}>
            <TitleText color="secondary" size="body">
              {t("common:login")}
            </TitleText>
          </Button>

          <ButtonOutLine onPress={() => navigation.push("Register")}>
            <TitleText color="primary" size="body">
              {t("common:signup")}
            </TitleText>
          </ButtonOutLine>

          <Button onPress={post}>
            <TitleText color="secondary" size="body">
              Post
            </TitleText>
          </Button>
        </ButtonContainer>
      </ImageBg>
    </Container>
    // </SafeArea> // safe area is not needed because we want the background to go to the border
  );
};

export default LoginScreen;
