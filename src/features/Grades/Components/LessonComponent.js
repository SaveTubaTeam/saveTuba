import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { SafeArea } from "../../../components/safe-area.component";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { MasteryFlex } from "../../../components/mastery-flex.component";
import {
  Adventure,
  Header,
  ImageBg,
  Mastery,
} from "../../../components/Grades/grades.styles";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Container = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const MasteryStyle = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Chunk = styled.View`
  margin-top: 5px;
  width: 30px;
  height: 10px;
  background-color: #748816;
  border: 1px solid white;
`;

const Head = styled.View`
  width: 80%;
  margin: 50px 0 20px 0;
  border-radius: 10px;
  padding: 40px 30px 40px 30px;
  background-color: #fff8e7;
  align-items: center;
`;

const Tower = styled.Image`
  position: absolute;
  top: 50px;
  z-index: 100;
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

const ProgContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

//This component formats and renders all of the lesson's contents

//@param lessonData the lesson object which contains all of that lesson's metadata and mastery and minigame objects.
function LessonComponent({ imageMap, lessonData, navigation }) {

  const minigames = [];
  const mastery = [];
  //extracting mastery and minigame objects
  console.log("LessonComponent:", lessonData.masteryAndMinigames);
  lessonData.masteryAndMinigames.forEach((object) => {
    object.navigation.includes("Mastery") ? mastery.push(object) : minigames.push(object);
  })

  const nav = useNavigation();
  const { t } = useTranslation();

  const renderItem = ({ item }) => {
    return (
      <>
        <Adventure
          onPress={() => {
            nav.navigate(item.navigation);
          }}
        >
          <View
            style={{
              backgroundColor: item.backgroundColor,
              height: 150,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: "70%",
                aspectRatio: 1,
                width: undefined,
                marginBottom: 5,
              }}
              source={{ uri: imageMap[item.icon] }}
            ></Image>
            <TitleText size="subtitle" color="secondary">
              {t(item.title)} 
            </TitleText>
          </View>
        </Adventure>
      </>
    );
  };

  const Progress = () => {
    return (
      <>
        <ProgContainer>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Chunk />
            <Chunk />
            <Chunk />
            <Chunk />
            <Chunk />
          </View>
          <BodyText>5/5</BodyText>
        </ProgContainer>
      </>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Header
          title={t("common:lesson")}
          back={"Chapter"}
          navigation={navigation}
        />

        <FlatList // The flatlist used to load the lesson's content
          ListHeaderComponent={
            <View style={{
              height: "100%",
              width: "100%",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Tower 
              source={{ uri: imageMap[lessonData.thumbnail] }}
              style={{
                position: "absolute",
                top: 10,
                zIndex: 100,
                height: 80,
                width: 80,
                borderRadius: 40
              }}
              />
              <Head>
                <TitleText size="title">
                  { lessonData.title }
                </TitleText>
                <Spacer size="large" />

                <Progress />
              </Head>
            </View>
          }
          
          data={
            minigames
          }
          numColumns={2}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
          renderItem={renderItem}
          contentContainerStyle={{
            width: "90%",
            alignSelf: "center",
          }}
          style={{
            marginBottom: 20,
            width: "100%",
          }}
          ListFooterComponentStyle={{
            alignItems: "stretch",
            width: "85%"
          }}
          ListFooterComponent={

            <MasteryFlex masteryArray={mastery} navigation={navigation} />

          }
        />
      </Container>
    </SafeArea>
  );
}

export default LessonComponent;