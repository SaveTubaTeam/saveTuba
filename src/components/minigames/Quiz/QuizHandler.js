import React, { useState } from "react";
import { View, Modal, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
import { SafeArea } from "../../safe-area.component";
import { Spacer } from "../../spacer.component";

const Stack = createNativeStackNavigator();

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.View`
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const Category = styled.TouchableOpacity`
  justify-content: center;
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
`;

const Answers = styled.View`
  width: 90%;
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

const Question = styled.View`
  width: 90%;
  margin-bottom: 20px;
`;

const SecondScreen = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ImageBg source={data.content[0].imageBg}>
      <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
        <Container2 style={{ backgroundColor: "white" }}>
          <TitleText>
            Поздравляем! Вы завершили свою первую сортировочную контрольный
            опрос!
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
  const navigation = useNavigation();

  const [correctAnswer, setCorrectAnswer] = useState(data.content[1].answer);
  const [answer, setAnswer] = useState(0);
  const [visible, setVisible] = useState(false);

  const [visibleOne, setVisibleOne] = useState("flex");
  const [visibleTwo, setVisibleTwo] = useState("none");
  const [visibleThree, setVisibleThree] = useState("none");

  const [count, setCount] = useState(0);

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
                  setVisibleOne("none");
                  setVisibleTwo("flex");
                  setVisible(false);
                  setCorrectAnswer(data.content[2].answer);
                  setCount(1);
                  console.log("hi");
                } else if (count == 1) {
                  setVisibleTwo("none");
                  setVisibleThree("flex");
                  setVisible(false);
                  setCorrectAnswer(data.content[3].answer);
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
            <Question style={{ display: visibleOne }}>
              <TitleText size="title">{data.content[1].prompt}</TitleText>
            </Question>
            <Answers style={{ display: visibleOne }}>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(1);
                  checkAnswer(1);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[1].first}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(2);
                  checkAnswer(2);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[1].second}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(3);
                  checkAnswer(3);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[1].third}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(4);
                  checkAnswer(4);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[1].fourth}</BodyText>
              </Category>
            </Answers>

            <Question style={{ display: visibleTwo }}>
              <TitleText size="title">{data.content[2].prompt}</TitleText>
            </Question>
            <Answers style={{ display: visibleTwo }}>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(1);
                  checkAnswer(1);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[2].first}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(2);
                  checkAnswer(2);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[2].second}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(3);
                  checkAnswer(3);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[2].third}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(4);
                  checkAnswer(4);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[2].fourth}</BodyText>
              </Category>
            </Answers>

            <Question style={{ display: visibleThree }}>
              <TitleText size="title">{data.content[3].prompt}</TitleText>
            </Question>
            <Answers style={{ display: visibleThree }}>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(1);
                  checkAnswer(1);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[3].first}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(2);
                  checkAnswer(2);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[3].second}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(3);
                  checkAnswer(3);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[3].third}</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(4);
                  checkAnswer(4);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">{data.content[3].fourth}</BodyText>
              </Category>
            </Answers>

            <Modko
              visible={false}
              correctAnswer={correctAnswer}
              answer={answer}
            />
          </Container>
        </SafeArea>
      </ImageBg>
    </>
  );
};

const QuizHandler = ({ data, navigation }) => {
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

export default connect(mapStateToProps, null)(QuizHandler);
