import React, { useState } from "react";
import { View, Modal, Pressable } from "react-native";
import styled from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeArea } from "../../safe-area.component";
import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Container = styled.View`
  flex: 1;
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
  height: 150px;
  background-color: white;
  padding: 10px;
`;

const Img = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

const Modko = ({ visible, correctAnswer, answer }) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View>
        <View>
          <Pressable onPress={() => setModalVisible(!visible)}>
            <BodyText>✖️</BodyText>
          </Pressable>
          <View>
            <BodyText>
              {correctAnswer == answer
                ? "Correct answer! Good job ✨"
                : "Incorrect answer! Better luck next time 🍀"}
            </BodyText>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const SecondScreen = (props) => {
  return <BodyText>hi</BodyText>;
};

const Start = () => {
  const [correctAnswer, setCorrectAnswer] = useState("Non-living");
  const [answer, setAnswer] = useState("");

  const checkAnswer = (odg) => {
    if (odg == correctAnswer) {
      console.log("Correct");
    } else {
      console.log("you suck");
    }
  };

  return (
    <>
      <ImageBg source={require("../../../../assets/beach.jpg")}>
        <SafeArea>
          <Container>
            <TitleText size="title">
              Click on the corresponding category:
            </TitleText>
            <View style={{ flexDirection: "row" }}>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  checkAnswer("Living");
                }}
              >
                <BodyText size="title">Living</BodyText>
              </Category>
              <Category
                activeOpacity="0.8"
                onPress={() => {
                  checkAnswer("Non-living");
                }}
              >
                <BodyText size="title">Non-living</BodyText>
              </Category>
            </View>
            <Option>
              <Img
                resizeMode="contain"
                source={require("../../../../assets/wave.jpg")}
              >
                <TitleText>Water</TitleText>
              </Img>
            </Option>
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

const Sorting = () => {
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

export default Sorting;
