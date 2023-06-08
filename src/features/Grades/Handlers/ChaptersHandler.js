import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import ChaptersComponent from "../Components/ChaptersComponent";
import LessonsHandler from "./LessonsHandler";

import { Grade1 } from "../Data/GradeOne";
import { snapshot_data } from "../Data/GradeTwo_DB";
import { Grade3 } from "../Data/GradeThree";
import { Grade4 } from "../Data/GradeFour";

import { addAchievement } from "../../../../redux/actions";

const Stack = createNativeStackNavigator();

function ChaptersHandler({ route, addAchievement }) { //add achievements
  const navigation = useNavigation();
  const { level } = route.params; // Level selected from Lesson navigation screen
  const [selectedGrade, setSelectedGrade] = useState(null);

  useEffect(() => {
    switch (level) {
      case 1:
        setSelectedGrade(Grade1);
        break;
      case 2:
        console.log("AHHHHH");
        console.log("Grade 1: " + snapshot_data());
        // setSelectedGrade(Grade2);
        break;
      case 3:
        setSelectedGrade(Grade3);
        break;
      case 4:
        setSelectedGrade(Grade4);
        break;
      default:
        setSelectedGrade(null);
        break;
    }
  }, []);

  if (selectedGrade == null) {
    return <View></View>;
  }

  addAchievement("first-time-opening-grade");

  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Grade">
        <Stack.Screen name="Grade" options={{ headerShown: false }}>
          {() => (
            <ChaptersComponent
              navigation={navigation}
              selectedGrade={selectedGrade}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter1"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={0} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter2"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={1} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter3"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={2} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter4"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={3} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter5"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={4} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter6"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={5} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter7"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={6} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter8"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={7} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Boiler Plate code to include redux and firebase functions and data
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  achievements: store.userAchievements.achievements,
  achievementModal: store.modals,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { addAchievement },
    dispatch
  );

// Last function to connect the component to props of redux/firebase
export default connect(mapStateToProps, mapDispatchToProps)(ChaptersHandler);
