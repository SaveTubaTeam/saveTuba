import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ResultsScreen = ({ score }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Your score is {score}%</Text>
    </Container>
  );
};
