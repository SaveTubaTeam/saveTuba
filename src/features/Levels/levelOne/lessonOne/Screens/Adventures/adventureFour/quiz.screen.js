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
  flex: 0.7;
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

const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const Category = styled.TouchableOpacity`
  justify-content: center;
  background-color: white;
  width: 40%;
  height: 100px;
  margin: 5px;
  border-radius: 10px;
`;

const Option = styled.View`
  position: absolute;
  bottom: 20px;
  width: 150px;
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

const SecondScreen = ({ navigation }) => {
  return (
    <ImageBg source={require("../../../../../../../../assets/beach.jpg")}>
      <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
        <Container2 style={{ backgroundColor: "white" }}>
          <TitleText>
            Поздравляем! Вы завершили свою первую сортировочную контрольный
            опрос!
          </TitleText>
          <Spacer size="large" />
          <Pressable
            onPress={() => navigation.navigate("Level")}
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
  const [correctAnswer, setCorrectAnswer] = useState("Не живой");
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
                  setVisibleOne(0);
                  setVisibleTwo(1);
                  setVisible(false);
                  setCorrectAnswer("Живой");
                  setCount(1);
                } else if (count == 1) {
                  setVisibleTwo(0);
                  setVisibleThree(1);
                  setVisible(false);
                  setCorrectAnswer("Живой");
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
      <ImageBg source={require("../../../../../../../../assets/beach.jpg")}>
        <SafeArea>
          <Container>
            <TitleText size="title">
              Нажмите на соответствующую категорию:
            </TitleText>
            <View style={{ flexDirection: "row", paddingTop: 100 }}>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer("Живой");
                  checkAnswer("Живой");
                  setVisible(true);
                }}
              >
                <BodyText size="title">Живой</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  setAnswer("Не живой");
                  checkAnswer("Не живой");
                  setVisible(true);
                }}
              >
                <BodyText size="title">Не живой</BodyText>
              </Category>
            </View>

            <Modko
              visible={false}
              correctAnswer={correctAnswer}
              answer={answer}
            />
          </Container>
          <Option style={{ opacity: visibleOne }}>
            <TitleText>Вода</TitleText>
            <Img
              resizeMode="contain"
              source={require("../../../../../../../../assets/wave.jpg")}
            />
          </Option>
          <Option style={{ opacity: visibleTwo }}>
            <TitleText>Животные</TitleText>
            <Img
              resizeMode="contain"
              source={require("../../../../../../../../assets/animals.png")}
            />
          </Option>
          <Option style={{ opacity: visibleThree }}>
            <TitleText>Растения</TitleText>
            <Img
              resizeMode="contain"
              source={require("../../../../../../../../assets/pots.png")}
            />
          </Option>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
