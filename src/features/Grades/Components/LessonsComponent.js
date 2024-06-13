import { FlatList, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Header } from "../../../components/Grades/grades.styles";
import { Spacer } from "../../../components/spacer.component";
import { useTranslation } from "react-i18next";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Lesson = styled.TouchableOpacity`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  background-color: #fff;
  border-radius: 20px;
  height: 100px;
`;

const CurrentLesson = styled.TouchableOpacity`
  width: 90%;
  margin-top: 10px;
  align-self: center;
  background-color: #fff;
  border-radius: 20px;
  height: 200px;
  margin-bottom: 10px;
`;

//This component renders every lesson card in the current chapter.

//@param lessonsData an array of objects returned by getLessonsData() in LessonsHandler
//       Each object within lessonsData is a lesson and all of that lesson's data (including mastery and minigame objects)
function LessonsComponent({ lessonsData, navigation }) {
  const imageMap = useSelector(state => state.imageMap.imageData);
  const nav = useNavigation();
  const { t } = useTranslation();
  // console.log("LD: ", lessonsData);

  const renderItem = ({ item }) => {
    return (
      <CurrentLesson
        onPress={() => {
          nav.navigate(item.navigation);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "58%",
              padding: 20,
              height: 200,
              zIndex: 1000,
            }}
          >
            <TitleText align="left" size="subtitle" color="primary">
              {item.title}
            </TitleText>
            <Spacer size="small" />
            <BodyText align="left" color="primary">
              0/5
            </BodyText>
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 15,
                paddingRight: 20,
                backgroundColor: "#F6FEDB",
                borderRadius: 20,
                borderColor: "#CCE882",
                borderWidth: 2,
                flexDirection: "row",
              }}
              onPress={() => {
                nav.navigate(item.navigation);
              }}
            >
              <Ionicons
                name="md-play"
                size={16}
                color="#748816"
                style={{ paddingRight: 5, paddingTop: 1 }}
              />
              <BodyText align="left" color="primary">
                {t("common:start")}
              </BodyText>
            </TouchableOpacity>
          </View>
          <Image
            style={{
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              position: "absolute",
              right: 0,
              bottom: 0,
              height: 200,
              width: "44%",
              aspectRatio: 1,
            }}
            source={{ uri: item.thumbnailDownloadURL }}
            placeholder={item.thumbnailBlurHash}
          />
        </View>
      </CurrentLesson>
  )};

  return (
    <SafeArea>
      <Container>
        <Header
          title={t("common:lessons")}
          back="Grade"
          navigation={navigation}
        />
        <FlatList
          style={{ width: "100%" }}
          data={lessonsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
        />
      </Container>
    </SafeArea>
  );
}
export default LessonsComponent;