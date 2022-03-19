import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

const TitleText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  padding-bottom: ${(props) => props.theme.sizes[1]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Badges = () => {
  const navigation = useNavigation();

  return (
    <Card>
      <TitleText>Badges</TitleText>
    </Card>
  );
};
