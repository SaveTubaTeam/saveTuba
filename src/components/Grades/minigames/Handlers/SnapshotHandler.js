import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { ImageBg } from "../../grades.styles";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import ImageUpload from "../ImageUpload";
import { useDispatch } from "react-redux";
import { addActivity } from "../../../../../redux/slices/curriculumLocationSlice.js";

//@param objectData the snapshot object passed in from IndividualLessonHandler
const SnapshotHandler = ({ objectData }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(addActivity({ activity: "Snapshot" }));
  },[])

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
            />

          </ScrollView>
        </ImageBg>
      </Container>
  );
};

export default SnapshotHandler;

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