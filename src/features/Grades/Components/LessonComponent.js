import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView, TouchableOpacityBase, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { SafeArea } from "../../../components/safe-area.component";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { MasteryFlex } from "../../../components/mastery-flex.component";
import { Adventure, Header, ImageBg, Mastery } from "../../../components/Grades/grades.styles";
import { useTranslation } from "react-i18next";

//This component formats and renders all of the lesson's contents
//@param lessonData the lesson object which contains all of that lesson's metadata and mastery and minigame objects.
function LessonComponent({ lessonData, activitiesData, navigation }) {
  const [minigames, setMinigames] = useState(null);
  const [mastery, setMastery] = useState(null);

  useEffect(() => {
    console.log("inside LessonComponent.js.");
    const masteryCopy = [];
    const minigamesCopy = [];

    activitiesData.forEach((object) => {
      object.navigation.includes("Mastery") ? masteryCopy.push(object) : minigamesCopy.push(object);
    });

    setMastery(masteryCopy);
    setMinigames(minigamesCopy);
  }, []);

  const nav = useNavigation();
  const { t } = useTranslation();

  const renderItem = ({ item }) => {
    return (
      <Adventure onPress={() => { nav.navigate(item.navigation); }}>
        <View style={[{ backgroundColor: item.backgroundColor }, styles.cardContainer]}>
          <Image
            style={styles.cardImage}
            source={{ uri: item.iconDownloadURL }}
          />
          <TitleText size="subtitle" color="secondary">
            {t(item.title)} 
          </TitleText>
        </View>
      </Adventure>
    );
  };

  const Progress = () => {
    return (
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
    );
  };

  while (minigames === null || mastery === null) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <SafeArea>
      <Container>
        <Header
          title={`${t("common:lesson")} ${lessonData.navigation.match(/\d+/g)}`}
          back={"Chapter"}
          reduxParam="lesson"
        />

        <FlatList // The flatlist used to load the lesson's content
          ListHeaderComponent={
            <View style={styles.flatlistHeaderContainer}>
              <Image 
                source={{ uri: lessonData.thumbnailDownloadURL }}
                placeholder={lessonData.thumbnailBlurHash}
                style={styles.flatlistHeaderImage}
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
          
          data={ minigames }
          numColumns={2}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
          renderItem={renderItem}
          persistentScrollbar={true}
          contentContainerStyle={{ width: "90%", alignSelf: "center" }}
          style={{ marginBottom: 20, width: "100%" }}
          ListFooterComponentStyle={{ alignItems: "stretch", width: "85%" }}
          ListFooterComponent={
            <MasteryFlex masteryArray={mastery} navigation={navigation} />
          }
        />

      </Container>
    </SafeArea>
  );
}

export default LessonComponent;

const styles = StyleSheet.create({
  flatlistHeaderContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  flatlistHeaderImage: {
    position: "absolute",
    top: 10,
    zIndex: 100,
    height: 80,
    width: 80,
    borderRadius: 40
  },
  cardContainer: {
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    height: "70%",
    aspectRatio: 1,
    width: undefined,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})

const Container = styled.View`
  height: 100%;
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

const ProgContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;