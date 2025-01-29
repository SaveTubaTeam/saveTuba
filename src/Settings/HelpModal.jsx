import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BodyText } from "../styled-components/body-text.component";
import { Spacer } from "../styled-components/spacer.component";
import { Image } from "expo-image";

export default function HelpModal({ modalHelpVisible, setModalHelpVisible }) {
   const { t } = useTranslation();

   return (
      <Modal animationType="slide" transparent={true} visible={modalHelpVisible}>
         <View style={styles.modalContainer}>
            <ModalContainer>

               <BodyText size="mid">
                  {t("about:help")}
               </BodyText>

               <Spacer size="large" />

               <TouchableOpacity
                  style={styles.greenButtonModal}
                  onPress={() => setModalHelpVisible(!modalHelpVisible)}
               >
                  <BodyText size="subtitle" color="secondary">
                     {t("about:close")}
                  </BodyText>
               </TouchableOpacity>

            </ModalContainer>
         </View>
      </Modal>
   )
}

const ModalContainer = styled.View`
  background-color: white;
  width: 85%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const styles = StyleSheet.create({
   modalContainer:{
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
   },
      greenButtonModal: {
      backgroundColor: "#748816",
      borderRadius: 10,
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
   }
})