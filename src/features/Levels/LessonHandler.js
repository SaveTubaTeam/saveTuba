import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LessonComponent from "./LessonComponent";

import OpenResponseHandler from "../../components/minigames/OpenResponse/OpenResponseHandler";

import { connect } from "react-redux";

import Sorting from "./levelOne/lessonOne/Screens/Adventures/adventureTwo/sorting.component";

// want to import data here?
import { Lvl_1_LessonOne } from "./levelOne/lessonOne/LessonOne";
import { Lvl_1_LessonTwo } from "./levelOne/lessonTwo/LessonTwo";
import { Lvl_2_LessonOne } from "./levelTwo/lessonOne/LessonOne";
import { Lvl_2_LessonTwo } from "./levelTwo/lessonTwo/LessonTwo";
import { adventureOne } from "../Levels/levelOne/lessonOne/Screens/Adventures/adventureOne/adventureOne.screen";
import { TitleText } from "../../components/title-text.component";
import { IconButton } from "react-native-paper";
import { QuizScreen } from "../../components/LevelOne/quiz-screen.component";

const TempScreen = ({ navigation }) => {
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <TitleText>В разработке</TitleText>
    </View>
  );
};

/*
To add Lessons: 
  1: First create the Lesson<number>.js within the folder (Imports will work automatically if you copy LessonOne or Two).
  2: Create A summary componenet (imports will work automatically if you copy other summary component)
  3: Import Lesson<N> into this screen and into LessonComponent
  4: Add Lesson<N> into the switch statement for the levelselector
  5: Done?
*/

const Stack = createNativeStackNavigator();

function LessonHandler(props) {
  //
  const { currentUser, navigation, route } = props; // the available props in the lesson
  const { level } = route.params; // Level selected from Lesson navigation screen
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [score, setScore] = useState(0);
  function changeScore(value) {
    setScore(value);
  }

  useEffect(() => {
    // Function called on LessonHandler mount to determine data to select for lesson component
    switch (level) {
      case 1:
        setSelectedLevel(Lvl_1_LessonOne);
        break;
      case 2:
        setSelectedLevel(Lvl_1_LessonTwo);
        break;
      case 3:
        setSelectedLevel(Lvl_2_LessonOne);
        break;
      case 4:
        setSelectedLevel(Lvl_2_LessonTwo);
        break;
      default:
        setSelectedLevel(null);
        break;
    }
  }, []);

  // variables and function to change minigame scores **Needs to be moved

  // Allows useEffect to change selected Level **Needs to be replaced with animation for loading
  if (selectedLevel == null) {
    return <View></View>;
  }

  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Level">
        {/*  Need to improve this part here with a map for the minigames screen */}
        <Stack.Screen
          name="Level"
          component={LessonComponent}
          options={{
            headerTitle: selectedLevel.title,
            headerTintColor: "#748816",
            headerTitleStyle: {
              fontFamily: "Raleway_400Regular",
            },
          }}
          initialParams={{ level: level }}
        />
        <Stack.Screen
          component={selectedLevel.memory.component}
          name="Memory"
          options={{
            title: "Игра на запоминание",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Sorting"
          component={selectedLevel.sorting.component}
          options={{
            title: "Сортировка",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        />
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
        {selectedLevel.quiz.component != null && (
          <Stack.Screen
            name="QuizScreen"
            component={selectedLevel.quiz.component}
            options={{
              title: "Викторина",
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#C6DC3B",
              },
            }}
          />
        )}
        <Stack.Screen
          name="MultipleChoice"
          component={TempScreen}
          options={{
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        />
        <Stack.Screen
          name="Image Bananza"
          options={{
            title: "Изображение Бум",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <OpenResponseHandler
              questionSet={selectedLevel.minigames[2].data}
              navigation={navigation}
            />
          )}
        </Stack.Screen>
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
        ></Stack.Screen>
        {/*  Summary Component based of selectedLevel */}
        <Stack.Screen
          name={selectedLevel.summaryComponent.route}
          component={selectedLevel.summaryComponent.component}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerBackTitleVisible: false,
            headerTintColor: "#748816",
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Gabriela_400Regular",
            },
          }}
        ></Stack.Screen>
        {/* Here will be a stack screen for the adventureComponent*/}
        {/* Mastery Component based of selectedLevel */}
        <Stack.Screen
          name={selectedLevel.masteryComponent.route}
          component={selectedLevel.masteryComponent.component}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
            headerBackTitleVisible: false,
            headerTintColor: "#748816",
            headerTitleStyle: {
              fontSize: 20,
              fontFamily: "Gabriela_400Regular",
            },
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Boiler Plate code to include redux and firebase functions and data
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

// Last function to connect the component to props of redux/firebase
export default connect(mapStateToProps, null)(LessonHandler);

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  width: 50%;
  align-items: center;
`;
