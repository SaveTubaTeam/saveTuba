import React from "react";
import {
  View,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { SafeArea } from "../../../components/safe-area.component";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import {
  Mastery,
  Adventure,
  Header,
  ImageBg,
} from "../../../components/Grades/grades.styles";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Container = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Chunk = styled.View`
  margin-top: 5px;
  width: 30px;
  height: 10px;
  background-color: #748816;
  border: 1px solid white;
`;

const Head = styled.View`
  width: 80%;
  margin: 50px 0 20px 0;
  border-radius: 10px;
  padding: 40px 30px 40px 30px;
  background-color: #fff8e7;
  align-items: center;
`;

const Tower = styled.Image`
  position: absolute;
  top: 50px;
  z-index: 100;
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

const ProgContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

function LessonComponent({
  selectedGrade,
  selectedChapter,
  selectedLesson,
  navigation,
}) {
  const nav = useNavigation();
  const { t } = useTranslation();

  const renderItem = ({ item }) => {
    return (
      <>
        <Adventure
          onPress={() => {
            nav.navigate(item.navigation);
          }}
        >
          <View
            style={{
              backgroundColor: item.backgroundColor,
              height: 150,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: "70%", aspectRatio: 1, width: undefined }}
              source={item.icon}
            ></Image>
          </View>
        </Adventure>
      </>
    );
  };

  const Progress = () => {
    return (
      <>
        <ProgContainer>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Chunk />
            <Chunk />
            <Chunk />
            <Chunk />
            <Chunk />
          </View>
          <BodyText>5/5</BodyText>
        </ProgContainer>
      </>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Header
          title={t("common:lesson")}
          back={selectedGrade.chapters[selectedChapter].navigation}
          navigation={navigation}
        />
        <Tower
          source={
            selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
              .thumbnail
          }
        />
        <Head>
          <TitleText size="title">
            {
              selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                .title
            }
          </TitleText>
          <Spacer size="large" />

          <Progress />
        </Head>

        <FlatList // The flatlist used to load minigames and their data.
          data={
            selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
              .minigames &&
            Object.values(
              selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                .minigames
            )
          }
          numColumns={2}
          keyExtractor={(item) => item.key}
          key={(item) => item.key}
          renderItem={renderItem}
          contentContainerStyle={{
            width: "85%",
          }}
          style={{ marginBottom: 20 }}
          ListFooterComponentStyle={{ alignItems: "center" }}
          ListFooterComponent={
            <TouchableOpacity
              style={{
                width: "93%",
                height: 150,
                marginTop: 10,
                borderRadius: 20,
                justifyContent: "center",
                overflow: "hidden",
              }}
              onPress={() => navigation.navigate("Somewhere")}
            >
              <ImageBg
                style={{
                  borderRadius: 20,
                }}
                source={require("../../../../assets/mastery.png")}
              >
                <TitleText weight="bold" size="h5" color="quaternary">
                  Mastery
                </TitleText>
              </ImageBg>
            </TouchableOpacity>
          }
        />
      </Container>
    </SafeArea>
  );
}

// Boiler plate to connect redux/firebase to Lesson Component
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(LessonComponent);
