import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { Image } from 'expo-image';
import { useTranslation } from "react-i18next";
import { TitleText } from "../../styled-components/title-text.component";
import ImageUpload from "../../components/Grades/minigames/ImageUpload";
import { useDispatch } from "react-redux";
import { addActivity } from "../../../redux/slices/curriculumLocationSlice.js";

//@param data is the OpenResponse object passed in from OpenResponseHandler
const ImagePrompt = ({ data, activityType }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(addActivity({ activity: activityType }));
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
const OpenResponseHandler = ({ objectData, activityType }) => {
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../../../assets/openResponseBg.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
        fadeDuration={0}
      >
        <View style={{ flex: 1, width: "100%" }}>
          <ImagePrompt data={objectData} activityType={activityType} />
        </View>

      </ImageBackground>
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
  },
  imageBackground: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    paddingTop: 20
  },
})