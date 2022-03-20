import React from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

const Row = styled.View`
  flex-direction: row;
`;

const Badge = styled.Text`
  margin: 15px;
`;

export const Badges = () => {
  const navigation = useNavigation();

  return (
    <Card>
      <TitleText>Badges</TitleText>
      <ScrollView horizontal>
        <Row>
          <Badge>Badge 1</Badge>
          <Badge>Badge 2</Badge>
          <Badge>Badge 3</Badge>
          <Badge>Badge 4</Badge>
          <Badge>Badge 5</Badge>
        </Row>
      </ScrollView>
    </Card>
  );
};
