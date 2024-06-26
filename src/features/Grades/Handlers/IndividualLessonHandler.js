import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useGetActivitiesDataQuery } from "../../../../redux/curriculumApiSlice.js";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { CurriculumLocationContext } from "./HandlerContexts.js";

import LessonComponent from "../Components/LessonComponent";
import OpenResponseHandler from "../../../components/Grades/minigames/Handlers/OpenResponseHandler"; //works
import QuizHandler from "../../../components/Grades/minigames/Handlers/QuizHandler"; //works
import MemoryHandler from "../../../components/Grades/minigames/Handlers/MemoryHandler"; //works
import SortingHandler from "../../../components/Grades/minigames/Handlers/SortingHandler"; //works
import MasteryHandler from "../../../components/Grades/mastery/MasteryHandler"; //works
import SnapshotHandler from "../../../components/Grades/minigames/Handlers/SnapshotHandler"; //works
import ReorderHandler from "../../../components/Grades/minigames/Handlers/ReorderHandler";

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
function IndividualLessonHandler({ gradeNumber, selectedChapter, lessonData }) {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language;
  const imageMap = useSelector(state => state.imageMap.imageData);

  //const [activitiesData, setActivitiesData] = useState(null);
  const [activitiesMap, setActivitiesMap] = useState(null);

  const { data: activitiesData, isLoading: activitiesLoading, isSuccess: activitiesSuccess, isError: activitiesError, error: activitiesErrorMessage } = useGetActivitiesDataQuery(
    { grade: gradeNumber, chpt: selectedChapter, lesson: lessonData.navigation, languageCode: languageCode }
  )

  useEffect(() => { 
    if(activitiesSuccess) {
      let map = new Map(); //iterating through activities array to set a map of every minigame and mastery object for easy access
      console.log(`\n\t${lessonData.navigation} activities:`);
      activitiesData.forEach((currentObject) => {
        map.set(currentObject.navigation, currentObject);
        console.log(currentObject.navigation);
      })

      setActivitiesMap(map);
      console.log("Current Location:", gradeNumber, selectedChapter, lessonData.navigation)
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
    <CurriculumLocationContext.Provider 
      value={{gradeNumber: gradeNumber, 
              chapterNumber: selectedChapter, 
              lessonNumber: lessonData.navigation}}>
      <Stack.Navigator initialRouteName="Lesson">
        <Stack.Screen
          name="Lesson"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonComponent
              imageMap={imageMap}
              lessonData={lessonData}
              activitiesData={activitiesData}
              navigation={navigation}
            />
          )}
        </Stack.Screen>

        {/* please refer to the SCREENS_CONFIG constant at the top of this file */}
        {SCREENS_CONFIG.map(({ name, title, Component }) => (
          <Stack.Screen
            key={name}
            name={name}
            options={{
              title: t(title),
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerStyle: { backgroundColor: "#C6DC3B" },
              headerTitleStyle: { fontFamily: "BalsamiqSans_400Regular" },
            }}
          >
            {() => (
              <Component
                objectData={activitiesMap.get(name)}
                navigation={navigation}
                imageMap={imageMap}
              />
            )}
          </Stack.Screen>
        ))}

      </Stack.Navigator>
    </CurriculumLocationContext.Provider>
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