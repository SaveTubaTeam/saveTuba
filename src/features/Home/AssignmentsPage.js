import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { SafeArea } from "../../components/safe-area.component";
import { useNavigation } from "@react-navigation/native";
import { ImageBg } from "../../components/Grades/grades.styles";
import { useTranslation } from "react-i18next";

function AssignmentsPage() {
   const { t } = useTranslation();
   return (
      <SafeArea>
         <HeaderComponent title={"Assignments"} />

         <ImageBg
            source={require("../../../assets/assignmentsBg.jpg")}
            resizeMode="cover"
         >


         </ImageBg>
      </SafeArea>
   )
}

function HeaderComponent({ title }) {
   return (
      <View style={styles.header}>
         <Text style={styles.headerText}>
            {title}
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      width: "100%",
      justifyContents: "flex-start",
      backgroundColor: "#C6DC3B",
      borderBottomWidth: 0.5,
      borderBottomColor: "#748816"
   },
   headerText: {
      fontFamily: "BalsamiqSans_400Regular",
      color: "#748816",
      fontSize: 20,
      paddingBottom: 15,
      paddingLeft: 15
   }
})

export default AssignmentsPage;