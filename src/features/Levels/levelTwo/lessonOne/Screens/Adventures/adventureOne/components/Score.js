import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Score extends React.Component {
  render() {
    return (
      <View style={styles.score_container}>
        <Text style={styles.score}>{this.props.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score_container: {
    flex: 2,
    alignItems: "center",
    padding: 20,
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
