import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

const Row = styled.View`
  flex-direction: row;
`;

export const Badges = () => {
  const navigation = useNavigation();

  return (
    <Card>
      <TitleText>Badges</TitleText>
      <Row></Row>
    </Card>
  );
};
