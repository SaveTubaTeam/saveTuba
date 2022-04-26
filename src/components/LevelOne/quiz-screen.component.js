import React, { useState } from "react";
import styled from "styled-components";
import { QuizContainer } from "react-native-quiz-maker";
import { useNavigation } from "@react-navigation/native";

import { AnswerModal } from "./answer.modal";
import { FinishModal } from "./finish.modal";
import { questionSet } from "./QuestionSet";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ImageBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const QuizScreen = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [resultVisible, setResultVisible] = useState(false);
  const [correct, setCorrect] = useState(false);

  function changeScore(value) {
    props.onStateChange(value);
  }

  return (
    <Container>
      <ImageBg source={require("../../../assets/quiz-bg.jpg")}>
        <AnswerModal
          visible={modalVisible}
          correct={correct}
          setModalVisible={setModalVisible}
        />

        <FinishModal
          visible={resultVisible}
          score={props.score}
          setResultVisible={setResultVisible}
          navigation={navigation}
        />

        <QuizContainer
          questions={questionSet}
          onSubmit={(isCorrect) => {
            setModalVisible(true);
            setCorrect(isCorrect);
            console.log(isCorrect);
          }}
          onComplete={(progress) => {
            setResultVisible(true);
            console.log("score: ", progress);
            changeScore(progress.toFixed(2));
          }}
          continueButtonStyle={{ backgroundColor: "#748816" }}
        />
      </ImageBg>
    </Container>
  );
};
