import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import IndividualLessonHandler from "./IndividualLessonHandler";
import LessonsComponent from "../Components/LessonsComponent";
import { useGetLessonsDataQuery } from "../../../redux/slices/curriculumApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addChapter } from "../../../redux/slices/curriculumLocationSlice";
import { useNavigation } from "@react-navigation/native";
import { updateAssignmentDrill } from "../../../redux/slices/curriculumLocationSlice";

const Stack = createNativeStackNavigator();

//LessonsHandler is initialized as a component within ChaptersHandler and takes props there.
//@param grade a string representing the selected grade, e.g. 'Grade2'
//@param chapter a string representing the selected chapter, e.g. 'Chapter1'
//@param {int} numLessons the number of lessons in the selected chapter
export default function LessonsHandler({ chapter, numLessons }) {
  const { t, i18n } = useTranslation();
  const languageCode = i18n.language; //setting the languageCode to the current language
  const dispatch = useDispatch();
  const grade = useSelector(state => state.curriculum.grade);
  const completions = useSelector(state => state.user.completions);
  const assignmentDrill = useSelector(state => state.curriculum.assignmentDrill);
  const navigation = useNavigation();
  const [lessonsData, setLessonsData] = useState(null);

  const { data: lessonsDataQuery, isLoading: lessonsLoading, isSuccess: lessonsSuccess, isError: lessonsError, error: lessonsErrorMessage } = useGetLessonsDataQuery(
    { grade: grade, chpt: chapter, numLessons: numLessons, languageCode: languageCode }
  )

  useEffect(() =>{
    dispatch(addChapter({ chapter: chapter }));
  }, [])

  useEffect(() => {
    if(lessonsSuccess && lessonsDataQuery) {

      //adding an attribute to each lesson
      const updatedLessons = lessonsDataQuery.map((lesson) => ({
        ...lesson,
        completionTally: determineTally(grade, chapter, lesson.navigation, completions),
      }));

      setLessonsData(updatedLessons);
    }
  }, [lessonsSuccess, lessonsDataQuery, completions]);

  useEffect(() => {
    async function drill() {
      if(lessonsSuccess && assignmentDrill) {
        await new Promise(resolve => setTimeout(resolve, 400));
        navigation.navigate(assignmentDrill.lesson);
        dispatch(updateAssignmentDrill({ assignmentDrill: null }));
      }
    }

    drill();
  }, [lessonsSuccess, assignmentDrill])

  let content;
  if(lessonsLoading || (lessonsData === null)) {
    content = (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  } else if(lessonsError) {
    console.error(lessonsErrorMessage);
    content = null;
  } else if(lessonsSuccess && lessonsData) {
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

function determineTally(grade, chapter, lesson, completions) {
  const gradeID = concatenateFirstLetterAndLastNumbers(grade);
  const chapterID = concatenateFirstLetterAndLastNumbers(chapter);
  const lessonID = concatenateFirstLetterAndLastNumbers(lesson);
  const fullLessonID = `${gradeID}${chapterID}${lessonID}`

  //From the answer provided by @Jamiec here: https://stackoverflow.com/questions/9996727/count-instances-of-string-in-an-array
  //note the .length !
  let tallyCount = completions.filter((completion) => {
    return completion.completionID.split("_")[0] === fullLessonID
  }).length

  return tallyCount
}

function concatenateFirstLetterAndLastNumbers(str) {
  const firstLetter = str.charAt(0);
  const numbers = str.match(/\d+/g).join(''); // Regex extracting the numbers
  return firstLetter + numbers;
}

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