import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { db, auth } from "../../../firebase";
import grade2 from "../Grades/Data/grade2.json";
import grade3 from "../Grades/Data/grade3.json";
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

    // Grade 2
    const chapters2 = grade2.Grade2.chapters;
    const gradeName2 = Object.keys(grade2)[0];
    for (var chapters2Iter = 0; chapters2Iter < chapters2.length; chapters2Iter++) {
      var chapter2 = (chapters2Iter + 1).toString();
      var chapterDoc2 = "Chapter".concat(chapter2);
      var lessons2 = grade2.Grade2.chapters[chapters2Iter].lessons;

      for (var lessons2Iter = 0; lessons2Iter < lessons2.length; lessons2Iter++) {
        var lesson2 = (lessons2Iter + 1).toString();
        var lessonCollection2 = "Lesson".concat(lesson2);
        var minigames2 = grade2.Grade2.chapters[chapters2Iter].lessons[lessons2Iter].minigames;

        for (var minigames2Iter = 0; minigames2Iter < minigames2.length; minigames2Iter++) {
          var minigameName2 = minigames2[minigames2Iter].navigation;
          await db.collection(gradeName2).doc(chapterDoc2).collection(lessonCollection2).doc(minigameName2).set(minigames2[minigames2Iter])
            .then(() => {
              console.log("Chapter ", (chapters2Iter + 1), " Lesson ", (lessons2Iter + 1), "successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }
      }
    }

    // Grade 3
    const chapters3 = grade3.Grade3.chapters;
    const gradeName3 = Object.keys(grade3)[0];
    for (var chapters3Iter = 0; chapters3Iter < chapters3.length; chapters3Iter++) {
      var chapter3 = (chapters3Iter + 1).toString();
      var chapterDoc3 = "Chapter".concat(chapter3);
      var lessons3 = grade3.Grade3.chapters[chapters3Iter].lessons;

      for (var lessons3Iter = 0; lessons3Iter < lessons3.length; lessons3Iter++) {
        var lesson3 = (lessons3Iter + 1).toString();
        var lessonCollection3 = "Lesson".concat(lesson3);
        var minigames3 = grade3.Grade3.chapters[chapters3Iter].lessons[lessons3Iter].minigames;

        for (var minigames3Iter = 0; minigames3Iter < minigames3.length; minigames3Iter++) {
          var minigameName3 = minigames3[minigames3Iter].navigation;
          await db.collection(gradeName3).doc(chapterDoc3).collection(lessonCollection3).doc(minigameName3).set(minigames3[minigames3Iter])
            .then(() => {
              console.log("Chapter ", (chapters3Iter + 1), " Lesson ", (lessons3Iter + 1), "successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        }
      }
    }


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

          {/* <Button onPress={post}>
            <TitleText color="secondary" size="body">
              Post
            </TitleText>
          </Button> */}
        </ButtonContainer>
      </ImageBg>
    </Container>
    // </SafeArea> // safe area is not needed because we want the background to go to the border
  );
};

export default LoginScreen;
