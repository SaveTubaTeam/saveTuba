import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";

// Test implementing the theme
const TitleText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const HomeScreen = () => {
  return (
    <View style={{ alignContent: "center", alignItems: "center" }}>
      <TitleText>Hello</TitleText>
    </View>
  );
};

export default HomeScreen;
