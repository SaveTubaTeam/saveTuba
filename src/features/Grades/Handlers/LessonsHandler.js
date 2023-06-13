import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import IndividualLessonHandler from "./IndividualLessonHandler";
import LessonsComponent from "../Components/LessonsComponent";

const Stack = createNativeStackNavigator();

function ChaptersHandler({ selectedGrade, selectedChapter }) {
  console.log("Grade: ", selectedGrade, " Selected Ch: ", selectedChapter);
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
              selectedLesson={1}
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
              selectedLesson={2}
            />
          )}
        </Stack.Screen>

        {/* <Stack.Screen
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
        </Stack.Screen> */}

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

        <Stack.Screen
          name="Lesson8"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={7}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson9"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={8}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson10"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={9}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson11"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={10}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson12"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={11}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson13"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={12}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson14"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={13}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson15"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={14}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson16"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={15}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson17"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={16}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson18"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={17}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson19"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={18}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson20"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={19}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson21"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={20}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Lesson22"
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <IndividualLessonHandler
              selectedGrade={selectedGrade}
              selectedChapter={selectedChapter}
              selectedLesson={21}
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
