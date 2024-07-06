import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { SafeArea } from "../../../components/safe-area.component";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { MasteryFlex } from "../../../components/mastery-flex.component";
import { Adventure, Header } from "../../../components/Grades/grades.styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

//This component formats and renders all of the lesson's contents
//@param data the lesson object which contains all of that lesson's metadata and mastery and minigame objects.
function LessonComponent({ individualLessonData, activitiesData }) {
  const nav = useNavigation();
  const { t } = useTranslation();
  const [minigames, setMinigames] = useState(null);
  const [mastery, setMastery] = useState(null);
  const [lessonData, setLessonData] = useState(individualLessonData);
  const grade = useSelector(state => state.curriculum.grade);
  const chapter = useSelector(state => state.curriculum.chapter);
  const completions = useSelector(state => state.user.completions);

  const gradeID = concatenateFirstLetterAndLastNumbers(grade);
  const chapterID = concatenateFirstLetterAndLastNumbers(chapter);
  const lessonID = concatenateFirstLetterAndLastNumbers(individualLessonData.navigation);
  const fullLessonID = `${gradeID}${chapterID}${lessonID}`

  useEffect(() => {
    async function fetchIconsAndSetActivities() {
      console.log("inside LessonComponent.");
      await prefetchActivityIcons(activitiesData);
    };

    fetchIconsAndSetActivities();
  }, []);

  useEffect(() => {
      //updating the completion tally by listening to changes in completions
      const tally = determineTally(fullLessonID, completions);
      const updatedLesson = {
        ...individualLessonData,
        completionTally: tally,
      }
      setLessonData(updatedLesson);
  }, [individualLessonData, completions]);

  useEffect(() => {
    const masteryCopy = [];
    const minigamesCopy = [];
    const activitiesArray = checkActivitiesCompletion(activitiesData, completions, fullLessonID);
    //console.log("MODIFIED ACTIVITIES:", activitiesArray);

    activitiesArray.forEach((activity) => {
      activity.navigation.includes("Mastery") ? masteryCopy.push(activity) : minigamesCopy.push(activity);
    });

    setMastery(masteryCopy);
    setMinigames(minigamesCopy);
  }, [activitiesData, completions]);

  const renderItem = ({ item }) => {
    let opacity = 0;
    if(item.completionStatus === true) { 
      opacity = 1;
    }
    return (
      <Adventure onPress={() => { nav.navigate(item.navigation); }}>

        <CompletionOverlay opacity={opacity} />

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

  function CompletionOverlay({ opacity }) {
    return (
      <View style={[styles.overlay, { opacity: opacity }]}>
        <Ionicons name="checkmark-circle" size={40} color="rgba(126, 211, 57, 0.8)" />
      </View>
   )
  }

  function Progress() {
    const chunks = [];
    for (let i = 0; i < lessonData.numActivities; i++) {

      let chunkStyle = { backgroundColor: "rgba(135, 66, 22, 0.25)" }
      if(i < lessonData.completionTally) {
        chunkStyle = { backgroundColor: "#748816" }
      }

      chunks.push(<Chunk key={i} style={chunkStyle}/>);
    }

    return (
      <ProgContainer>
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          {chunks}
        </View>
        <BodyText>{`${lessonData.completionTally}/${lessonData.numActivities}`}</BodyText>
      </ProgContainer>
    );
  };

  if (mastery === null || minigames === null) {
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
            <MasteryFlex masteryArray={mastery} />
          }
        />

      </Container>
    </SafeArea>
  );
}

export default LessonComponent;

function determineTally(fullLessonID, completions) {
  //From the answer provided by @Jamiec here: https://stackoverflow.com/questions/9996727/count-instances-of-string-in-an-array
  //note the .length!
  let tallyCount = completions.filter((completion) => {
    return completion.completionID.split("_")[0] === fullLessonID
  }).length

  return tallyCount
}

function concatenateFirstLetterAndLastNumbers(str) {
  const firstLetter = str.charAt(0);
  const numbers = str.match(/\d+/g).join(''); // Regex extracting the numbers
  return firstLetter + numbers;
}

async function prefetchActivityIcons(content) {
  for(const item of content) {
    if(item.icon) {
      await Image.prefetch(item.iconDownloadURL);
    }
  }
  //mastery-icon.png in our storage bucket under assets/
  await Image.prefetch("https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery-icon.png?alt=media&token=0ac84171-64cf-4a71-9d6b-8b4d9f67ded1")
  console.log("\tprefetchActivityIcons complete!");
}

function checkActivitiesCompletion(activities, completions, fullLessonID) {
  const completionIDArray = [];
  for(const completion of completions) {
    if(completion.completionID.split("_")[0] === fullLessonID) {
      completionIDArray.push(completion.completionID);
    }
  }

  const activitiesArray = activities.map((activity) => ({
    ...activity,  // spread activity to avoid immutability
    completionStatus: completionIDArray.includes(`${fullLessonID}_${activity.navigation}`) //.includes returns boolean true or false
  }));

  return activitiesArray;
}

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
  overlay: {
    ...StyleSheet.absoluteFillObject, //to fill the parent
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 20,
    backgroundColor: "rgba(131, 219, 59, 0.2)",
    pointerEvents: 'none',
    zIndex: 2
  }
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
  border: 1px #fff8e7;
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