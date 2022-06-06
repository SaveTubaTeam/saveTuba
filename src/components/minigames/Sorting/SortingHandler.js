import React, { useState } from "react";
import { View, Modal, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
import { SafeArea } from "../../safe-area.component";
import { ImageBg } from "../../Grades/grades.styles";
import { Spacer } from "../../spacer.component";

const Stack = createNativeStackNavigator();

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.View`
  width: 90%
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

const Category = styled.TouchableOpacity`
  justify-content: center;
  background-color: white;
  height: 100px;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

const Option = styled.View`
  position: absolute;
  top: 20px;
  width: 60%;
  border-radius: 20px;
  border: 8px solid #c6dc3b;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 150px;
  background-color: white;
  padding: 10px;
`;

const Img = styled.ImageBackground`
  margin-top: 10px;
  height: 70%;
  width: 70%;
`;

const SecondScreen = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ImageBg source={data.content[0].imageBg}>
      <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
        <Container2 style={{ backgroundColor: "white" }}>
          <TitleText>
            Отличная работа! Вернитесь к уроку, чтобы продолжить обучение!
          </TitleText>
          <Spacer size="large" />
          <Pressable onPress={() => navigation.navigate("Grade")}>
            <BodyText color="primary">Назад</BodyText>
          </Pressable>
        </Container2>
      </SafeArea>
    </ImageBg>
  );
};

const Start = ({ data }) => {
  const [correctAnswer, setCorrectAnswer] = useState(
    data.content[1].firstAnswer
  );
  const [answer, setAnswer] = useState("");
  const [visible, setVisible] = useState(false);

  const [visibleOne, setVisibleOne] = useState(1);
  const [visibleTwo, setVisibleTwo] = useState(0);
  const [visibleThree, setVisibleThree] = useState(0);

  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  const checkAnswer = (odg) => {
    if (odg == correctAnswer) {
      console.log("Correct");
    } else {
      console.log("you suck");
    }
  };

  const Modko = () => {
    return (
      <Modal transparent animationType="slide" visible={visible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalContainer>
            <TouchableOpacity
              style={{ position: "absolute", right: 10, top: 5 }}
              onPress={() => setVisible(!visible)}
            >
              <BodyText>✖️</BodyText>
            </TouchableOpacity>
            <View>
              <BodyText size="subtitle">
                {correctAnswer == answer
                  ? "Правильный ответ! Хорошая работа ✨"
                  : "Неправильный ответ! Повезет в следующий раз 🍀"}
              </BodyText>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#748816",
                borderRadius: 10,
                marginTop: 10,
                paddingTop: 5,
                paddingBottom: 5,
              }}
              onPress={() => {
                if (count == 0) {
                  setVisibleOne(0);
                  setVisibleTwo(1);
                  setVisible(false);
                  setCorrectAnswer(data.content[1].secondAnswer);
                  setCount(1);
                } else if (count == 1) {
                  setVisibleTwo(0);
                  setVisibleThree(1);
                  setVisible(false);
                  setCorrectAnswer(data.content[1].thirdAnswer);
                  setCount(2);
                } else if (count == 2) {
                  setVisible(false);
                  navigation.navigate("SecondScreen");
                }
              }}
            >
              <BodyText size="subtitle" color="secondary">
                Следующий
              </BodyText>
            </TouchableOpacity>
          </ModalContainer>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <ImageBg source={data.content[0].imageBg}>
        <SafeArea>
          <Container>
            <View
              style={{
                maxWidth: "100%",
                paddingTop: 130,
              }}
            >
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(data.content[0].categoryOne);
                  checkAnswer(data.content[0].categoryOne);
                  setVisible(true);
                }}
              >
                <BodyText size="title">{data.content[0].categoryOne}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(data.content[0].categoryTwo);
                  checkAnswer(data.content[0].categoryTwo);
                  setVisible(true);
                }}
              >
                <BodyText size="title">{data.content[0].categoryTwo}</BodyText>
              </Category>

              {/* OPTIONAL THIRD CATEGORY */}
              {data.content[0].categoryThree != null && (
                <Category
                  activeOpacity="0.8"
                  onPress={() => {
                    setAnswer(data.content[0].categoryThree);
                    checkAnswer(data.content[0].categoryThree);
                    setVisible(true);
                  }}
                >
                  <BodyText size="title">
                    {data.content[0].categoryThree}
                  </BodyText>
                </Category>
              )}
            </View>

            <Modko
              visible={false}
              correctAnswer={correctAnswer}
              answer={answer}
            />
          </Container>
          <Option style={{ opacity: visibleOne }}>
            <TitleText>{data.content[1].first}</TitleText>
            {data.content[1].firstImage && (
              <Img resizeMode="contain" source={data.content[1].firstImage} />
            )}
          </Option>
          <Option style={{ opacity: visibleTwo }}>
            <TitleText>{data.content[1].second}</TitleText>
            {data.content[1].secondImage && (
              <Img resizeMode="contain" source={data.content[1].secondImage} />
            )}
          </Option>
          <Option style={{ opacity: visibleThree }}>
            <TitleText>{data.content[1].third}</TitleText>
            {data.content[1].thirdImage && (
              <Img resizeMode="contain" source={data.content[1].thirdImage} />
            )}
          </Option>
        </SafeArea>
      </ImageBg>
    </>
  );
};

const SortingHandler = ({ data, navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start data={data} />}
      </Stack.Screen>
      <Stack.Screen name="SecondScreen" options={{ headerShown: false }}>
        {() => <SecondScreen data={data} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(SortingHandler);
