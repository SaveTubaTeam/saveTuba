import { FlatList, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import { connect } from "react-redux";
import React from "react";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Header } from "../../../components/Grades/grades.styles";
import { Spacer } from "../../../components/spacer.component";
import { useTranslation } from "react-i18next";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const Lesson = styled.TouchableOpacity`
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
  background-color: #fff;
  border-radius: 20px;
  height: 100px;
`;

const CurrentLesson = styled.TouchableOpacity`
  width: 90%;
  margin-top: 10px;
  align-self: center;
  background-color: #fff;
  border-radius: 20px;
  height: 200px;
  margin-bottom: 10px;
`;

function LessonsComponent({ lessonData, navigation }) {
  console.log("Lessons Comp. Grade", selectedGrade);
  const nav = useNavigation();
  const { t } = useTranslation();
  console.log("LD: ", lessonData);

  const renderItem = ({ item }) => {
    return item.title ==
      selectedGrade[selectedChapter].lessons[currentLesson].title ? (
      <CurrentLesson
        onPress={() => {
          nav.navigate(item.navigation);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
          }}
        >
          <View
            style={{
              width: "70%",
              padding: 20,
              height: 200,
              zIndex: 1000,
            }}
          >
            <TitleText align="left" size="subtitle" color="secondary">
              {item.title}
            </TitleText>
            <Spacer size="small" />
            <BodyText align="left" color="secondary">
              0/5
            </BodyText>
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                paddingTop: 7,
                paddingBottom: 7,
                paddingLeft: 15,
                paddingRight: 20,
                backgroundColor: "#fff",
                borderRadius: 20,
                borderColor: "#fff",
                borderWidth: 2,
                flexDirection: "row",
              }}
              onPress={() => {
                nav.navigate(item.navigation);
              }}
            >
              <Ionicons
                name="md-play"
                size={16}
                color="#748816"
                style={{ paddingRight: 5, paddingTop: 1 }}
              />
              <BodyText align="left" color="primary">
                {t("common:start")}
              </BodyText>
            </TouchableOpacity>
          </View>
          <Image
            style={{
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              position: "absolute",
              right: 0,
              bottom: 0,
              height: 200,
              width: undefined,
              aspectRatio: 1,
            }}
            source={item.thumbnail}
          />
        </View>
      </CurrentLesson>
    ) : (
      <Lesson
        onPress={() => {
          nav.navigate(item.navigation);
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              height: 100,
              width: 100,
            }}
            source={item.thumbnail}
          />
          <View
            style={{
              width: "72%",
              padding: 10,
            }}
          >
            <TitleText align="left" size="mid" color="primary">
              {item.title}
            </TitleText>
            <Spacer size="small" />
            <BodyText align="left">5/5</BodyText>
          </View>
        </View>
      </Lesson>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Header
          title={t("common:lessons")}
          back="Grade"
          navigation={navigation}
        />
        <FlatList
          style={{ width: "100%" }}
          data={selectedGrade.chapters[selectedChapter].lessons}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
        />
      </Container>
    </SafeArea>
  );
}
// Boiler plate to connect redux/firebase to Lesson Component
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(LessonsComponent);
