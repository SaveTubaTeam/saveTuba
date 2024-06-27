import React from "react";
import { StyleSheet, View, Modal, Pressable, Text } from "react-native";
import { useTranslation } from "react-i18next";

export default function AboutModal({ modalAboutVisible, setModalAboutVisible}) {
   const { t } = useTranslation();

   return (
      <Modal animationType="slide" transparent={true} visible={modalAboutVisible}
         onRequestClose={() => { setModalAboutVisible(!modalAboutVisible); }}
      >
      <View style={styles.centeredView}>
         <View style={styles.modalView}>
            <Text style={styles.modalText}>{t("about:about")}</Text>
            <Pressable
               style={[styles.button, styles.buttonClose]}
               onPress={() => setModalAboutVisible(!modalAboutVisible)}
            >
            <Text style={styles.textStyle}>{t("about:close")}</Text>
            </Pressable>
         </View>
      </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
   },
   modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
   },
   modalText: {
      marginBottom: 15,
      textAlign: "center",
   },
   button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
   },
   buttonOpen: {
      backgroundColor: "#F194FF",
   },
   buttonClose: {
      backgroundColor: "#2196F3",
   },
   textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
   },
})