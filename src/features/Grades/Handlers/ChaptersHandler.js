import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { addAchievement } from "../../../../redux/actions";
import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View } from "react-native";

import ChaptersComponent from "../Components/ChaptersComponent";
import LessonsHandler from "./LessonsHandler";
import { getGradeData } from "./Database";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();


// @param route **This is the route that will be used to determine the lesson
// @param addAchievement **Relic from the past team, I did nothing with this and have no idea what it does
function ChaptersHandler({ route, addAchievement }) { //add achievements

  const [gradeData, setGradeData] = useState(null);
  const [gradeNumber, setGradeNumber] = useState(null);


  const { level } = route.params; // Level selected from Lesson navigation screen. Level prop is defined in HomeScreen.js
  const navigation = useNavigation();

  const imageMap = useSelector(state => state.imageMap.imageData);
  useEffect(() => {
    switch (level) {
      case 1:
        {
          console.log("Grade2 route selected");
          getGradeData("Grade2").then(
            (gradeData) => {
              setGradeData(gradeData);
              setGradeNumber(2);
            }
          ).catch((err) => {
            console.log("Error: ", err);
          });
          break;
        }
      case 2: {
        console.log("Grade3 route selected");
        getGradeData("Grade3").then(
          (gradeData) => {
            setGradeData(gradeData);
            setGradeNumber(3);
          }
        ).catch((err) => {
          console.log("Error: ", err);
        });
        break;
      }
      case 3: {
        console.log("Need to fill in when data is available");
        break;
      }
      case 4: {
        console.log("Need to fill in when data is available");
        break;
      }
      default: {
        setGradeData(null);
        setGradeNumber(null);
        break;
      }
    }
  }, []);

  if (gradeData == null) {
    console.log("No Selected Grade\n");
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
              gradeData={gradeData}
              imageMap={imageMap}
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
            <LessonsHandler numLessons={gradeData[0].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={1} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter2"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler numLessons={gradeData[1].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={2} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter3"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler numLessons={gradeData[2].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={3} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter4"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler numLessons={gradeData[3].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={4} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter5"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler numLessons={gradeData[4].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={5} />
          )}
        </Stack.Screen>


        <Stack.Screen
          name="Chapter6"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler numLessons={gradeData[5].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={6} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter7"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler numLessons={gradeData[6].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={7} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Chapter8"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsHandler numLessons={gradeData[7].numLessons} gradeNumber={gradeNumber} gradeData={gradeData} selectedChapter={8} />
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