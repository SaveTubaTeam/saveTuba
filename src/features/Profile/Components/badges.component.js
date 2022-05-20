import React from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

const Badge = styled.Image`
  margin: 15px;
  width: 50%;
  height: undefined;
  aspect-ratio: 1;
`;

export const Badges = () => {
  const navigation = useNavigation();

  return (
    <Card>
      <TitleText>Badges</TitleText>
      <ScrollView horizontal>
        <Badge source={require("../../../../assets/badge1.png")} />
        <Badge source={require("../../../../assets/badge2.png")} />
        <Badge source={require("../../../../assets/badge3.png")} />
      </ScrollView>
    </Card>
  );
};
