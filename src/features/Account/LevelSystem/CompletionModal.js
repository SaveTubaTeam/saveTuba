import React, { useEffect, useState, useContext } from "react";
import { CurriculumLocationContext } from "../../Grades/Handlers/HandlerContexts";
import { theme } from "../../../infrastructure/theme";
import { View, Modal, Pressable, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";
import { Spacer } from "../../../components/spacer.component";
import LottieView from "lottie-react-native";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { SafeArea } from "../../../components/safe-area.component";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import LoadingModal from "./LoadingModal";

import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";
import { useUpdateUserXPMutation, usePostCompletionMutation } from "../../../../redux/apiSlice";

import styled from "styled-components/native";
import { t } from "i18next";

//CompletionModal is the final modal which shows up upon all minigame completions.
//In the future this will be the one place that handles pushing content to db.
const CompletionModal = ({ score, prompt, startCompletionProcess, content, activityType, totalPossibleScore }) => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { gradeNumber, chapterNumber, lessonNumber} = useContext(CurriculumLocationContext);

  function concatenateFirstAndLastLetters(str) {
    const firstLetter = str[0];
    const lastLetter = str[str.length - 1];
    return firstLetter + lastLetter;
  }

  const gradeID = concatenateFirstAndLastLetters(gradeNumber);
  const chapterID = concatenateFirstAndLastLetters(chapterNumber);
  const lessonID = concatenateFirstAndLastLetters(lessonNumber);

  const completionID = `${gradeID}${chapterID}${lessonID}_${activityType}`;

  //TODO: classroom tag in apiSlice.js
  //sort through the user's collection in firestore for the current completion and 
  //post score (if relevant), submission time, content

  const { t } = useTranslation();
  const navigation = useNavigation();
  const XP_PER_POINT = 15;

  const [scoreShown, setScoreShown] = useState("");
  const [finalXP, setFinalXP] = useState(0);
  const [loadingModal, setLoadingModal] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);

  const [updateUserXP] = useUpdateUserXPMutation();
  const [postCompletion] = usePostCompletionMutation();

  useEffect(() => {
    if(!startCompletionProcess) { return; } //guard clause

    console.log(`Completion ID: ${completionID}`);
    //some minigames have no score, so a score < 0 is passed into props. We check for this case below
    //*specifically SnapshotHandler and OpenResponseHandler pass a -1 into LevelSystem, MasteryHandler passes a -2 as props
    if(score < 0) {
      setScoreShown("");
      score === -1 ? setFinalXP(100) : setFinalXP(300); //MasteryHandler passes a prop of -2 for more XP
    } else {
      /* marked for translation */
      setScoreShown(`${t("minigames:finalscore")}: ${score}\n\n`);
      setFinalXP(score * XP_PER_POINT);
    }
    //state is not updated locally so we have to calculate the xp again for the below function
    performCompletionProcess(score < 0 ? (score === -1 ? 100 : 300) : score * XP_PER_POINT);
  }, [score, startCompletionProcess])

  const performCompletionProcess = async(newXP) => {
    try {
      const start = performance.now(); // Start performance timer
      console.log("\n\t!!! now performing completion process . . .");
      setLoadingModal(true);

      await updateUserXP({ 
        newXP: newXP, 
        oldXP: user.experiencePoints,
        email: user.email,
        classCode: user.classCode
      }).unwrap();

      let submittedContent;
      if(score < 0) {
        submittedContent = content;
      } else {
        submittedContent = `${score}/${totalPossibleScore}`;
      }

      await postCompletion({ 
        userEmail: user.email, 
        completionID: completionID, 
        content: submittedContent 
      }).unwrap();

      setLoadingModal(false);
      setCompletionModalVisible(true);

      const elapsedTimeSeconds = (performance.now() - start) / 1000;
      console.log(`\n\t!!! performCompletionProcess done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
    } catch(error) {
      console.error(error);
      return;
    }
  }

  return (
    <>
      <LoadingModal visible={loadingModal} />
      <Modal transparent animationType="none" visible={completionModalVisible}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", zIndex: 1, elevation: -2 }}>
          <ModalContainer>

            {/* marked for translation */}
            <BodyText size="subtitle">
            {scoreShown}
            {`${prompt} ✨`}
            {`\n\n+${finalXP} xp!\n`}
            </BodyText>

          {/* green button 'Return' at the bottom of modal to move out of minigame */}
          <TouchableOpacity
            style={{
              backgroundColor: "#748816",
              borderRadius: 10,
              marginTop: 10,
              paddingTop: 5,
              paddingBottom: 5
            }}
            onPress={() => {
              console.log("pushing back to Lessons");
              navigation.navigate("Lesson");
            }}
          >
            {/* marked for translation */}
          <BodyText size="subtitle" color="secondary">
            {t("minigames:return")}
          </BodyText>
          </TouchableOpacity>

          </ModalContainer>
        </View>
          <Image 
        style={{
          position: "absolute",
          bottom: 130,
          right: -70,
          width: "60%", // Adjust the width as needed
          height: "40%", // Adjust the height as needed
          transform: [{ scaleX: -1 }], // Flip the image horizontally
          zIndex: 2, // Set a higher z-index to bring the image in front of the modal
          elevation: -1 //NOTE: zIndex doesn't work w/ Android so we use negative elevations as a hotfix
        }}
        source={require("../../../../assets/tuba-low-quality.png")}
        />
        <LottieView 
          source={require("../../../../assets/lottie-animations/confetti-animation.json")}
          autoPlay={true}
          loop={false}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
          resizeMode='cover'
        />
      </Modal>
    </>
  );
}

export default CompletionModal;

const Container2 = styled.View`
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 70%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;