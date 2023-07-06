import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// import IndividualLessonHandler from "./IndividualLessonHandler";
import LessonsComponent from "../Components/LessonsComponent";
import { getLessonData } from "./Database.js";

const Stack = createNativeStackNavigator();

function LessonsHandler({ gradeNum, selectedChapter }) {
  console.log("Lesson Handler:\nSelected Ch: ", selectedChapter, "\nSelected Grade: ", gradeNum);
  const [lessonData, setLessonData] = useState("");
  const navigation = useNavigation();
  

  useEffect(() => {
    switch (gradeNum) {
      case 2:
        {
          // console.log("In g2");
          getLessonData(2, selectedChapter).then(
            (result) => {
              // console.log("Results: ", result);
              setLessonData(result);
            }
          ).catch((err) => {
            console.log("Error in LessonHandler.js: ", err);
          });

          break;
        }
      case 3: {
        getLessonData(3, selectedChapter).then(
          (result) => {
            console.log(result);
          }
        ).catch((err) => {
          console.log("Error: ", err);
        });
        break;
      }
      case 4: {
        getLessonData(4, selectedChapter).then(
          (result) => {
            console.log(result);
          }
        ).catch((err) => {
          console.log("Error: ", err);
        });
        break;
      }
      case 5: {
        getLessonData(5, selectedChapter).then(
          (result) => {
            console.log(result);
          }
        ).catch((err) => {
          console.log("Error: ", err);
        });
        break;
      }
      default: {
        console.log("No Chapter Was Selected");
        break;
      }
    }
  }, []);
  // console.log("Lesson Data: ", lessonData);

  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name={"Chapter".concat(gradeNum.toString())}
          options={{
            headerShown: false,
          }}
        >
          {() => (
            <LessonsComponent
              navigation={navigation}
              lessonData={lessonData}
              selectedChapter={selectedChapter}
            />
          )}
        </Stack.Screen>

        {/* <Stack.Screen name="Lesson1" options={{ headerShown: false }}>
          {() => (
            <IndividualLessonHandler
              lessonData={lessonData}
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
              lessonData={lessonData}
              selectedChapter={selectedChapter}
              selectedLesson={2}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
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
              lessonData={lessonData}
              selectedChapter={selectedChapter}
              selectedLesson={21}
            />
          )}
        </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Boiler Plate code to include redux and firebase functions and data
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});


// Last function to connect the component to props of redux/firebase
export default connect(mapStateToProps, null)(LessonsHandler);