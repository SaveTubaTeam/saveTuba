import React, { Component, useEffect, useState } from "react";
import { theme } from "../../../infrastructure/theme";
import { View, Modal, Pressable, TouchableOpacity, Text } from "react-native";
import { Spacer } from "../../../components/spacer.component";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { SafeArea } from "../../../components/safe-area.component";

import { useNavigation } from "@react-navigation/native";

import styled from "styled-components/native";

import { auth, db } from "../../../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { t } from "i18next";

const LevelSystem = ({ score, prompt, visible }) => {
  const navigation = useNavigation();
  const XP_PER_POINT = 15;

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalContainer>

        <View>
          {/* marked for translation */}
          <BodyText size="subtitle">
          {`Final Score: ${score}\n\n`}
          {`${prompt} ✨`}
          {`\n\nYou gained ${score * XP_PER_POINT} xp!\n`}
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
          Return
        </BodyText>
        </TouchableOpacity>

      </ModalContainer>
      </View>
    </Modal>
  );
}

export default LevelSystem;

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