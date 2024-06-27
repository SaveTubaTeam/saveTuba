import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
import { ImageBg } from "../grades.styles";
import ImageUpload from "../minigames/ImageUpload";
import { useDispatch } from "react-redux";
import { addActivity } from "../../../../redux/slices/curriculumLocationSlice";

//@param objectData our Mastery object passed from IndividualLessonHandler
const MasteryHandler = ({ objectData }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addActivity({ activity: "Mastery" }));
  }, [])
  
  const renderItem = ({ item }) => {
    return (
      <Prompt>
        <TitleText size="subtitle">{item.text}</TitleText>
        {item.image && (
          <Image
            style={{ width: 200, height: 200, borderRadius: 10, margin: 10 }}
            source={{uri: item.imageDownloadURL}}
            placeholder={item.imageBlurHash}
          />
        )}
      </Prompt>
    );
  };

  return (
    <ImageBg
      resizeMode="cover"
      style={{ flex: 1, paddingTop: 20 }}
      source={require("../../../../assets/masterybg.png")}
    >
      <FlatList
        data={ objectData.content }
        style={{ width: "100%" }}
        keyExtractor={(item, index) => index}
        key={(item, index) => index}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: "center" }}
        ListFooterComponentStyle={{ width: "100%", alignItems: "center" }}
        ListFooterComponent={
          <>
            <Prompt>
              <TitleText size="subtitle">{objectData.prompt}</TitleText>
            </Prompt>
            <ImageUpload score={-2} prompt={"minigames:masteryprompt"} />
          </>
        }
      />
    </ImageBg>
  );
};

export default MasteryHandler;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Prompt = styled.View`
  width: 350px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  overflow: hidden;
`;