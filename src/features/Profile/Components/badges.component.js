import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

const Badge = styled.Image`
  margin: 5px;
  width: 100px;
  height: undefined;
  aspect-ratio: 1;
`;

export const Badges = ({badges}) => {
  const navigation = useNavigation();

  const { t } = useTranslation();
  // console.warn(badges);

  return (
    <Card>
      <TitleText>{t("profile:badges")}</TitleText>
      <ScrollView style={{ width: "100%" }} horizontal independent>
        <Badge source={require("../../../../assets/badges/badge1.png")} />
        <Badge source={require("../../../../assets/badges/badge2.png")} />
        <Badge source={require("../../../../assets/badges/badge3.png")} />
        <Badge source={require("../../../../assets/badges/badge4.png")} />
        <Badge source={require("../../../../assets/badges/RaeVRJ54eObHkdzEXTWb.png")} />
      </ScrollView>
    </Card>
  );
};
