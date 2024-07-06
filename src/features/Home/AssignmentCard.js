import React, { useEffect, useState, memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { BodyText } from "../../components/body-text.component";
import { TitleText } from "../../components/title-text.component";
import { Surface } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useGetGradeDataQuery, useGetLessonsDataQuery, useGetIndividualLessonDataQuery, useGetActivitiesDataQuery } from "../../../redux/curriculumApiSlice";

//memoized
const AssignmentCard = memo(({ content }) => {
   const { t, i18n } = useTranslation();
   const languageCode = i18n.language;
   const navigation = useNavigation();
   const curriculumSlice = useSelector(state => state.curriculum);

   /* marked for translation */
   const assignmentGrade = `${t("common:grade")}${getNumbersAfterLetter(content.assignmentID, "G")}`;
   const assignmentChapter = `${t("common:chapter")}${getNumbersAfterLetter(content.assignmentID, "C")}`;
   const assignmentLesson = `${t("common:lesson")}${getNumbersAfterLetter(content.assignmentID, "L")}`;

   const grade = `Grade${getNumbersAfterLetter(content.assignmentID, "G")}`
   const chapter = `Chapter${getNumbersAfterLetter(content.assignmentID, "C")}`;
   const lesson = `Lesson${getNumbersAfterLetter(content.assignmentID, "L")}`;

   const [individualLessonData, setIndividualLessonData] = useState({
      title: ". . .",
      thumbnailDownloadURL: "UdFG2eEfNG#kt:xZjrWAXAxas;W=RkWVoft7",
      thumbnailBlurHash: "UdFG2eEfNG#kt:xZjrWAXAxas;W=RkWVoft7",
   });

   const { data: queryResult, isSuccess: individualLessonSuccess } = useGetIndividualLessonDataQuery(
      { grade: grade, chpt: chapter, lesson: lesson, languageCode: languageCode }
   )

   useEffect(() => {
      if(individualLessonSuccess) {
         setIndividualLessonData(queryResult);
      }
   }, [individualLessonSuccess])

   // const [buttonPressed, setButtonPressed] = useState(false);

   // const { isLoading: gradeLoading, isSuccess: gradeSuccess } = useGetGradeDataQuery(
   //    { grade: grade },
   //    { skip: !buttonPressed }
   // );
   // const { isLoading: lessonsLoading, isSuccess: lessonsSuccess } = useGetLessonsDataQuery( //NOTE how numLessons is hardcoded!!!
   //    { grade: grade, chpt: chapter, numLessons: 25, languageCode: languageCode },
   //    { skip: !buttonPressed }
   // );
   // const { isLoading: activitiesLoading,isSuccess: activitiesSuccess } = useGetActivitiesDataQuery(
   //    { grade: grade, chpt: chapter, lesson: lesson, languageCode: languageCode },
   //    { skip: !buttonPressed }
   // );

   // jac927 6/26/24 | James: Dear whoever is reading, I fell into a rabbit hole of optimization for the below pushToLesson function.
   // I would advise that you think of a radically different solution than to continue to optimize this function.
   // The missing piece of the puzzle is a page focus listener for each layer of stack navigation.
   // This pushToLesson function will not work if rendering for any of the below navigation 'layers' takes longer than 500ms.

   // jac927 7/4/24 | James: Found a glitch where the completionID has a chance to be out of sync with the navigation stack and/or 
   // redux curriculumLocationSlice if the navigation stack fails to render on time from this function. This causes a mismatch
   // in the completionID and the actual curriculum location of the user. Looking for a fix...
   
   async function pushToLesson() {
      console.log("pushing . . . ");
      //TODO: implement useFocusEffect into curriculum handlers
      //navigation drill will be passed to redux store here
      //individuallessonhandler will pass null to cleanup

      // navigation.navigate("Home");
      // navigation.navigate("ChaptersHandler", { grade: grade });

      // while(curriculumSlice.grade === "") {
      //    await new Promise(resolve => setTimeout(resolve, 100));
      // }
      // if(curriculumSlice.grade) {
      //    navigation.navigate(chapter);
      // }

      // while(curriculumSlice.chapter === "") {
      //    await new Promise(resolve => setTimeout(resolve, 100));
      // }
      // if(curriculumSlice.chapter) {
      //    navigation.navigate(lesson);
      // }

      // if(gradeSuccess && lessonsSuccess && activitiesSuccess) {
      //    navigation.navigate("Home");

      //    await new Promise(resolve => setTimeout(resolve, 100));
      //    navigation.navigate("ChaptersHandler", { grade: grade });

      //    await new Promise(resolve => setTimeout(resolve, 300));
      //    navigation.navigate(chapter);

      //    await new Promise(resolve => setTimeout(resolve, 500));
      //    navigation.navigate(lesson);
      // }
   }

   //default set to red #db473b
   const [topRowColor, setTopRowColor] = useState({ color: "rgba(219, 71, 59, 0.8)", border: "rgba(219, 71, 59, 1)", });
   const [opacity, setOpacity] = useState(0);
   /* marked for translation */
   const [dateText, setDateText] = useState("Date Due");

   useEffect(() => {
      content.completionStatus ? setOpacity(1) : setOpacity(0);

      if((!content.overdue && content.completionStatus) || (!content.overdue && !content.completionStatus)) { //set to blue #418098
         setTopRowColor({ color: "rgba(65, 128, 152, 0.8)", border: "rgba(65, 128, 152, 1)" });
         setDateText("Date Due") /* marked for translation */
         //set to purple #9241ba
         //setTopRowColor({ color: "rgba(146, 65, 186, 0.8)", border: "rgba(146, 65, 186, 1)" })
      } else if(content.overdue) { //use default red topRowColor if overdue
         setTopRowColor({ color: "rgba(219, 71, 59, 0.8)", border: "rgba(219, 71, 59, 1)", });
         setDateText("OVERDUE") /* marked for translation */
      }
   }, [content]);

   return (
      <Surface style={styles.assignmentCard} elevation={3}>

         <CompletionOverlay opacity={opacity} />

         <View style={[styles.topSection, { backgroundColor: topRowColor.color, borderColor: topRowColor.border }]}>
            <BodyText align="left" size="subtitle" color="beige" weight="bold">
               {/* marked for translation */}
               {`${dateText}:  ${parseDate(content.dateDue)}`}
            </BodyText>

            <BodyText size="subtitle" color="beige" weight="bold">
               {/* numCompletions refers to the number of activities that have been completed in the given lesson */}
               {`${content.numCompletions}/${content.numActivities}`}
            </BodyText>
         </View>

         <View style={styles.bottomSectionLeft}>
            <TitleText align="left" size="button">
               {individualLessonData.title}
            </TitleText>

            <TouchableOpacity style={styles.buttonBottomRow} 
               onPress={async() => { await pushToLesson(); }}
            >
              <Ionicons name="caret-forward" size={14} color="#748816" style={{ paddingRight: 3, paddingTop: 1.5 }} />
              
              <BodyText align="left" color="primary" size="button">
                {t("common:start")}
              </BodyText>
            </TouchableOpacity>

            <View style={styles.textBottomRow}>
               <BodyText size="button" color="dark" weight="medium">
                  {/* marked for translation */}
                  {`${assignmentGrade}/${assignmentChapter}/${assignmentLesson}`}
               </BodyText>
            </View>
         </View>

         <Image 
            style={styles.bottomSectionRight}
            source={individualLessonData.thumbnailDownloadURL}
            placeholder={individualLessonData.thumbnailBlurHash}
         />
      </Surface>
   )
});

