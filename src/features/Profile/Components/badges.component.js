import React from "react";
import { Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';

import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

const Badge = styled.Image`
  margin: 5px;
  width: 100px;
  height: undefined;
  aspect-ratio: 1;
`;

export const Badges = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <Card>
      <TitleText>{t("profile:badges")}</TitleText>
      <ScrollView style={{ width: "100%" }} horizontal independent>
        <Badge source={require("../../../../assets/badge1.png")} />
        <Badge source={require("../../../../assets/badge2.png")} />
        <Badge source={require("../../../../assets/badge3.png")} />
        <Badge source={require("../../../../assets/badge4.png")} />
      </ScrollView>
    </Card>
  );
};
