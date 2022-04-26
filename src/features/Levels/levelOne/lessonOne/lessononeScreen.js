import React from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
//import { useNavigation } from "@react-navigation/native";
//import { NavigationContainer} from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.secondary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 20%;
  align-items: center;
`;

const LessonOneScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => navigation.goBack()}>
        <Text>Return</Text>
      </Button>
      <Text>LessonOne!</Text>
    </View>
  );
};
export default LessonOneScreen;

const style = StyleSheet.create({
  roundButton1: {
    width: 125,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 10,
    borderRadius: 100,
    backgroundColor: "#C6DC3B",
  },
  roundButton2: {
    width: 125,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 255,
    borderRadius: 100,
    backgroundColor: "#C6DC3B",
  },
});
