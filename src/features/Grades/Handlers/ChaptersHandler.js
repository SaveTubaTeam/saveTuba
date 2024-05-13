import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { addAchievement } from "../../../../redux/actions";
import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import ChaptersComponent from "../Components/ChaptersComponent";
import LessonsHandler from "./LessonsHandler";
import { getGradeData } from "./Database";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

//This handler is responsible for rendering all of the chapters within the selected grade
//using ChaptersComponent. It also creates the necessary navigation stack.

// @param route a string representing the grade, e.g. 'Grade2'
//Please see: https://reactnavigation.org/docs/params/ - Note how we define the route params in HomeScreen.js
const ChaptersHandler = ({ route })  => { //add achievements

  const [gradeData, setGradeData] = useState(null);

  //grade is a string e.g. 'Grade2'
  const { grade } = route.params; // route param is defined and passed in by HomeScreen.js
  const navigation = useNavigation();

  const imageMap = useSelector(state => state.imageMap.imageData);
  useEffect(() => {
    console.log(`${grade} route selected`);
    getGradeData(grade).then(
      (gradeData) => {
        setGradeData(gradeData);
      }
    ).catch((err) => {
      console.log("Error: ", err);
    });
  }, []);

  //we return a loader while gradeData is fetched from the db
  while (gradeData === null || gradeData === undefined) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

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

          {/* We map each chapter to its own LessonsHandler */}
        {gradeData && gradeData.map((chapter, index) => (
          <Stack.Screen
            key={index}
            name={chapter.navigation}
            options={{ headerShown: false }}
          >
            {() => (
              <LessonsHandler
                gradeNumber={grade}
                selectedChapter={chapter.navigation}
              />
            )}
          </Stack.Screen>
        ))}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChaptersHandler;

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