import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

export const Badges = () => {
  const navigation = useNavigation();

  return (
    <Card>
      <TitleText>Badges</TitleText>
    </Card>
  );
};
