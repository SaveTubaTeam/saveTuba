import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { ImageBg } from "../../grades.styles";
import ImageUpload from "../ImageUpload";
import { useDispatch } from "react-redux";
import { addActivity } from "../../../../../redux/slices/curriculumLocationSlice.js";

//@param data is the OpenResponse object passed in from OpenResponseHandler
const ImagePrompt = ({ data }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(addActivity({ activity: "ImageBoom" }));
  },[])

  return (
    <ScrollView>
        <View style={styles.contentContainer}>
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

        <ImageUpload score={-1} prompt={"minigames:openresponseprompt"} />

    </ScrollView>
  );
};

//@param objectData is the OpenResponse object
const OpenResponseHandler = ({ objectData }) => {
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBg
        source={require("../../../../../assets/openResponseBg.jpg")} //hardcoded background
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, width: "100%" }}>
          <ImagePrompt data={objectData} />
        </View>

      </ImageBg>
    </View>
  );
};

export default OpenResponseHandler;

const styles = StyleSheet.create({
  contentContainer: {
    width: "90%",
    padding: 15,
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 15,
  }
})