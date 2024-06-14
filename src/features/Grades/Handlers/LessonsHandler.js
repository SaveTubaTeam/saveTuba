import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";


import IndividualLessonHandler from "./IndividualLessonHandler";
import LessonsComponent from "../Components/LessonsComponent";
import { getLessonsData } from "./Database.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});


const Stack = createNativeStackNavigator();

//This handler renders the current chapter's lesson cards, as well as the necessary navigation stack

//LessonsHandler is initialized as a component within ChaptersHandler and takes props there.
//@param gradeNumber a string representing the selected grade, e.g. 'Grade2'
//@param selectedChapter a string representing the selected chapter, e.g. 'Chapter1'
//@param {int} numLessons the number of lessons in the selected chapter
function LessonsHandler({ gradeNumber, selectedChapter, numLessons }) {
  //const language = "en"; //hardcoded
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language; //setting the languageCode to the current language
  const [lessonsData, setLessonsData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(`inside LessonsHandler.js: ${gradeNumber} | ${selectedChapter}`);

    const start = performance.now(); // Start performance timer

    getLessonsData(gradeNumber, selectedChapter, numLessons, languageCode).then(
      (result) => { 
        setLessonsData(result);

        const end = performance.now();
        const elapsedTimeSeconds = (end - start) / 1000; // Convert to seconds
        console.log(`getLessonsData done in ${elapsedTimeSeconds.toFixed(2)} seconds`);

      }).catch((err) => {
        console.log("Error in LessonsHandler.js with getLessonsData:", err);
      });

  }, []);

  //NOTE: ActivityIndicator component is a loading icon. https://reactnative.dev/docs/activityindicator
  while (lessonsData === null || lessonsData === undefined) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  //Below is the lesson stack. We can currently hold up to 21 lessons.
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name={"Chapter"}
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsComponent
              lessonsData={lessonsData}
              navigation={navigation}
            />
          )}
        </Stack.Screen>

        {/* We map each lesson to its own IndividualLessonHandler */}
        {/*  We need all the lesson metadata unlike in LessonsHandler because LessonComponent needs the original lesson metadata */}
        {lessonsData && lessonsData.map((lesson, index) => (
          <Stack.Screen
            key={index}
            name={lesson.navigation}
            options={{ headerShown: false }}
          >
            {() => (
              <IndividualLessonHandler 
                gradeNumber={gradeNumber}
                selectedChapter={selectedChapter}
                lessonData={lesson}
              />
            )}
          </Stack.Screen>
        ))}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LessonsHandler;