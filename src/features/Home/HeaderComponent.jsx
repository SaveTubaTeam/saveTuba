import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { apiSlice } from "../../../redux/apiSlice";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";
import { BodyText } from "../../components/body-text.component";

export default function HeaderComponent({ title }) {
   const [modalVisible, setModalVisible] = useState(false);

   return (
      <>
      <View style={styles.header}>
         <Text style={styles.headerText}>
            {title}
         </Text>
 
         <TouchableOpacity 
            style={styles.parentIcon} 
            onPress={() => {
            setModalVisible(true);
            // dispatch(apiSlice.util.resetApiState());
            // console.log("--------! RTK QUERY API CACHE INVALIDATED GLOBALLY !--------");
         }}>
            <Ionicons name="people-circle" size={45} color="#748816" />
         </TouchableOpacity>
      </View>

      <ModalComponent visible={modalVisible} setModalVisible={setModalVisible} />
      </>
   )
}

const ACTIVITY_COLORS = {"imageboom": "palevioletred",
                          "mastery": "#748816", //dark green (from theme)
                          "memory": "dodgerblue",
                          "snapshot": "#FFD972", //yellowish
                          "sorting": "coral",
                          "reorder": "pink",
                          "quiz": "mediumpurple"}

function ModalComponent({ visible, setModalVisible }) {
   const completions = useSelector(state => state.user.completions);
   const { t } = useTranslation();
   const [reversedCompletions, setReversedCompletions] = useState(completions);

   //reversing completions array so latest is at the top
   useEffect(() => {
      const temp = [...completions];
      setReversedCompletions(temp.reverse());
   },[completions]);

   const renderItem = ({item}) => {
      const completionID = item.completionID.split("_")[0];
      const activityStr = item.completionID.split("_")[1].toLowerCase();
      const activity = t(`common:${activityStr}`)
      const grade = `${t("common:grade")}${getNumbersAfterLetter(completionID, "G")}`;
      const chapter = `${t("common:chapter")}${getNumbersAfterLetter(completionID, "C")}`;
      const lesson = `${t("common:lesson")}${getNumbersAfterLetter(completionID, "L")}`;

      let backgroundColor; //green or blue from theme
      activityStr === "mastery" ? backgroundColor = "rgba(116, 136, 22, 0.85)" : backgroundColor = "rgba(65, 128, 152, 0.95)";
      return (
         <View style={[styles.itemContainer, { backgroundColor: backgroundColor }]}>
            <BodyText size="button" color="secondary">{`${grade}/${chapter}/${lesson}/${activity}`}</BodyText>
         </View>
      )
   }

   return (
      <Modal transparent animationType="none" visible={visible}
         onRequestClose={() => { setModalVisible(false); }}
      >
      <View style={styles.modalContainer}>
         <ModalContainer>

            <TouchableOpacity
               style={styles.exitIcon}
               onPress={() => setModalVisible(false)}
            >
               <BodyText>❌</BodyText>
            </TouchableOpacity>

            <FlatList 
               data={ reversedCompletions }
               keyExtractor={(item, index) => index}
               renderItem={renderItem}
               contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
               ListHeaderComponent={
                  /* marked for translation */
                  <BodyText size="h5" weight="bold" color="quaternary">Completions</BodyText>
               }
               ListHeaderComponentStyle={{ paddingBottom: 20 }}
            />

         </ModalContainer>
       </View>
      </Modal>
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

const styles = StyleSheet.create({ 
   header: {
      width: "100%",
      backgroundColor: "#C6DC3B",
      borderBottomWidth: 1,
      borderBottomColor: "#748816",
      flexDirection: "row",
   },
   headerText: {
      fontFamily: "BalsamiqSans_400Regular",
      color: "#748816",
      fontSize: 20,
      paddingBottom: 15,
      paddingLeft: 15
   },
   parentIcon: {
      position: "absolute",
      right: 15,
      bottom: 5
  },
  modalContainer:{
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
  },
  exitIcon: {
      position: "absolute", 
      right: 25, top: 20, 
      transform: [{ scaleX: 2 }, { scaleY: 2 }],
      zIndex: 1,
  },
  itemContainer: {
      padding: 10,
      width: 285,
      borderRadius: 3,
      marginBottom: 10,
      backgroundColor: "rgba(65, 128, 152, 0.95)",
      alignSelf: "center",
  }
});

const ModalContainer = styled.View`
  background-color: #F6FEDB;
  width: 95%;
  height: 90%;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 15px;
  border: 5px #748816;
`;