import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useTranslation } from "react-i18next";
import { BodyText } from "../../components/body-text.component";
import { TitleText } from "../../components/title-text.component";
import { Surface, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { getIndividualLessonData } from "../Grades/Handlers/Database";

export default function AssignmentCard({ content }) {
   const { t, i18n } = useTranslation();
   const languageCode = i18n.language;

   /* marked for translation */
   const assignmentGrade = `Grade ${getNumbersAfterLetter(content.assignmentID, "G")}`;
   const assignmentChapter = `Chapter ${getNumbersAfterLetter(content.assignmentID, "C")}`;
   const assignmentLesson = `Lesson ${getNumbersAfterLetter(content.assignmentID, "L")}`;

   const gradeParam = `Grade${getNumbersAfterLetter(content.assignmentID, "G")}`
   const chapterParam = `Chapter${getNumbersAfterLetter(content.assignmentID, "C")}`;
   const lessonParam = getNumbersAfterLetter(content.assignmentID, "L");

   const [individualLessonData, setIndividualLessonData] = useState({
      title: ". . .",
      thumbnailDownloadURL: "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery.png?alt=media&token=ad62687c-a8ae-4936-82ae-cc71f6343c79",
      thumbnailBlurHash: "UdFG2eEfNG#kt:xZjrWAXAxas;W=RkWVoft7",
   });

   useEffect(() => {
      getIndividualLessonData(gradeParam, chapterParam, lessonParam, languageCode)
         .then((result) => {
            setIndividualLessonData(result);
         }).catch((err) => {
            console.error("Error: ", err);
         });
   }, [gradeParam, chapterParam, lessonParam, languageCode])

   return (
      <Surface style={styles.assignmentCard} elevation={3}>
         <View style={styles.topSection}>
            <TitleText align="left" size="mid" color="quaternary" weight="bold">
               {`${assignmentGrade} / ${assignmentChapter} / ${assignmentLesson}`}
            </TitleText>
         </View>

         <View style={styles.bottomSectionLeft}>
            <TitleText align="left" size="button">
               {individualLessonData.title}
            </TitleText>

            <TouchableOpacity style={styles.startButton}>
              <Ionicons
               name="caret-forward"
               size={14}
               color="#748816"
               style={{ paddingRight: 3, paddingTop: 1.5 }}
              />
              <BodyText align="left" color="primary" size="button">
                {t("common:start")}
              </BodyText>

               <View style={{ position: "absolute", paddingLeft: 120, paddingTop: 5 }}>
                  <BodyText size="button" color="dark" weight="medium">
                     {/* marked for translation */}
                     {`due:  ${parseDate(content.dateDue)}`}
                  </BodyText>
               </View>

            </TouchableOpacity>
         </View>
         <Image 
            style={styles.bottomSectionRight}
            source={individualLessonData.thumbnailDownloadURL}
            placeholder={individualLessonData.thumbnailBlurHash}
         />
      </Surface>
   )
}

function getNumbersAfterLetter(inputString, letter) {
   //regular expression to match digits after the given letter
   const regex = new RegExp(`${letter}(\\d+)`);
   const match = regex.exec(inputString);
   
   // Check if there's a match and return the captured group (numbers after the letter)
   if (match && match[1]) {
     return match[1]; // match[1] contains the captured group (numbers)
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
   
   // Combine the modified date part with the time part
   const modifiedDateString = `${dayMonth}, ${parts[1].slice(0, -3)}`;
   return modifiedDateString;
}

const styles = StyleSheet.create({
   assignmentCard: {
      width: 360,
      height: 165,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 15,
      marginTop: 17,
   },
   topSection: {
      height: 45,
      backgroundColor: 'rgba(71, 81, 92, 0.95)',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomWidth: 5,
      borderColor: "rgba(71, 81, 92, 0.85)",
      paddingLeft: 15,
      paddingTop: 10,
      flexDirection: "row",
   },
   bottomSectionLeft: {
      width: "75%",
      height: 120,
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
   startButton: {
      position: "absolute",
      bottom: 10,
      left: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 15,
      backgroundColor: "#F6FEDB",
      borderRadius: 20,
      borderColor: "#CCE882",
      borderWidth: 2,
      flexDirection: "row",
   }
})