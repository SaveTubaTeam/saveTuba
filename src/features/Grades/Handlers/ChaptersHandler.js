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

function ChaptersHandler({ route, addAchievement }) { //add achievements
  
  const [gradeData, setgradeData] = useState(null);
  const [gradeNumber, setgradeNumber] = useState(null);
  
  
  const { level } = route.params; // Level selected from Lesson navigation screen
  const navigation = useNavigation();
  
  const imageMap = useSelector(state => state.imageMap.imageData);

  useEffect(() => {
    switch (level) {
      case 1:
        {
          getGradeData("Grade2").then(
            (gradeData) => {
              // console.log("Grade 2: ", gradeData);
              setgradeData(gradeData);
              setgradeNumber(2);
            }
          ).catch((err) => {
            console.log("Error: ", err);
          });

          
          break;
        }
      case 2: {
        getGradeData("Grade3").then(
          (result) => {
            console.log("result", result);
            // setgradeData(result);
          }
        ).catch((err) => {
          console.log("Error: ", err);
        });
        break;
      }
      case 3: {
        getGradeData("Grade4").then(
          (result) => {
            console.log("result", result);
            // setgradeData(result.get("children"));
          }
        ).catch((err) => {
          console.log("Error: ", err);
        });
        break;
      }
      case 4: {
        getGradeData("Grade5").then(
          (result) => {
            console.log("result", result);
            // setgradeData(result);
          }
        ).catch((err) => {
          console.log("Error: ", err);
        });
        break;
      }
      default: {
        setgradeData(null);
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