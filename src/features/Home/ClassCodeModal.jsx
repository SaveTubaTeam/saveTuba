import React, { useState, useRef } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, TextInput, Alert } from "react-native";
import { useTranslation } from "react-i18next";
import SignOut from "../Account/Components/signouut.component";
import styled from "styled-components";
import { BodyText } from "../../components/body-text.component";
import { db } from "../../../firebase";
import { useUpdateClassCodeMutation } from "../../../redux/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/slices/userSlice";

export default function ClassCodeModal({ classCodeModalVisible }) {
   const { t } = useTranslation();
   const [classCode, setClassCode] = useState("");
   const [textInputBoxColor, setTextInputBoxColor] = useState("rgba(128, 128, 128, 0.9)");
   const user = useSelector(selectCurrentUser);

   const [updateClassCode] = useUpdateClassCodeMutation();

   //re: https://stackoverflow.com/questions/42456069/how-to-open-keyboard-automatically-in-react-native
   const inputRef = useRef();

   async function handleClassCode() {
      console.log("CLASSCODE ENTERED:", classCode);
      const classCodeExists = await checkClassCodeExists();
      if(!classCodeExists) { 
         console.error(`${classCode} DOES NOT EXIST!`);
         Alert.alert("Class Code Does Not Exist", `Please try again. Class code ${classCode} does not exist.`);
         setTextInputBoxColor("rgba(219, 71, 59, 0.7)"); //setting color to red
      } else { //class code exists. closing modal, dispatching change to be handled by query functions in Main
         await updateClassCode({ classCode: classCode, email: user.email }).unwrap();
         Toast.show({
            type: 'success',
            text1: 'Success!',
            text2: `Classroom ${classCode} found`,
            visibilityTime: 3000,
         });
      }
   }

   async function checkClassCodeExists() {
      const classroomRef = db.collection("classrooms").doc(classCode);
      const classroomSnapshot = await classroomRef.get();
      //console.log(classroomSnapshot.exists);
      return classroomSnapshot.exists; //boolean true or false
   }

   return (
      <Modal animationType="none" transparent={true} visible={classCodeModalVisible}>
         <View style={styles.modalContainer}>
            <ModalContainer>
               <View style={{paddingTop: 15}}/>
               <BodyText size="h5">
                  Enter Your Class Code to Continue
               </BodyText>

               <TextInput 
                  ref={inputRef}
                  //onLayout={()=> inputRef.current.focus()}
                  onPressIn={() => {
                     setTextInputBoxColor("rgba(128, 128, 128, 0.9)"); //resetting color to grey
                     setClassCode(""); //clearing TextInput
                  }}
                  editable
                  autoCapitalize="characters"
                  maxLength={6}
                  onChangeText={text => setClassCode(text)}
                  value={classCode}
                  style={[styles.textInput, { backgroundColor: textInputBoxColor }]}
                  placeholder="_ _ _ _ _ _"
                  placeholderTextColor="white"
                  textAlign="center"
                  textAlignVertical="center"
                  caretHidden
               />

            <TouchableOpacity
               style={styles.greenButtonModal}
               onPress={handleClassCode}
            >
               {/* marked for translation. i want this to say enter */}
               <BodyText size="subtitle" color="primary">
                  Continue!
               </BodyText>
            </TouchableOpacity>

               <SignOut />

            </ModalContainer>
         </View>
      </Modal>
   )
}

const ModalContainer = styled.View`
  background-color: white;
  width: 85%;
  height: 80%;
  padding: 20px;
  border-radius: 20px;
  border: 10px solid #cce882;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
   modalContainer:{
      ...StyleSheet.absoluteFillObject, //to fill the parent
      backgroundColor: 'rgba(128, 128, 128, 0.7)',
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
   },
      greenButtonModal: {
      backgroundColor: "#F5F5DC",
      borderColor: "#748816",
      borderWidth: 5,
      borderRadius: 25,
      marginBottom: 30,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 70,
      paddingRight: 70
   },
   textInput: {
      height: "30%",
      width: "90%",
      margin: 20,
      padding: 10,
      borderRadius: 10,
      borderColor: "rgba(0, 0, 0, 0.8)",
      borderWidth: 5,
      fontFamily: "Scada_400Regular",
      color: "white",
      fontSize: 50,
   }
})