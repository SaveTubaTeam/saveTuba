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
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal";

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

//Main function. Handles most logic. 
//@param data is taken from QuizScreen format in Firebase
const Start = ({ data, imageMap }) => {
  //const navigation = useNavigation();

  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  console.log("Start ==> ", data.content[0].prompt);
  
  //defining visibility state modals
  const [visible, setVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);

  //called when we click "Next" on the answer modal. We iterate count until the end of the quiz
  const nextQuestion = () => {
    if (count < data.content.length - 1) { //if we still have questions, we iterate
      setCount(count + 1);
    } else { //otherwise, we have completed the quiz and completion modal is set to visible
      setCompletionModalVisible(!completionModalVisible);
    }
    setVisible(false); //closing answer modal
  };

  //handleAnswer checks if the user's input matches our current prompt's answer and sets the answer modal to visible
  const handleAnswer = (answer) => {
    const correct = (answer === data.content[count].answer);
    setCorrectAnswer(correct);
    if (correct) {
      setScore(score + 1);
    }
    setVisible(true);
  };

  //ModalComponent returns answer Modal screen. Visibility of modal initially set to false.
  //Currently implemented for a maximum of four questions.
  const ModalComponent = () => {
    return (
      <Modal transparent animationType="slide" visible={visible}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ModalContainer>
            {/* This TouchableOpacity is an x on the top right of the modal which does not move us to the next question */}
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

            {/* green button 'Next' at the bottom of modal to move to the next question */}
            <TouchableOpacity
              style={{
                backgroundColor: "#748816",
                borderRadius: 10,
                marginTop: 10,
                paddingTop: 5,
                paddingBottom: 5,
              }}
              onPress={nextQuestion}
            >
              {/* marked for translation */}
              <BodyText size="subtitle" color="secondary">
                Next
              </BodyText>

            </TouchableOpacity>

          </ModalContainer>
        </View>
      </Modal>
  )};

  const renderAnswers = ({ item, index }) => {
    return (
      <>
        <Category
          key={index}
          onPress={() => {
            console.log("Answer Choices:", data.content[count].answers); {/* NOTE: plural between answer and answers is the difference between pulling the entire answers array or just the answer!*/}
            console.log("Correct Answer:", data.content[count].answer);
            console.log("User Input:", item);
            handleAnswer(item);
          }}
        >
          <BodyText size="subtitle">{item}</BodyText>
        </Category>
      </>
    );
  };

  return (
    <>
      <ImageBg source={{ uri: imageMap["assets/nat.jpg"] }}>
        <Container>
          <Question>
            <TitleText size="title">{data.content[count].prompt}</TitleText>
          </Question>

          {/* Flatlist takes content from our current count in data */}
          {/* If count changes, we have changed the data inside of Flatlist and then Flatlist is forced to re-render. */}
          <FlatList
            scrollEnabled={true}
            data={data.content[count].answers}
            keyExtractor={(item) => item}
            renderItem={renderAnswers}
            style={{ display: "flex" }}
            contentContainerStyle={{
              alignItems: "center",
            }}
          />

          <ModalComponent visible={visible}  />

            {/* marked for translation */}
          <CompletionModal visible={completionModalVisible} score={score} 
          prompt={`Congratulations!\nYou've just finished this quiz!\nGo back to the lesson to continue learning.`}
          >
          </CompletionModal>

        </Container>
      </ImageBg>
    </>
  );
};

//Entry Point for logic.
//@param objectData the quiz object passed in from IndividualLessonHandler
const QuizHandler = ({ objectData, imageMap }) => {
  // console.log("Handler ==> ", data);
  return ( //defining the stack
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start data={objectData} imageMap={imageMap} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default QuizHandler;
