import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import LessonComponent from "../Components/LessonComponent";
import OpenResponseHandler from "../../../components/Grades/minigames/Handlers/OpenResponseHandler";
import QuizHandler from "../../../components/Grades/minigames/Handlers/QuizHandler";
import SortingHandler from "../../../components/Grades/minigames/Handlers/SortingHandler";
import MasteryHandler from "../../../components/Grades/mastery/MasteryHandler";
import { MemoryHandler } from "../../../components/Grades/minigames/Handlers/MemoryHandler";
import SnapshotHandler from "../../../components/Grades/minigames/Handlers/SnapshotHandler";
import ReorderHandler from "../../../components/Grades/minigames/Handlers/ReorderHandler";

const Stack = createNativeStackNavigator();

function IndividualLessonHandler({
  selectedGrade,
  selectedChapter,
  selectedLesson,
}) {
  const navigation = useNavigation();
  const { t } = useTranslation();
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
              selectedGrade={selectedGrade}
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
              data={
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .minigames.memory
              }
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
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .minigames.sorting.content
              }
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
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .minigames.quiz
              }
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
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .minigames.openresponse.data
              }
              navigation={navigation}
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
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .minigames.openresponse_2.data
              }
              navigation={navigation}
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
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .minigames.snapshot
              }
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={selectedLesson}
              navigation={navigation}
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
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .minigames.reorder
              }
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={selectedLesson}
              navigation={navigation}
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
                selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                  .mastery
              }
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={selectedLesson}
              navigation={navigation}
            />
          )}
        </Stack.Screen>

        {/*
        {selectedLevel.drawing.component != null && (
          <Stack.Screen
            name="DrawingGame"
            component={selectedLevel.drawing.component}
            options={{
              title: "Рисование",
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#C6DC3B",
              },
            }}
          />
        )}
        
        <Stack.Screen
          name="Puzzle"
          component={selectedLevel.puzzle.component}
          options={{
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        ></Stack.Screen>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Boiler Plate code to include redux and firebase functions and data
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

// Last function to connect the component to props of redux/firebase
export default connect(mapStateToProps, null)(IndividualLessonHandler);
