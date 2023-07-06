import { FlatList, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import React, { useState } from "react";
import { connect } from "react-redux";

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

function LessonsComponent({ lessonData, selectedChapter, navigation }) {
  // console.log("Lessons Comp. Grade", selectedGrade);
  const nav = useNavigation();
  const { t } = useTranslation();
  // console.log("LD: ", lessonData[0][lessonData[0].length-1].title);
  
  const [metaData, setMetaData] = useState("");

  const renderItem = ({ item }) => {
    if(typeof item === Array){
      console.log("ITEM: ", item[0]);
      
    }else{
      console.log("NOT ARR: ", typeof item,"\n", item.toString(), "\n_________________");
    }
    // setMetaData(
    //   {
    //     title: item[(item.length-1)].title,
    //     thumbnail: item[(item.length-1)].thumbnail,
    //     backgroundColor: item[(item.length-1)].backgroundColor
    //   }
    // );

    return item.title ==
      metaData.title ? (
      <CurrentLesson
        onPress={() => {
          nav.navigate(metaData.navigation);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: metaData.backgroundColor,
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
              {metaData.title}
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
                nav.navigate(metaData.navigation);
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
            source={metaData.thumbnail}
          />
        </View>
      </CurrentLesson>
    ) : (
      <Lesson
        onPress={() => {
          nav.navigate(metaData.navigation);
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
            source={metaData.thumbnail}
          />
          <View
            style={{
              width: "72%",
              padding: 10,
            }}
          >
            <TitleText align="left" size="mid" color="primary">
              {metaData.title}
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
          data={lessonData}
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