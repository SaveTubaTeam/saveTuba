import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

export const Badges = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <TitleText>{t("profile:badges")}</TitleText>
      <ScrollView style={{ width: "100%" }} horizontal independent persistentScrollbar={true}>
        <Image 
          source={require("../../../../assets/badges/badge1.png")} 
          style={styles.badge}
          fadeDuration={100}
        />
        <Image 
          source={require("../../../../assets/badges/badge2.png")} 
          style={styles.badge}
          fadeDuration={100}
        />
        <Image 
          source={require("../../../../assets/badges/badge3.png")} 
          style={styles.badge}
          fadeDuration={100}
        />
        <Image 
          source={require("../../../../assets/badges/badge4.png")} 
          style={styles.badge}
          fadeDuration={100}
        />
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  badge:{
    margin: 5,
    width: 100,
    height: undefined,
    aspectRatio: 1,
  }
})