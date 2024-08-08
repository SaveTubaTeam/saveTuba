import React, { useState, useEffect} from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Spacer } from "../../../components/spacer.component"
import { TitleText } from "../../../components/title-text.component"
import { Card } from "../../../components/card.component"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import ClassCodeModal from "../../Home/ClassCodeModal"
import { Audio } from "expo-av";

export default function ClassroomCard() {
   const { t } = useTranslation();
   const [classCodeModalVisible, setClassCodeModalVisible] = useState(false);
   const classroom = useSelector(state => state.user.classroom);
   const [sound, setSound] = useState();

   async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require("../../../../assets/saveTubaSoundEffects/popupOpen.wav"));
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    }
  
    useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

   //to check for an empty object: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    //guard clause against uninitialized classroom
   if(!classroom || Object.keys(classroom).length === 0 || classroom.dummyClassroom) {
      return null;
   }

   return (
      <>
      <Card>
         <View style={styles.cardContainerRow}>
            <View style={{ flexDirection: "column", width: "60%" }}>
               <TitleText size="subtitle" align="left" weight="bold">{classroom.className}</TitleText>
               <TitleText size="subtitle" align="left" weight="bold">{`${t("common:grade")} ${extractNumbers(classroom.gradeLevel)}`}</TitleText>
               <Spacer size="small" />
               <TitleText size="body" align="left">{`${t("common:classcode")}: ${classroom.classCode}`}</TitleText>
               {/* marked for translation */}
               <TitleText size="body" align="left">{`${t("common:teacher")}: ${classroom.teacher.firstName} ${classroom.teacher.lastName}`}</TitleText>
            </View>
            
            <TouchableOpacity onPress={() => {
               setClassCodeModalVisible(true);
               playSound();
            }}>
               <MaterialCommunityIcons name="pencil-circle" color="rgba(96, 187, 221, 0.6)" size={45} />
            </TouchableOpacity>
         </View>
      </Card>
      <ClassCodeModal classCodeModalVisible={classCodeModalVisible} setClassCodeModalVisible={setClassCodeModalVisible} />
      </>
   )
}

function extractNumbers(str) {
   const numbers = str.match(/\d+/g); // Using regular expression to extract numbers (\d+)
   return numbers ? numbers.join('') : ''; // Joining the array of numbers into a single string
 }

const styles = StyleSheet.create({
   cardContainerRow: {
      flexDirection: "row", 
      justifyContent: "space-between", 
      paddingTop: 5, 
      paddingBottom: 5,
   }
})