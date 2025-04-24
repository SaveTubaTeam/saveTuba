import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import SignOut from "../Settings/SignOutComponent";
import styled from "styled-components";
import { BodyText } from "../styled-components/body-text.component";
import { db } from "../../firebaseConfig.js"; 
import { useUpdateClassCodeMutation } from "../../redux/slices/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/slices/userSlice";
import Toast from 'react-native-toast-message';
import { useDispatch } from "react-redux";
import { hackDummyClassroom } from "../../redux/slices/userSlice";

export default function ClassCodeModal({ classCodeModalVisible, setClassCodeModalVisible }) {
   const { t } = useTranslation();
   const [classCode, setClassCode] = useState("");
   const [textInputBoxColor, setTextInputBoxColor] = useState("rgba(128, 128, 128, 0.9)");
   const [escapeVisible, setEscapeVisible] = useState(false);
   const user = useSelector(selectCurrentUser);
   const dispatch = useDispatch();

   useEffect(() => {
      if(classCodeModalVisible) {
         console.log("Class Code Modal Visible!");
      }
   }, [classCodeModalVisible])

   useEffect(() => {
      if(user && (user.classCode !== "dummyClassroom")) {
         setEscapeVisible(true);
      }
   }, [user])

   const [updateClassCode] = useUpdateClassCodeMutation();

   async function handleClassCode() {
      console.log("CLASSCODE ENTERED:", classCode);
      const classCodeExists = await checkClassCodeExists();
      if(!classCodeExists) { 
         console.error(`${classCode} DOES NOT EXIST!`);
         Alert.alert("Class Code Does Not Exist", `Please try again. Class code ${classCode} does not exist.`);
         setTextInputBoxColor("rgba(219, 71, 59, 0.7)"); //setting color to red
      } else { //class code exists. closing modal, dispatching change to be handled by query functions in Main
         //hack to immediately update class code
         dispatch(hackDummyClassroom({ classCode: classCode }));

         console.log("Closing Class Code Modal . . .");
         await updateClassCode({ classCode: classCode, email: user.email }).unwrap();
         setClassCodeModalVisible(false);
         setClassCode("");
         Toast.show({
            type: 'success',
            text1: 'Success!',
            text2: `Now in classroom ${classCode}`,
            visibilityTime: 3000,
         });
      }
   }

   async function checkClassCodeExists() {
      //.trim removes all whitespace from both ends of the string
      if(classCode.trim() === "") { //guard clause against empty strings or strings with spaces
         return false;
      }

      const classroomRef = db.collection("classrooms").doc(classCode);
      const classroomSnapshot = await classroomRef.get();
      //console.log(classroomSnapshot.exists);
      return classroomSnapshot.exists; //boolean true or false
   }

   let exitIcon = null;
   if(escapeVisible) {
      exitIcon = (
         <TouchableOpacity style={styles.exitIcon}
            onPress={() => {
               console.log("Closing Class Code Modal . . .");
               setClassCodeModalVisible(false);
               setClassCode("");
            }}
         >  
            <BodyText>❌</BodyText>
         </TouchableOpacity>
      );
   }

   //regarding KeyboardAvoidingView: https://reactnative.dev/docs/keyboardavoidingview#behavior
   return (
      <Modal animationType="none" transparent={true} visible={classCodeModalVisible}>
         <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalContainer}
         >
            <ModalContainer>
               {exitIcon}
               <View style={{paddingTop: 15}}/>
               <BodyText size="h5">
                  Enter Your Class Code to Continue
               </BodyText>

               <TextInput
                  autoFocus={true}
                  onPressIn={() => {
                     setTextInputBoxColor("rgba(128, 128, 128, 0.9)"); //resetting color to grey
                     setClassCode(""); //clearing TextInput
                  }}
                  editable={true}
                  autoCapitalize="characters"
                  maxLength={6}
                  onChangeText={text => setClassCode(text)}
                  value={classCode}
                  style={[styles.textInput, { backgroundColor: textInputBoxColor }]}
                  placeholder="_ _ _ _ _ _"
                  placeholderTextColor="white"
                  textAlign="center"
                  textAlignVertical="center"
                  caretHidden={true}
               />

            <TouchableOpacity
               style={styles.greenButtonModal}
               onPress={handleClassCode}
            >
               {/* marked for translation */}
               <BodyText size="subtitle" color="primary">
                  {t("about:continue")}
               </BodyText>
            </TouchableOpacity>

               <SignOut />

            </ModalContainer>
         </KeyboardAvoidingView>
      </Modal>
   )
}

const ModalContainer = styled.View`
  background-color: white;
  width: 85%;
  height: 80%;
  padding: 35px;
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
      marginBottom: 20,
      paddingVertical: 15,
      paddingHorizontal: 70,
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
   },
   exitIcon: {
      position: "absolute", 
      right: "8%", top: "4%", 
      transform: [{ scaleX: 2 }, { scaleY: 2 }],
   }
})