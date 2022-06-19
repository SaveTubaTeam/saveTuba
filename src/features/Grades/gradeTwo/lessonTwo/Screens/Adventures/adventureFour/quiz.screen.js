import React, { useState } from "react";
import { View, Modal, Pressable, StyleSheet, Text } from "react-native";
import styled from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeArea } from "../../../../../../../components/safe-area.component";
import { TitleText } from "../../../../../../../components/title-text.component";
import { BodyText } from "../../../../../../../components/body-text.component";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "../../../../../../../components/spacer.component";
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

const Question = styled.View``;

const SecondScreen = ({ navigation }) => {
  return (
    <ImageBg source={require("../../../../../../../../assets/nat.jpg")}>
      <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
        <Container2 style={{ backgroundColor: "white" }}>
          <TitleText>
            Поздравляем! Вы завершили свою первую сортировочную контрольный
            опрос!
          </TitleText>
          <Spacer size="large" />
          <Pressable
            onPress={() => navigation.navigate("Grade")}
            style={styles.next}
          >
            <BodyText color="secondary">Вернитесь назад</BodyText>
          </Pressable>
        </Container2>
      </SafeArea>
    </ImageBg>
  );
};

const Start = () => {
  const [correctAnswer, setCorrectAnswer] = useState(4);
  const [answer, setAnswer] = useState(0);
  const [visible, setVisible] = useState(false);

  const [visibleOne, setVisibleOne] = useState("flex");
  const [visibleTwo, setVisibleTwo] = useState("none");
  const [visibleThree, setVisibleThree] = useState("none");

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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.button}
              onPress={() => setVisible(!visible)}
            >
              <BodyText style={styles.textStyle}>✖️</BodyText>
            </Pressable>
            <View style={styles.correctContainer}>
              <Text style={styles.modalText}>
                {correctAnswer == answer
                  ? "Правильный ответ! Хорошая работа ✨"
                  : "Неправильный ответ! Повезет в следующий раз 🍀"}
              </Text>
            </View>
            <Pressable
              style={styles.next}
              onPress={() => {
                if (count == 0) {
                  setVisibleOne("none");
                  setVisibleTwo("flex");
                  setVisible(false);
                  setCorrectAnswer(1);
                  setCount(1);
                } else if (count == 1) {
                  setVisibleTwo("none");
                  setVisibleThree("flex");
                  setVisible(false);
                  setCorrectAnswer(1);
                  setCount(2);
                } else if (count == 2) {
                  setVisible(false);
                  navigation.navigate("SecondScreen");
                }
              }}
            >
              <BodyText color="secondary">Следующий</BodyText>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <ImageBg source={require("../../../../../../../../assets/nat.jpg")}>
        <SafeArea>
          <Container>
            <Question style={{ display: visibleOne }}>
              <TitleText size="title">Что такое СО2?</TitleText>
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
                <BodyText size="subtitle">Углерод</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(2);
                  checkAnswer(2);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">Кислород</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(3);
                  checkAnswer(3);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">Тип газированного напитка</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(4);
                  checkAnswer(4);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">Углекислый газ</BodyText>
              </Category>
            </Answers>

            <Question style={{ display: visibleTwo }}>
              <TitleText size="title">
                Какой из них не добавляет CO2 в атмосферу?
              </TitleText>
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
                <BodyText size="subtitle">сажать деревья</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(2);
                  checkAnswer(2);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">приготовление пищи на газу</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(3);
                  checkAnswer(3);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">горящее дерево</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(4);
                  checkAnswer(4);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">ехать в автобусе</BodyText>
              </Category>
            </Answers>

            <Question style={{ display: visibleThree }}>
              <TitleText size="title">
                Почему избыток углекислого газа в атмосфере вызывает изменение
                климата?
              </TitleText>
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
                <BodyText size="subtitle">
                  Он удерживает тепло и согревает нашу планету
                </BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(2);
                  checkAnswer(2);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">Охлаждает нашу планету</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(3);
                  checkAnswer(3);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">Он блокирует УФ-лучи</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer(4);
                  checkAnswer(4);
                  setVisible(true);
                }}
              >
                <BodyText size="subtitle">
                  Он пропускает солнечный свет
                </BodyText>
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

const Quiz = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        options={{ headerShown: false }}
        component={Start}
      />
      <Stack.Screen
        name="SecondScreen"
        options={{ headerShown: false }}
        component={SecondScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  next: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: "#748816",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: "#60BBDD",
  },
  modalView: {
    alignItems: "flex-end",
    width: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    paddingTop: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  correctContainer: {
    alignItems: "center",
    width: "100%",
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  textCloseStyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    paddingRight: 5,
    paddingLeft: 5,
  },
});

export default Quiz;
