import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import IndividualLessonHandler from "./IndividualLessonHandler";
import LessonsComponent from "../Components/LessonsComponent";

const Stack = createNativeStackNavigator();

function ChaptersHandler({ selectedGrade, selectedChapter }) {
  const navigation = useNavigation();
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name={selectedGrade.chapters[selectedChapter].navigation}
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsComponent
              navigation={navigation}
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Lesson1" options={{ headerShown: false }}>
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={0}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson2"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={1}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson3"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={2}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Lesson4"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={3}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Lesson5"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={4}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Lesson6"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={5}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Lesson7"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={6}
            />
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
