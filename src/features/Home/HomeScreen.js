import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
// import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

const TitleText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Body = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const HomeScreen = () => {
  return (
    <SafeArea>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <TitleText>Title</TitleText>
        <Body>Lorem ipsum dolor sit amet</Body>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
