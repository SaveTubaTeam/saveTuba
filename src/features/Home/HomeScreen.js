import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { TitleText } from "../../components/title-text.component";
import { BodyText } from "../../components/body-text.component";
import { SafeArea } from "../../components/safe-area.component";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeArea>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <TitleText>Title</TitleText>
        <BodyText>Lorem ipsum dolor sit amet</BodyText>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
