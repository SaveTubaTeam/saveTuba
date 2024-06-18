import React, { Component, useEffect, useState } from "react";
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

import styled from "styled-components/native";

import { auth, db } from "../../../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { t } from "i18next";

//CompletionModal is the final modal which shows up upon all minigame completions.
//In the future this will be the one place that handles pushing content to db.
const CompletionModal = ({ score, prompt, visible }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const XP_PER_POINT = 15;

  //some minigames have no score, so a score < 0 is passed into props. We check for this case below
  //*specifically SnapshotHandler and OpenResponseHandler pass a -1 into LevelSystem, MasteryHandler passes a -2 as props
  let scoreShown;
  let finalXP;
  if(score < 0) {
    scoreShown = '';
    score === -1 ? finalXP = 100 : finalXP = 300; //MasteryHandler passes a prop of -2 for more XP
  } else {
    /* marked for translation */
    scoreShown = `${t("minigames:finalscore")}: ${score}\n\n`;
    finalXP = score * XP_PER_POINT;
  }
  
  return (
    <Modal transparent animationType="fade" visible={visible}>
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