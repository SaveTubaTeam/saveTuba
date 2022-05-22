import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TitleText } from "../../../../../../../../components/title-text.component";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <TitleText color="secondary">Memory Game</TitleText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C6DC3B",
  },
  header_text: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
});
