import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { View, Modal, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import LottieView from "lottie-react-native";
import { BodyText } from "../../../components/body-text.component";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import LoadingModal from "./LoadingModal";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";
import { useUpdateXPMutation, usePostCompletionMutation } from "../../../../redux/apiSlice";
import styled from "styled-components/native";
import { Audio } from "expo-av";

const CompletionModal = ({ score, prompt, startCompletionProcess, content, totalPossibleScore }) => {
  const user = useSelector(selectCurrentUser);
  const grade = useSelector(state => state.curriculum.grade);
  const chapter = useSelector(state => state.curriculum.chapter);
  const lesson = useSelector(state => state.curriculum.lesson);
  const activityType = useSelector(state => state.curriculum.activity);

  function concatenateFirstLetterAndLastNumbers(str) {
    const firstLetter = str.charAt(0);
    const numbers = str.match(/\d+/g).join(''); // Regex extracting the numbers
    return firstLetter + numbers;
  }

  const gradeID = concatenateFirstLetterAndLastNumbers(grade);
  const chapterID = concatenateFirstLetterAndLastNumbers(chapter);
  const lessonID = concatenateFirstLetterAndLastNumbers(lesson);

  const completionID = `${gradeID}${chapterID}${lessonID}_${activityType}`;

  const { t } = useTranslation();
  const navigation = useNavigation();
  const XP_PER_POINT = 15;

  const [scoreShown, setScoreShown] = useState("");
  const [finalXP, setFinalXP] = useState(0);
  const [loadingModal, setLoadingModal] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [previouslySubmitted, setPreviouslySubmitted] = useState(false);
  const [text, setText] = useState("");

  const [updateXP] = useUpdateXPMutation();
  const [postCompletion] = usePostCompletionMutation();
  const [sound, setSound] = useState();

  async function playSound(soundFile) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( soundFile
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if(!startCompletionProcess) { return; } //guard clause

    console.log(`Completion ID: ${completionID}`);
    if(score < 0) {
      setScoreShown("");
      score === -1 ? setFinalXP(100) : setFinalXP(1500);
    } else {
      setScoreShown(`${t("minigames:finalscore")}: ${score}/${totalPossibleScore}\n\n`);
      setFinalXP(score * XP_PER_POINT);
    }
    performCompletionProcess(score < 0 ? (score === -1 ? 100 : 1500) : score * XP_PER_POINT);
  }, [score, startCompletionProcess])

  const performCompletionProcess = async(newXP) => {
    try {
      const start = performance.now();
      console.log("\n\t!!! now performing completion process . . .");
      setLoadingModal(true);

      const completionRef = db.collection("users").doc(user.email).collection("Completions").doc(completionID);
      const completionSnapshot = await completionRef.get();
      if(completionSnapshot.exists) {
        console.log(`${user.firstName} has already previously submitted ${completionID}.`);
        setPreviouslySubmitted(true);
      } else {
        console.log(`it is ${user.firstName}'s first time submitting ${completionID}`);
        console.log(`!!! ADDING ${newXP} EXPERIENCE TO USER !!!`);
        await updateXP({ newXP: newXP, oldXP: user.experiencePoints, email: user.email }).unwrap();
      }

      let submittedContent;
      if(score < 0) {
        submittedContent = content;
      } else {
        submittedContent = `${score}/${totalPossibleScore}`;
      }

      await postCompletion({ userEmail: user.email, completionID: completionID, content: submittedContent }).unwrap();

      setLoadingModal(false);
      setCompletionModalVisible(true);
      playSound(require('../../../../assets/saveTubaSoundEffects/minigameComplete.wav'));

      const elapsedTimeSeconds = (performance.now() - start) / 1000;
      console.log(`\n\t!!! performCompletionProcess done in ${elapsedTimeSeconds.toFixed(2)} seconds\n`);
    } catch(error) {
      console.error(error);
      return;
    }
  }

  useEffect(() => {
    console.log("FINALXP:", finalXP);
    if(!previouslySubmitted) {
      setText(`${scoreShown}${prompt} ✨\n\n+${finalXP} XP!\n`);
    } else {
      setText(`${scoreShown}${prompt}\n\n${t("minigames:alreadyclaimedxp")}\n`);
    }
  }, [previouslySubmitted, finalXP, scoreShown, prompt]);

  return (
    <>
      <LoadingModal visible={loadingModal} />
      <Modal transparent animationType="none" visible={completionModalVisible} >
        <View style={styles.modalContainer}>
          <ModalContainer>

            <BodyText size="subtitle">
            {text}
            </BodyText>

          <TouchableOpacity
            style={styles.greenButtonModal}
            onPress={() => { playSound(require('../../../../assets/saveTubaSoundEffects/pageBack.wav')); navigation.navigate("Lesson"); }}
          >
          <BodyText size="subtitle" color="secondary">
            {t("minigames:return")}
          </BodyText>
          </TouchableOpacity>

          </ModalContainer>
        </View>

        <Image 
          style={styles.tubaImage}
          source={require("../../../../assets/tuba-low-quality.png")}
          fadeDuration={100}
          overflow="visible"
        />
        <LottieView 
          source={require("../../../../assets/lottie-animations/confetti-animation.json")}
          autoPlay={true}
          loop={false}
          style={styles.confettiContainer}
          resizeMode='cover'
        />
      </Modal>
    </>
  );
}

export default CompletionModal;

const styles = StyleSheet.create({
  greenButtonModal: {
    backgroundColor: "#748816",
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  tubaImage: {
    position: "absolute",
    bottom: -90,
    right: -230,
    width: 500,
    height: "100%",
    transform: [{ scaleX: -1 }, { scaleX: 0.3 }, { scaleY: 0.3 }, { rotate: "-5deg" }],
    zIndex: 2,
  },
  modalContainer:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    zIndex: 1, 
    elevation: -2
  },
  confettiContainer: {
    position: "absolute", 
    top: 0, 
    left: 0, 
    width: "100%", 
    height: "100%", 
    zIndex: 0
  }
})

const ModalContainer = styled.View`
  background-color: #fcfff4;
  width: 72%;
  padding: 30px;
  border-radius: 20px;
  border: 5px solid #cce882;
`;