function CompletionOverlay({ opacity }) {
   let pointerEvents = (opacity === 1) ? "auto" : "none";
   let zIndex = (opacity === 1) ? 2 : -1;
   return (
      <View style={[styles.overlay, { zIndex: zIndex, pointerEvents: pointerEvents, opacity: opacity }]}>
         <Ionicons name="checkmark-circle" size={140} color="#7ED339" style={{ paddingTop: 10 }}/>
      </View>
   )
}

function getNumbersAfterLetter(inputString, letter) {
   //regular expression to match digits after the given letter
   const regex = new RegExp(`${letter}(\\d+)`);
   const match = regex.exec(inputString);
   
   // Check if there's a match and return the captured group (numbers after the letter)
   if (match && match[1]) {
     return parseInt(match[1]); // match[1] contains the captured group and we return a type number
   } else {
     console.error("ERROR in getNumbersAfterLetter");
     return null;
   }
}

function parseDate(dateString) {
   const parts = dateString.split(', ');
   
   // Extract the date part and split it by slash (/)
   const datePart = parts[0];
   const dateParts = datePart.split('/');
   const dayMonth = dateParts.slice(0, 2).join('/'); // Remove the year part (last element) from the dateParts array
   
   // Combine the modified date part with the time part (seconds removed)
   const modifiedDateString = `${dayMonth}, ${parts[1].slice(0, -3)}`;
   return modifiedDateString;
}

const styles = StyleSheet.create({
   assignmentCard: {
      width: 370,
      height: 160,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 15,
      marginTop: 17,
   },
   topSection: {
      height: 45,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomWidth: 5,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 7,
      flexDirection: "row",
      justifyContent: "space-between",
      zIndex: 1,
   },
   bottomSectionLeft: {
      width: "75%",
      height: 115,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
   },
   bottomSectionRight: {
      borderBottomRightRadius: 15,
      position: "absolute",
      right: 0,
      bottom: 0,
      width: "25%",
      height: 120,
   },
   buttonBottomRow: {
      position: "absolute",
      bottom: 10,
      left: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 12,
      backgroundColor: "#F6FEDB",
      borderRadius: 20,
      borderColor: "#CCE882",
      borderWidth: 2,
      flexDirection: "row",
      zIndex: 0
   },
   textBottomRow: {
      flexDirection: "row",
      position: "absolute",
      top: 81,
      bottom: 15,
      position: "absolute", 
      left: 102,
      zIndex: -1,
   },
   overlay: {
      ...StyleSheet.absoluteFillObject, //to fill the parent
      alignItems: "center",
      borderRadius: 15,
      backgroundColor: "rgba(131, 219, 59, 0.3)"
   }
})

export default AssignmentCard;