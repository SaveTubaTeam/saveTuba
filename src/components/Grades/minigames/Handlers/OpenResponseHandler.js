import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { Image } from 'expo-image';
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Button } from "react-native-paper";

import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { ImageBg } from "../../grades.styles";

import ImageUpload from "../ImageUpload";

import { getChapterData, getLessonData, getGradeData } from "../../../../features/Grades/Handlers/Database.js";
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal";

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

//@param data is the OpenResponse object passed in from OpenResponseHandler
const ImagePrompt = ({ data, imageMap }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <ScrollView>
        <View
          style={{
            width: "90%",
            padding: 15,
            alignItems: "center",
            backgroundColor: "white",
            margin: 20,
            borderRadius: 15,
          }}
        >
            <Image 
              source={{uri: data.imageDownloadURL}} 
              placeholder={data.imageBlurHash}
              style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 10, }} 
              contentFit="cover"
            />
          <TitleText size="subtitle">
            {data.prompt}
          </TitleText>
        </View>

        <ImageUpload score={-1} prompt={"minigames:openresponseprompt"} activityType={"ImageBoom"}/>

    </ScrollView>
  );
};

//@param objectData is the OpenResponse object
const OpenResponseHandler = ({ objectData, imageMap }) => {
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBg
        source={require("../../../../../assets/openResponseBg.jpg")} //hardcoded background
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <ImagePrompt data={objectData} imageMap={imageMap} />
        </View>
      </ImageBg>
    </View>
  );
};

export default OpenResponseHandler;
