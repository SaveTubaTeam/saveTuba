import React, { useState } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";
import {
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import { ImageBg } from "../../grades.styles";
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import ImageUpload from "../ImageUpload";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Prompt = styled.View`
  width: 95%;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 10px;
  align-self: center;
`;

//@param objectData the snapshot object passed in from IndividualLessonHandler
const SnapshotHandler = ({ objectData, imageMap }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
      <Container>
        <ImageBg source={require("../../../../../assets/snapshotbg.png")}>
          <ScrollView contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Prompt>
            <TitleText size="subtitle">{objectData.prompt}</TitleText>
          </Prompt>

            <ImageUpload 
              score={-1} 
              prompt={"minigames:snapshotprompt"} 
              activityType={"Snapshot"}
            />

          </ScrollView>
        </ImageBg>
      </Container>
  );
};

export default SnapshotHandler;
