import React, { useState } from "react";
import {
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { SafeArea } from "../../../safe-area.component";
import { Spacer } from "../../../spacer.component";
import { ComplexAnimationBuilder } from "react-native-reanimated";
import {
  fetchAchievements,
  addAchievement,
  closeAchievementModal,
} from "../../../../../redux/actions";
import LevelSystem from "../../../../features/Account/LevelSystem/LevelSystem";

import { bindActionCreators } from "redux";


const Stack = createNativeStackNavigator();

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
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
  width: 200px;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const Prompt = styled.View`
  width: 80%;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
`;
const SubmitButton = styled.TouchableOpacity`
  width: 100px;
  justify-content: center;
  height: 40px;
  background-color: #748816;
  align-self: center;
  border-radius: 20px;
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
        <Prompt>
          <TitleText>
            Congratulations, you've just finished your first quiz! Go back to
            the lesson to continue learning!
          </TitleText>
          <Spacer size="large" />
          <SubmitButton onPress={() => navigation.navigate("Lesson")}>
            <BodyText color="secondary">Back</BodyText>
          </SubmitButton>
        </Prompt>
      </SafeArea>
    </ImageBg>
  );
};

const Start = ({ data }) => {
  const navigation = useNavigation();

  const [correct, setCorrect] = useState(false);

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (odg) => {
    if (odg == correctAnswer) {
      setScore(() => score + 1);
    }
    // console.log("Score: " + score + "/4");
  };
  const [currentPrompt, setCurrentPrompt] = useState(data.content[0].prompt);

  const [visible, setVisible] = useState(false);

  const [firstVisible, setFirstVisible] = useState("flex");
  const [secondVisible, setSecondVisible] = useState("none");
  const [thirdVisible, setThirdVisible] = useState("none");
  const [fourthVisible, setFourthVisible] = useState("none");

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
                {correct == true
                  ? "That's right! Good job ✨"
                  : "Incorrect! Better luck next time 🍀"}
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
                setVisible(!visible);
                if (count == 0) {
                  setCount(count + 1);
                  setCurrentPrompt(data.content[count + 1].prompt);
                  setFirstVisible("none");
                  setSecondVisible("flex");
                } else if (count == 1) {
                  setCount(count + 1);
                  setCurrentPrompt(data.content[count + 1].prompt);
                  setSecondVisible("none");
                  setThirdVisible("flex");
                } else if (count == 2 && data.content[count + 1] != null) {
                  setCount(count + 1);
                  setCurrentPrompt(data.content[count + 1].prompt);
                  setThirdVisible("none");
                  setFourthVisible("flex");
                } else {
                  navigation.navigate("SecondScreen", {
                    score: score,
                    prompt: "Congratulations, you've just finished your first quiz! Go back to the lesson to continue learning!"
                  });
                }
              }}
            >
              <BodyText size="subtitle" color="secondary">
                Next
              </BodyText>
            </TouchableOpacity>
          </ModalContainer>
        </View>
      </Modal>
    );
  };

  const renderAnswers = ({ item }) => {
    return (
      <>
        <Category
          activeOpacity="0.8"
          onPress={() => {
            if (item.text == data.content[count].answer) {
              setCorrect(true);
              setScore(() => score + 1);
            } else {
              setCorrect(false);
            }
            setVisible(true);
          }}
        >
          <BodyText size="subtitle">{item.text}</BodyText>
        </Category>
      </>
    );
  };

  return (
    <>
      <ImageBg source={data.imageBg}>
        <Container>
          <Question>
            <TitleText size="title">{currentPrompt}</TitleText>
          </Question>

          <FlatList // The flatlist used to load minigames and their data.
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: firstVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <FlatList // The flatlist used to load minigames and their data.
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: secondVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <FlatList // The flatlist used to load minigames and their data.
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: thirdVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <FlatList // The flatlist used to load minigames and their data.
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: fourthVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <Modko visible={false} />
        </Container>
      </ImageBg>
    </>
  );
};

const QuizHandler = ({ data, navigation, route, currentUser, addAchievement }) => {
  // console.warn(currentUser);
  addAchievement("first-quiz-minigame");
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start data={data} />}
      </Stack.Screen>

      <Stack.Screen name="SecondScreen" options={{ headerShown: false }} component={LevelSystem}/>
    </Stack.Navigator>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { addAchievement },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(QuizHandler);
