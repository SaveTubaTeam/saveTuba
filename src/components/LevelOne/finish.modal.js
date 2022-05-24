import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

export const FinishModal = ({ visible, setResultVisible, navigation }) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.correctContainer}>
            <Text style={styles.modalText}>Phew, that's it!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setResultVisible(!visible);
                navigation.navigate("Results");
              }}
            >
              <Text style={styles.textCloseStyle}>Finish Quiz</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: "#60BBDD",
  },
  modalView: {
    alignItems: "flex-end",
    width: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  correctContainer: {
    alignItems: "center",
    width: "100%",
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  textCloseStyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    paddingRight: 2,
    paddingLeft: 2,
  },
});
