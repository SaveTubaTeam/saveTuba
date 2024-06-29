import React from "react";
import { FlatList, View, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next";
import { Header } from "../../../components/Grades/grades.styles";
import { BodyText } from "../../../components/body-text.component";
import { TitleText } from "../../../components/title-text.component";
import { SafeArea } from "../../../components/safe-area.component";

//This component is responsible for creating every chapter card in the selected Grade
//It is then rendered via ChaptersHandler.js

//@param gradeData is an array of chapters and their metadata. it is taken as a param from ChaptersHandler.js
function ChaptersComponent({ gradeData }) {
  const gradeNumber = useSelector(state => state.curriculum.grade)
  const nav = useNavigation();
  const { t } = useTranslation();

  const renderItem = ({ item }) => {
    return (
      <Chapter onPress={() => { nav.navigate(item.navigation); }}>
        <LinearGradient
          colors={[item.colorOne, item.colorTwo]}
          start={{ x: 0, y: 0, }}
          end={{ x: 1, y: 1, }}
          style={styles.gradientStyle}
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
        <Image 
          style={styles.chapterIcon}
          source={{uri: item.iconDownloadURL}}
        />
      </Chapter>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Header
          title={`${t("common:grade")} ${gradeNumber.match(/\d+/g)}`}
          back="Grades"
          reduxParam="grade"
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

const styles = StyleSheet.create({
  chapterIcon: {
    height: 100,
    aspectRatio: 1,
    position: "absolute",
    right: 25,
    top: -20,
  },
  gradientStyle: {
    height: 150,
    padding: 20,
    borderRadius: 30,
  }
})

export default ChaptersComponent;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Chapter = styled.TouchableOpacity`
  width: 90%;
  margin-top: 20px;
  margin-bottom: 10px;
  align-self: center;
`;