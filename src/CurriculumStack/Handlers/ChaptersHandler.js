import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect, useCallback } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import ChaptersComponent from "../Components/ChaptersComponent";
import LessonsHandler from "./LessonsHandler";
import { useGetGradeDataQuery } from "../../../redux/slices/curriculumApiSlice";
import { useDispatch } from "react-redux";
import { addGrade } from "../../../redux/slices/curriculumLocationSlice";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

//This handler is responsible for rendering all of the chapters within the selected grade
//using ChaptersComponent. It also creates the necessary navigation stack.

// @param route a string representing the grade, e.g. 'Grade2'
//Please see: https://reactnavigation.org/docs/params/ - Note how we define the route params in HomeScreen.js
const ChaptersHandler = ({ route })  => {
  //grade is a string e.g. 'Grade2'
  const { grade } = route.params; // route param is defined and passed in by HomeScreen.js. We pass it as a param to useGetGradeDataQuery
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const assignmentDrill = useSelector(state => state.curriculum.assignmentDrill);

  const { data: gradeData, isLoading: gradeLoading, isSuccess: gradeSuccess, isError: gradeError, error: gradeErrorMessage } = useGetGradeDataQuery(
    { grade: grade }
  )

  useEffect(() => {
    dispatch(addGrade({ grade: grade }))
  }, []);

  useEffect(() => {
    async function drill() {
      if(gradeSuccess && assignmentDrill) {
        await new Promise(resolve => setTimeout(resolve, 200));
        navigation.navigate(assignmentDrill.chapter);
      }
    }

    drill();
  }, [gradeSuccess, assignmentDrill])

  let content;
  if(gradeLoading) {
    content = (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  } else if(gradeError) {
    console.error(gradeErrorMessage);
    content = null;
  } else if(gradeSuccess) {
    content = (
      <Stack.Navigator initialRouteName="Grade">
      <Stack.Screen name="Grade" options={{ headerShown: false }}>
        {() => (
          <ChaptersComponent
            gradeData={gradeData}
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
              chapter={chapter.navigation}
              numLessons={chapter.numLessons}
            />
          )}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
    )
  }

  return (
    <>
      {content}
    </>
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