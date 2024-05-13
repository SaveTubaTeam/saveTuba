import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import LessonComponent from "../Components/LessonComponent";
import OpenResponseHandler from "../../../components/Grades/minigames/Handlers/OpenResponseHandler"; //works
import QuizHandler from "../../../components/Grades/minigames/Handlers/QuizHandler"; //works
import MemoryHandler from "../../../components/Grades/minigames/Handlers/MemoryHandler"; //works
import SortingHandler from "../../../components/Grades/minigames/Handlers/SortingHandler"; //works
import MasteryHandler from "../../../components/Grades/mastery/MasteryHandler"; //works
import MasteryHandler_2 from "../../../components/Grades/mastery/MasteryHandler_2"; //works
import SnapshotHandler from "../../../components/Grades/minigames/Handlers/SnapshotHandler"; //works
import ReorderHandler from "../../../components/Grades/minigames/Handlers/ReorderHandler";

const Stack = createNativeStackNavigator();

const SCREENS_CONFIG = [
  { name: "Memory", title: "memory", Component: MemoryHandler },
  { name: "Sorting", title: "sorting", Component: SortingHandler },
  { name: "Quiz", title: "quiz", Component: QuizHandler },
  { name: "Image Boom", title: "imageboom", Component: OpenResponseHandler },
  { name: "Image Boom 2", title: "imageboom", Component: OpenResponseHandler },
  { name: "Snapshot", title: "snapshot", Component: SnapshotHandler },
  { name: "Snapshot 2", title: "snapshot", Component: SnapshotHandler },
  { name: "Reorder", title: "reorder", Component: ReorderHandler },
  { name: "Mastery", title: "mastery", Component: MasteryHandler },
  { name: "Mastery 2", title: "mastery", Component: MasteryHandler },
];

//The below handler is responsible for rendering the selected lesson and all of its contents
//via the LessonComponent.

//@param lessonData is a lesson object taken from the lessonsData array and passed in as a prop
function IndividualLessonHandler({ lessonData }) {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const imageMap = useSelector(state => state.imageMap.imageData);
  console.log("Within IndividualLessonHandler Lesson Data:", lessonData);

  //iterating through lessonData array to set a map of every minigame and mastery object for easy access
  let lessonDataMap = new Map();
  console.log(`\n\t${lessonData.navigation} masteryAndMinigames:`);
  lessonData.masteryAndMinigames.forEach((currentObject) => {
    lessonDataMap.set(currentObject.navigation, currentObject);
    console.log(currentObject.navigation);
  })

  return (
    <NavigationContainer independent>
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
              title: t(`common:${title}`),
              headerTintColor: "white",
              headerBackTitleVisible: false,
              headerStyle: { backgroundColor: "#C6DC3B" },
              headerTitleStyle: { fontFamily: "BalsamiqSans_400Regular" },
            }}
          >
            {() => (
              <Component
                objectData={lessonDataMap.get(name)}
                navigation={navigation}
                imageMap={imageMap}
              />
            )}
          </Stack.Screen>
        ))}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default IndividualLessonHandler;
