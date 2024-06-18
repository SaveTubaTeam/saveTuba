import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
import { ImageBg } from "../grades.styles";
import ImageUpload from "../minigames/ImageUpload";

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

const InputContainer = styled.View`
  width: 100%;
  background-color: white;
  margin: 10px;
  border-radius: 30px;
  padding: 20px;
`;


//TODO: need to add ability to input file, also need to check if user has actually submitted anything. Can copy SnapshotHandler modal for that.
//@param objectData our Mastery object passed from IndividualLessonHandler
const MasteryHandler = ({ objectData, imageMap }) => {
  const [text, setText] = useState("");
  const { t } = useTranslation();
  
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
      style={{
        flex: 1,
        paddingTop: 20
      }}
      source={require("../../../../assets/masterybg.png")}
    >
      <FlatList //
        data={ objectData.content }
        style={{ width: "100%" }}
        keyExtractor={(item, index) => index}
        key={(item, index) => index}
        renderItem={renderItem}
        contentContainerStyle={{
          alignItems: "center"
        }}
        ListFooterComponentStyle={{ width: "100%", alignItems: "center" }}
        ListFooterComponent={
          <>
            <Prompt>
              <TitleText size="subtitle">{objectData.prompt}</TitleText>
            </Prompt>
            <ImageUpload score={-2} prompt={"minigames:masteryprompt"}/>
          </>
        }
      />
    </ImageBg>
  );
};

export default MasteryHandler;
