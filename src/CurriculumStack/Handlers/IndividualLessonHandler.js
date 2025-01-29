import React, { useEffect, useState, useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { useGetActivitiesDataQuery } from "../../../redux/slices/curriculumApiSlice";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { CurriculumHeader } from "../Components/CurriculumHeader";
import { SafeArea } from "../../styled-components/safe-area.component";
import { useDispatch, useSelector } from "react-redux";
import { addLesson } from "../../../redux/slices/curriculumLocationSlice.js";
import { updateAssignmentDrill } from "../../../redux/slices/curriculumLocationSlice.js";
import LessonComponent from "../Components/LessonComponent";
import OpenResponseHandler from "../Minigames/OpenResponseHandler"; //works
import QuizHandler from "../Minigames/QuizHandler"; //works
import MemoryHandler from "../Minigames/MemoryHandler"; //works
import SortingHandler from "../Minigames/SortingHandler"; //works
import MasteryHandler from "../Minigames/MasteryHandler"; //works
import SnapshotHandler from "../Minigames/SnapshotHandler"; //works
import ReorderHandler from "../Minigames/ReorderHandler";

const Stack = createNativeStackNavigator();

const SCREENS_CONFIG = [
  { name: "Memory", title: "common:memory", Component: MemoryHandler },
  { name: "Sorting", title: "common:sorting", Component: SortingHandler },
  { name: "Sorting 2", title: "common:sorting2", Component: SortingHandler },
  { name: "Quiz", title: "common:quiz", Component: QuizHandler },
  { name: "Image Boom", title: "common:imageboom", Component: OpenResponseHandler },
  { name: "Image Boom 2", title: "common:imageboom2", Component: OpenResponseHandler },
  { name: "Snapshot", title: "common:snapshot", Component: SnapshotHandler },
  { name: "Snapshot 2", title: "common:snapshot2", Component: SnapshotHandler },
  { name: "Reorder", title: "common:reorder", Component: ReorderHandler },
  { name: "Mastery", title: "common:mastery", Component: MasteryHandler },
  { name: "Mastery 2", title: "common:mastery2", Component: MasteryHandler },
];

//The below handler is responsible for rendering the selected lesson and all of its contents via the LessonComponent.
//@param lessonData is a lesson object taken from the lessonsData array and passed in as a prop
function IndividualLessonHandler({ lessonData }) {
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;
  const [activitiesMap, setActivitiesMap] = useState(null);
  const dispatch = useDispatch();
  const grade = useSelector(state => state.curriculum.grade);
  const chapter = useSelector(state => state.curriculum.chapter);

  const { data: activitiesData, isLoading: activitiesLoading, isSuccess: activitiesSuccess, isError: activitiesError, error: activitiesErrorMessage } = useGetActivitiesDataQuery(
    { grade: grade, chpt: chapter, lesson: lessonData.navigation, languageCode: languageCode }
  )

  useEffect(() => {
    dispatch(addLesson({ lesson: lessonData.navigation }));
  }, [])

  useEffect(() => { 
    if(activitiesSuccess) {

      let map = new Map(); //iterating through activities array to set a map of every minigame and mastery object for easy access
      console.log(`\n\t${lessonData.navigation} activities:`);
      activitiesData.forEach((currentObject) => {
        map.set(currentObject.navigation, currentObject);
        console.log(currentObject.navigation);
      })

      setActivitiesMap(map);
    }
  }, [activitiesSuccess]);

  let content;
  if(activitiesLoading) {
    content = (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  } else if(activitiesError) {
    console.error(activitiesErrorMessage);
    content = null;
  } else if(activitiesSuccess) {
    content = (
      <Stack.Navigator initialRouteName="Lesson">
        <Stack.Screen name="Lesson" options={{ headerShown: false }}>
          {() => (
            <LessonComponent
              individualLessonData={lessonData}
              activitiesData={activitiesData}
            />
          )}
        </Stack.Screen>

        {/* please refer to the SCREENS_CONFIG constant at the top of this file */}
        {SCREENS_CONFIG.map(({ name, title, Component }) => (
          <Stack.Screen
            key={name}
            name={name}
            options={{ headerShown: false }}
          >
            {() => (
              <SafeArea>
                <CurriculumHeader title={t(title)} back={"Lesson"} reduxParam={"activity"}/>
                <Component objectData={activitiesMap.get(name)} activityType={name} />
              </SafeArea>
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

export default IndividualLessonHandler;

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