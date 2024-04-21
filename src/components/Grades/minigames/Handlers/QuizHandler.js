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

//SecondScreen is rendered upon iterating through a maximum of four questions. 
//navigation used to erroneously direct us to LevelSystem.js...
const SecondScreen = ({ data, imageMap }) => {
  const navigation = useNavigation();
  // console.log("Second Screen ==> ", data);
  return (
    <ImageBg source={imageMap[data.content[0]["imageBg"]]}>
      <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
        <Prompt>
          <TitleText>
            {`Hello World`}
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

//Main function. Handles most logic. 
//@param data is taken from QuizScreen format in Firebase
const Start = ({ data, imageMap }) => {
  const navigation = useNavigation();

  const [correctAnswer, setCorrect] = useState(false);

  //count is used to track the question number
  const [count, setCount] = useState(0);

  //see renderAnswers for setScore() state change
  const [score, setScore] = useState(0);

  // const checkAnswer = (odg) => {
  //   if (odg == correctAnswer) {
  //     setScore(() => score + 1);
  //   }
  //   // console.log("Score: " + score + "/4");
  // };
  console.log("Start ==> ", data.content[0].prompt);
  const [currentPrompt, setCurrentPrompt] = useState(data.content[0].prompt);

  //defining visibility state of each question
  const [visible, setVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState("flex");
  const [secondVisible, setSecondVisible] = useState("none");
  const [thirdVisible, setThirdVisible] = useState("none");
  const [fourthVisible, setFourthVisible] = useState("none");

  //ModalComponent returns answer Modal screen. Visibility of modal initially set to false.
  //Currently implemented for a maximum of four questions.
  const ModalComponent = () => {
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
                {correctAnswer == true
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
                  console.log("Current Count:", count, "Current Prompt:", currentPrompt);
                  setFirstVisible("none");
                  setSecondVisible("flex");
                } else if (count == 1) {
                  setCount(count + 1);
                  setCurrentPrompt(data.content[count + 1].prompt);
                  console.log("Current Count:", count, "Current Prompt:", currentPrompt);
                  setSecondVisible("none");
                  setThirdVisible("flex");
                } else if (count == 2 && data.content[count + 1] != null) {
                  setCount(count + 1);
                  setCurrentPrompt(data.content[count + 1].prompt);
                  console.log("Current Count:", count, "Current Prompt:", currentPrompt);
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

  //The following function handles answer logic. Heavily dependent on correctly formatted data in Firebase.
  //<Category/> is just a styled component. Should rename this component because its function was initially confusing to me.
  const renderAnswers = ({ item }) => {
    return (
      <>
        <Category
          activeOpacity="0.8"
          onPress={() => {
            console.log("Answer Choices:", data.content[count].answers); {/* NOTE: plural between answer and answers is the difference between pulling the entire answers array or just the answer!*/}
            console.log("Correct Answer:", data.content[count].answer);
            console.log("User Input:", item.text);
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
      <ImageBg source={{ uri: imageMap[data["imageBg"]] }}>
        <Container>
          <Question>
            <TitleText size="title">{currentPrompt}</TitleText>
          </Question>

          <FlatList //Question 1. Setting visibility in style prop. See renderAnswers() above for answer matching logic.
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            //key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: firstVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <FlatList //Question 2
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            //key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: secondVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <FlatList // Question 2
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            //key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: thirdVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <FlatList // Question 4
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item.text}
            //key={(item, index) => index}
            renderItem={renderAnswers}
            style={{ display: fourthVisible }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <ModalComponent visible={visible}  />
        </Container>
      </ImageBg>
    </>
  );
};

//Entry Point for logic.
const QuizHandler = ({ data, addAchievement, imageMap }) => {
  // console.log("Handler ==> ", data);
  //addAchievement("first-quiz-minigame");
  return ( //defining the stack
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start data={data} imageMap={imageMap} />}
      </Stack.Screen>

      <Stack.Screen name="SecondScreen" options={{ headerShown: false }}>
        {() => <SecondScreen data={data} imageMap={imageMap} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
/* 
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { addAchievement },
    dispatch
  ); */

export default QuizHandler;
