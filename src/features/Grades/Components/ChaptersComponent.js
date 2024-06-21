import React from "react";
import { FlatList, View, Image } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

import { useTranslation } from "react-i18next";
import { Header } from "../../../components/Grades/grades.styles";
import { BodyText } from "../../../components/body-text.component";
import { TitleText } from "../../../components/title-text.component";
import { SafeArea } from "../../../components/safe-area.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Chapter = styled.TouchableOpacity`
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;
`;

const Icon = styled.Image`
  height: 100px;
  width: undefined;
  aspect-ratio: 1;

  position: absolute;
  right: 25px;
  top: -20px;
`;

//This component is responsible for creating every chapter card in the selected Grade
//It is then rendered via ChaptersHandler.js

//@param gradeData is an array of chapters and their metadata. it is taken as a param from ChaptersHandler.js
function ChaptersComponent({ gradeData, navigation, imageMap }) {
  const nav = useNavigation();
  const { t } = useTranslation();
  const renderItem = ({ item }) => {
    return (
      <Chapter
        onPress={() => {
          nav.navigate(item.navigation);
        }}
      >
        <LinearGradient
          colors={[item.colorOne, item.colorTwo]}
          start={{ x: 0, y: 0, }}
          end={{ x: 1, y: 1, }}
          style={{
            height: 150,
            padding: 20,
            borderRadius: 25,
          }}
        >
          <View style={{ position: "absolute", left: 30, bottom: 30 }}>
            <BodyText align="left" size="mid" color="secondary">
              {t(item.title)}
            </BodyText>
            <TitleText align="left" size="title" color="secondary">
              {t(item.name)}
            </TitleText>
          </View>
        </LinearGradient>
        <Icon 
          source={{uri: item.iconDownloadURL}}
        />
      </Chapter>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Header
          title={t("common:chapters")}
          back="Grades"
          navigation={navigation}
        />
        <FlatList
          style={{ width: "100%" }}
          data={gradeData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
        />
      </Container>
    </SafeArea>
  );
}

export default ChaptersComponent;