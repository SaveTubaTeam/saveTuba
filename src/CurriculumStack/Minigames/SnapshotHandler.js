import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView, StyleSheet, ImageBackground } from "react-native";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../styled-components/title-text.component";
import ImageUpload from "../../components/Grades/minigames/ImageUpload";
import { useDispatch } from "react-redux";
import { addActivity } from "../../../redux/slices/curriculumLocationSlice.js";

//@param objectData the snapshot object passed in from IndividualLessonHandler
const SnapshotHandler = ({ objectData, activityType }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(addActivity({ activity: activityType }));
  },[])

  return (
      <Container>
        <ImageBackground 
          source={require("../../../../../assets/snapshotbg.png")}
          style={styles.imageBackground}
          fadeDuration={0}
        >
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
        </ImageBackground>
      </Container>
  );
};

export default SnapshotHandler;

const styles = StyleSheet.create({
  imageBackground: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    paddingTop: 20
  },
})

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