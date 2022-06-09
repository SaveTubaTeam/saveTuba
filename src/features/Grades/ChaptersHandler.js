import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";

import ChaptersComponent from "./ChaptersComponent";
import LessonsHandler from "./LessonsHandler";

import { Grade1 } from "./GradeOne";
import { Grade2 } from "./GradeTwo";
import { Grade3 } from "./GradeThree";
import { Grade4 } from "./GradeFour";

const Stack = createNativeStackNavigator();

function ChaptersHandler({ route }) {
  const { level } = route.params; // Level selected from Lesson navigation screen
  const [selectedGrade, setSelectedGrade] = useState(null);

  useEffect(() => {
    switch (level) {
      case 1:
        setSelectedGrade(Grade1);
        break;
      case 2:
        setSelectedGrade(Grade2);
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

  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Grade">
        <Stack.Screen name="Grade" options={{ headerShown: false }}>
          {() => <ChaptersComponent selectedGrade={selectedGrade} />}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter1"
          options={{
            title: "Раздел 1",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={0} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter2"
          options={{
            title: "Раздел 2",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={1} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter3"
          options={{
            title: "Раздел 3",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={2} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter4"
          options={{
            title: "Раздел 4",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={3} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter5"
          options={{
            title: "Раздел 5",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={4} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter6"
          options={{
            title: "Раздел 6",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={5} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Chapter7"
          options={{
            title: "Раздел 7",
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#C6DC3B",
            },
          }}
        >
          {() => (
            <LessonsHandler selectedGrade={selectedGrade} selectedChapter={6} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Boiler Plate code to include redux and firebase functions and data
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

// Last function to connect the component to props of redux/firebase
export default connect(mapStateToProps, null)(ChaptersHandler);
