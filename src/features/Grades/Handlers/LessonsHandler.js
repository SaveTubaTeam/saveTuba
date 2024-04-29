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

//LessonsHandler is initialized as a component within ChaptersHandler and takes four params
function LessonsHandler({ numLessons, gradeNumber, gradeData, selectedChapter }) {
  //const language = useSelector(state => state.languageSelector.language); //should just be using i18n.language
  /* const { i18n } = useTranslation();
  const selectedLanguageCode = i18n.language; */

  const language = "en";
  //after we get, lessonsData is either undefined or the array of lessons to be accessed by its respective IndividualLessonHandler
  const [lessonsData, setLessonsData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    switch (gradeNumber) {
      case 2:
        {
          getLessonsData(2, selectedChapter, numLessons, language).then(
            (result) => {
              console.log("Result: ", result);
              try {
                setLessonsData(result);
              } catch (error) {
                console.log("Error pulling data: ", error);
              }
            }
          ).catch((err) => {
            console.log("Error in LessonsHandler.js: ", err);
          });
          break;
        }
      case 3: {
        getLessonsData(3, selectedChapter, numLessons, language).then(
          (result) => {
            console.log("Result: ", result);
            try {
              setLessonsData(result);
            } catch (error) {
              console.log("Error pulling data: ", error);
            }
          }
        ).catch((err) => {
          console.log("Error in LessonsHandler.js: ", err);
        });
        break;
      }
      case 4: {
        console.log("Need to fill in when data is available");
        break;
      }
      case 5: {
        console.log("Need to fill in when data is available");
        break;
      }
      default: {
        console.log("No Chapter Was Selected");
        break;
      }
    }
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
              selectedChapter={selectedChapter}
              navigation={navigation}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Lesson1" options={{ headerShown: false }}>
          {() => (
            <IndividualLessonHandler //selectedLesson and selectedChapter props are passed to src/components/mastery-flex.component.js where they are not used lol
              lessonData={lessonsData[0]}
              selectedChapter={selectedChapter}
              selectedLesson={0}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson2"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[1]}
              selectedChapter={selectedChapter}
              selectedLesson={1}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson3"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[2]}
              selectedChapter={selectedChapter}
              selectedLesson={2}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson4"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[3]}
              selectedChapter={selectedChapter}
              selectedLesson={3}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson5"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[4]}
              selectedChapter={selectedChapter}
              selectedLesson={4}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson6"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[5]}
              selectedChapter={selectedChapter}
              selectedLesson={5}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson7"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[6]}
              selectedChapter={selectedChapter}
              selectedLesson={6}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson8"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[7]}
              selectedChapter={selectedChapter}
              selectedLesson={7}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson9"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[8]}
              selectedChapter={selectedChapter}
              selectedLesson={8}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson10"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[9]}
              selectedChapter={selectedChapter}
              selectedLesson={9}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson11"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[10]}
              selectedChapter={selectedChapter}
              selectedLesson={10}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson12"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[11]}
              selectedChapter={selectedChapter}
              selectedLesson={11}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson13"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[12]}
              selectedChapter={selectedChapter}
              selectedLesson={12}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson14"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[13]}
              selectedChapter={selectedChapter}
              selectedLesson={13}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson15"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[14]}
              selectedChapter={selectedChapter}
              selectedLesson={14}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson16"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[15]}
              selectedChapter={selectedChapter}
              selectedLesson={15}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson17"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[16]}
              selectedChapter={selectedChapter}
              selectedLesson={16}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson18"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonata={lessonsData[17]}
              selectedChapter={selectedChapter}
              selectedLesson={17}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson19"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[18]}
              selectedChapter={selectedChapter}
              selectedLesson={18}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson20"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[19]}
              selectedChapter={selectedChapter}
              selectedLesson={19}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson21"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[20]}
              selectedChapter={selectedChapter}
              selectedLesson={20}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson22"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              lessonData={lessonsData[21]}
              selectedChapter={selectedChapter}
              selectedLesson={21}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/* 
// Boiler Plate code to include redux and firebase functions and data
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
}); */

// Last function to connect the component to props of redux/firebase
export default LessonsHandler;