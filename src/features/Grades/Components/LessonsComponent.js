import { FlatList, View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Header } from "../../../components/Grades/grades.styles";
import { Spacer } from "../../../components/spacer.component";
import { useTranslation } from "react-i18next";
import { Audio } from "expo-av";

//This component renders every lesson card in the current chapter.
//@param lessonsData an array of objects returned by getLessonsData() in LessonsHandler
//       Each object within lessonsData is a lesson and all of that lesson's data (including mastery and minigame objects)
function LessonsComponent({ lessonsData }) {
  const nav = useNavigation();
  const { t } = useTranslation();
  const chapterNumber = useSelector(state => state.curriculum.chapter)
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../../../assets/saveTubaSoundEffects/pageForward.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const renderItem = ({ item }) => {
    return (
      <CurrentLesson onPress={() => { playSound(); nav.navigate(item.navigation); }}>
        <View style={styles.rowContainer}>

          <View style={styles.textContainerLeft}>
            <TitleText align="left" size="subtitle" color="primary">
              {item.title}
            </TitleText>
            <Spacer size="small" />
            <BodyText align="left" color="primary">
              {`${item.completionTally}/${item.numActivities}`}
            </BodyText>

            <TouchableOpacity style={styles.startButton} 
              onPress={() => { 
                playSound();
                nav.navigate(item.navigation);
              }}
            >
              <Ionicons
                name="caret-forward"
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
            style={styles.imageStyle}
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
          title={`${t("common:chapter")} ${chapterNumber.match(/\d+/g)}`}
          back="Grade"
          reduxParam="chapter"
        />
        <FlatList
          style={{ width: "100%" }}
          data={lessonsData}
          renderItem={renderItem}
          persistentScrollbar={true}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
        />
      </Container>
    </SafeArea>
  );
}
export default LessonsComponent;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF", 
    borderRadius: 20,
  },
  textContainerLeft: {
    width: "58%",
    padding: 20,
    height: 200,
    zIndex: 1000,
  },
  imageStyle: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 200,
    width: "44%",
    aspectRatio: 1,
  },
  startButton: {
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
  }
})

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
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