import React, { Component, useEffect, useState } from "react";
import { theme } from "../../../infrastructure/theme";
import { View, Modal, Pressable, TouchableOpacity, Text, Image } from "react-native";
import { Spacer } from "../../../components/spacer.component";

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
    scoreShown = `Final Score: ${score}\n\n`;
    finalXP = score * XP_PER_POINT;
  }
  
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={{ flex: 1 }}>
      <Image 
      style={{
        position: "absolute",
        bottom: 130,
        right: -70,
        width: "60%", // Adjust the width as needed
        height: "40%", // Adjust the height as needed
        transform: [{ scaleX: -1 }], // Flip the image horizontally
        zIndex: 1, // Set a higher z-index to bring the image in front of the modal
      }}
      source={require("../../../../assets/tuba1.png")}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalContainer>

        <View>
          {/* marked for translation */}
          <BodyText size="subtitle">
          {scoreShown}
          {`${prompt} ✨`}
          {`\n\nYou gained ${finalXP} xp!\n`}
          </BodyText>
        </View>

        {/* green button 'Back' at the bottom of modal to move out of minigame */}
        <TouchableOpacity
          style={{
            backgroundColor: "#748816",
            borderRadius: 10,
            marginTop: 10,
            paddingTop: 5,
            paddingBottom: 5,
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
      </View>
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