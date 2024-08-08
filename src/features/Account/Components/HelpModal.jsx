import React, {useEffect, useState} from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Image } from "expo-image";
import { Audio } from "expo-av";

export default function HelpModal({ modalHelpVisible, setModalHelpVisible }) {
   const { t } = useTranslation();
   const [sound, setSound] = useState();

   async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../../../../assets/saveTubaSoundEffects/popupClose.wav')
      );
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
                  onPress={() => {playSound(); setModalHelpVisible(!modalHelpVisible)}}
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