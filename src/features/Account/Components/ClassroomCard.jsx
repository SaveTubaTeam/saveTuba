import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Spacer } from "../../../components/spacer.component"
import { TitleText } from "../../../components/title-text.component"
import { Card } from "../../../components/card.component"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function ClassroomCard() {
   const { t } = useTranslation();
   const classroom = useSelector(state => state.user.classroom);

   return (
      <Card>
         <View style={styles.cardContainerRow}>
            <View style={{ flexDirection: "column", width: "60%" }}>
               <TitleText size="subtitle" align="left" weight="bold">{classroom.className}</TitleText>
               <TitleText size="subtitle" align="left" weight="bold">{`${t("common:grade")} ${extractNumbers(classroom.gradeLevel)}`}</TitleText>
               <Spacer size="small" />
               {/* marked for translation */}
               <TitleText size="body" align="left">{`Class Code: ${classroom.classCode}`}</TitleText>
               <TitleText size="body" align="left">{`Teacher: ${classroom.teacher.firstName} ${classroom.teacher.lastName}`}</TitleText>
            </View>
            
            <TouchableOpacity>
               <MaterialCommunityIcons name="pencil-circle" color="#60BBDD" size={45} />
            </TouchableOpacity>
         </View>
      </Card>
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