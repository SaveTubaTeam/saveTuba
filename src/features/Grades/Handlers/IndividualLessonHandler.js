import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import LessonComponent from "../Components/LessonComponent";
import OpenResponseHandler from "../../../components/Grades/minigames/Handlers/OpenResponseHandler"; //works
import QuizHandler from "../../../components/Grades/minigames/Handlers/QuizHandler"; //works
import { MemoryHandler } from "../../../components/Grades/minigames/Handlers/MemoryHandler"; //works
import SortingHandler from "../../../components/Grades/minigames/Handlers/SortingHandler"; //works
import MasteryHandler from "../../../components/Grades/mastery/MasteryHandler"; //works
import MasteryHandler_2 from "../../../components/Grades/mastery/MasteryHandler_2"; //works
import SnapshotHandler from "../../../components/Grades/minigames/Handlers/SnapshotHandler"; //works
import ReorderHandler from "../../../components/Grades/minigames/Handlers/ReorderHandler";


const Stack = createNativeStackNavigator();

function IndividualLessonHandler({
  lessonData,
  selectedChapter,
  selectedLesson,
}) {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const imageMap = useSelector(state => state.imageMap.imageData);
  //iterating through lessonData array to set a map of the lesson minigames
  let lessonCompMap = new Map();
  console.log(`\nChapter${selectedChapter} ${lessonData.get("navigation")} Minigames:`);
  for (let minigame in lessonData.get("minigames")) {
    lessonCompMap.set(lessonData.get("minigames")[minigame]["navigation"], lessonData.get("minigames")[minigame]);
    console.log(lessonData.get("minigames")[minigame]["navigation"]);
  }

  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Lesson">
        {/*  Need to improve this part here with a map for the minigames screen */}
        <Stack.Screen
          name="Lesson"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonComponent
              imageMap={imageMap}
              lessonData={lessonData}
              selectedChapter={selectedChapter}
              selectedLesson={selectedLesson}
              navigation={navigation}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Memory"
          options={{
            title: t("common:memory"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (
            <MemoryHandler
              data={lessonCompMap.get("Memory")}
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Sorting"
          options={{
            title: t("common:sorting"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (
            <SortingHandler
              data={
                lessonCompMap.get("Sorting").content
              }
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="QuizScreen"
          options={{
            title: t("common:quiz"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (
            <QuizHandler
              data={
                lessonCompMap.get("QuizScreen")
              }
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Image Boom"
          options={{
            title: t("common:openresponse"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (
            <OpenResponseHandler
              questionSet={
                lessonCompMap.get("Image Boom").data
              }
              navigation={navigation}
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Image Boom 2"
          options={{
            title: t("common:openresponse"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (


            <OpenResponseHandler
              questionSet={
                lessonCompMap.get("Image Boom 2").data
              }
              navigation={navigation}
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>


        <Stack.Screen
          name="Snapshot"
          options={{
            title: t("common:snapshot"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (
            <SnapshotHandler
              data={
                lessonCompMap.get("Snapshot")
              }
              lessonData={lessonData}
              navigation={navigation}
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Reorder"
          options={{
            title: t("common:reorder"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (
            <ReorderHandler
              info={
                lessonCompMap.get("Reorder")
              }
              navigation={navigation}
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Mastery"
          options={{
            title: t("common:mastery"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {() => (
            <MasteryHandler
              data={
                lessonData.get("mastery")
              }
              navigation={navigation}
              imageMap={imageMap}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Mastery 2"
          options={{
            title: t("common:mastery"),
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerTitleStyle: {
              fontFamily: "BalsamiqSans_400Regular",
            },
          }}
        >
          {

            () => (

              <MasteryHandler_2
                data={
                  lessonData.get("mastery_2")
                }
                navigation={navigation}
                imageMap={imageMap}
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
export default IndividualLessonHandler;
