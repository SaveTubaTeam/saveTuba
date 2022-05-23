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

const TempScreen = ({navigation})  => {

  return (
    <View style={{
      alignContent: "center",
      alignItems: "center",
      flex: 1,
    }}>
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
  const [score, setScore] = useState(0);
  function changeScore(value) {
    setScore(value);
  }

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
        {/* Insert Screens below based off minigame. Need to be able to send data to the component in the same way that the quiz screen works */}
        <Stack.Screen name="Quiz" options={{ headerShown: false }}>
          {() => (
            <QuizScreen
              score={score}
              onStateChange={changeScore}
              questionSet={selectedLevel.minigames[2].data}
            />
          )}
          {/* ^^^^^^^^^^^^^^^^ Eventuallly needs to not be hardcoded i.e. [2]*/}
        </Stack.Screen>
        <Stack.Screen
          component={selectedLevel.memory.component}
          name="Memory"
          options={{
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {/* ^^^^^^^^^^^^^^^^ Eventuallly needs to not be hardcoded i.e. [2]*/}
        </Stack.Screen>
        <Stack.Screen
          name="Sorting"
          component={selectedLevel.sorting.component}
          options={{
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        />
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
          options={{ headerShown: false }}
        >
        {() => (
        <OpenResponseHandler
            questionSet={selectedLevel.minigames[0].data} navigation={navigation}
        />  
        )}
        </Stack.Screen>
        {/* ^^^^^^^^^^^^^^^^ Eventuallly needs to not be hardcoded i.e. [2]*/}
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
