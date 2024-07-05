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
import LottieView from "lottie-react-native";

//This component formats and renders all of the lesson's contents
//@param data the lesson object which contains all of that lesson's metadata and mastery and minigame objects.
function LessonComponent({ individualLessonData, activitiesData }) {
  const nav = useNavigation();
  const { t } = useTranslation();
  const [activities, setActivities] = useState(null);
  const [lessonData, setLessonData] = useState(individualLessonData);
  const gradeNumber = useSelector(state => state.curriculum.grade);
  const chapterNumber = useSelector(state => state.curriculum.chapter);
  const completions = useSelector(state => state.user.completions);

  useEffect(() => {
    console.log("inside LessonComponent.js.");
    prefetchActivityIcons(activitiesData);

    const activitiesCopy = [...activitiesData];
    //pushing mastery to the end of the array
    for(let i=0; i<activitiesCopy.length; i++) {
      if(activitiesCopy[i].navigation.includes("Mastery")) {
        const [ masteryActivity ] = activitiesCopy.splice(i, 1);
        activitiesCopy.push(masteryActivity);
      }
    }
    setActivities(activitiesCopy);
  }, []);

  useEffect(() => {
      //updating the completion tally by listening to changes in completions
      const tally = determineTally(gradeNumber, chapterNumber, individualLessonData.navigation, completions);
      const updatedLesson = {
        ...individualLessonData,
        completionTally: tally,
      }
      setLessonData(updatedLesson);
  }, [individualLessonData, completions])

  const renderItem = ({ item }) => {
    let downloadURL;
    let backgroundColor;
    let content = null;

    //mastery icons aren't in firebase (but they could be with a bit of modification to curriculumToFirebase)
    if(item.navigation.includes("Mastery")) {
      downloadURL = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery-icon.png?alt=media&token=5abf0c85-29fb-4c5f-820b-90bd8494c2d2",
      backgroundColor = "#60BBDD";
      content = (
        <LottieView 
          source={require("../../../../assets/lottie-animations/mastery-flowers-animation.json")}
          autoPlay={true}
          loop={false}
          style={{ position: "absolute", aspectRatio: 1, width: "100%", height: "100%" }}
          resizeMode='cover'
        />
      )
    } else {
      downloadURL = item.iconDownloadURL
      backgroundColor = item.backgroundColor
    }

    return (
      <Adventure onPress={() => { nav.navigate(item.navigation); }}>
        <View style={[{ backgroundColor: backgroundColor }, styles.cardContainer]}>
          {content}
          <Image
            style={styles.cardImage}
            source={{ uri: downloadURL }}
          />
          <TitleText size="subtitle" color="secondary">
            {t(item.title)} 
          </TitleText>
        </View>
      </Adventure>
    );
  };

  const Progress = () => {
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

  while (activities === null) {
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
          
          data={ activities }
          numColumns={2}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
          renderItem={renderItem}
          persistentScrollbar={true}
          contentContainerStyle={{ width: "90%", alignSelf: "center" }}
          style={{ width: "100%" }}
          // style={{ marginBottom: 20, width: "100%" }}
          // ListFooterComponentStyle={{ alignItems: "stretch", width: "85%" }}
          // ListFooterComponent={
          //   <MasteryFlex masteryArray={mastery} />
          // }
        />

      </Container>
    </SafeArea>
  );
}

function determineTally(grade, chapter, lesson, completions) {
  const gradeID = concatenateFirstAndLast(grade);
  const chapterID = concatenateFirstAndLast(chapter);
  const lessonID = concatenateFirstAndLast(lesson);
  const fullLessonID = `${gradeID}${chapterID}${lessonID}`

  //From the answer provided by @Jamiec here: https://stackoverflow.com/questions/9996727/count-instances-of-string-in-an-array
  //note the implicit return!
  let tallyCount = completions.filter((completion) => completion.completionID.split("_")[0] === fullLessonID).length

  return tallyCount
}

function concatenateFirstAndLast(str) {
  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];
  return firstLetter + lastLetter;
}

async function prefetchActivityIcons(content) {
  for(const item of content) {
    if(item.icon) {
      await Image.prefetch(item.iconDownloadURL);
    }
  }
  //mastery image
  await Image.prefetch("https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery-icon.png?alt=media&token=5abf0c85-29fb-4c5f-820b-90bd8494c2d2");
  console.log("\tprefetchActivityIcons complete!");
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