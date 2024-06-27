import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import IndividualLessonHandler from "./IndividualLessonHandler";
import LessonsComponent from "../Components/LessonsComponent";
import { useGetLessonsDataQuery } from "../../../../redux/curriculumApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addChapter } from "../../../../redux/slices/curriculumLocationSlice";

const Stack = createNativeStackNavigator();

//This handler renders the current chapter's lesson cards, as well as the necessary navigation stack

//LessonsHandler is initialized as a component within ChaptersHandler and takes props there.
//@param gradeNumber a string representing the selected grade, e.g. 'Grade2'
//@param selectedChapter a string representing the selected chapter, e.g. 'Chapter1'
//@param {int} numLessons the number of lessons in the selected chapter
function LessonsHandler({ selectedChapter, numLessons }) {
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language; //setting the languageCode to the current language
  const dispatch = useDispatch();
  const gradeNumber = useSelector(state => state.curriculum.grade)

  const { data: lessonsData, isLoading: lessonsLoading, isSuccess: lessonsSuccess, isError: lessonsError, error: lessonsErrorMessage } = useGetLessonsDataQuery(
    { grade: gradeNumber, chpt: selectedChapter, numLessons: numLessons, languageCode: languageCode }
  )

  useEffect(() => {
    if(lessonsSuccess) {
      dispatch(addChapter({ chapter: selectedChapter }));
    }
  }, [lessonsSuccess])

  let content;
  if(lessonsLoading) {
    content = (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  } else if(lessonsError) {
    console.error(lessonsErrorMessage);
    content = null;
  } else if(lessonsSuccess) {
    content = (
      <Stack.Navigator>
        <Stack.Screen name={"Chapter"} options={{ headerShown: false }}>
          {() => (
            <LessonsComponent
              lessonsData={lessonsData}
            />
          )}
        </Stack.Screen>

        {/* We map each lesson to its own IndividualLessonHandler */}
        {/*  We need all the lesson metadata unlike in LessonsHandler because LessonComponent needs the original lesson metadata */}
        {lessonsData && lessonsData.map((lesson, index) => (
          <Stack.Screen
            key={index}
            name={lesson.navigation}
            options={{ headerShown: false }}
          >
            {() => (
              <IndividualLessonHandler 
                lessonData={lesson}
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

export default LessonsHandler;

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