import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  ScrollView,
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
import { MasteryFlex } from "../../../components/mastery-flex.component";
import {
  Adventure,
  Header,
  ImageBg,
  Mastery,
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

const MasteryStyle = styled.View`
  height: 100%;
  width: 100%;
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
  imageMap,
  lessonData,
  selectedChapter,
  selectedLesson,
  navigation,
}) {

  const nav = useNavigation();
  const { t } = useTranslation();

  // console.log("IT: ", lessonData);
  const renderItem = ({ item }) => {
    return (
      <>
        <Adventure
          onPress={() => {
            nav.navigate(item["navigation"]);
          }}
        >
          <View
            style={{
              backgroundColor: item["backgroundColor"],
              height: 150,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: "70%",
                aspectRatio: 1,
                width: undefined,
                marginBottom: 5,
              }}
              source={{ uri: imageMap[item["icon"]] }}
            ></Image>
            <TitleText size="subtitle" color="secondary">
              {item["navigation"]}
            </TitleText>
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
          back={"Chapter"}
          navigation={navigation}
        />
        <Tower
          source={
            { uri: imageMap[lessonData.get("thumbnail")] }
          }
        />
        <Head>
          <TitleText size="title">
            {
              lessonData.get("title")
            }
          </TitleText>
          <Spacer size="large" />

          <Progress />
        </Head>

        <FlatList // The flatlist used to load minigames and their data.
          // Why are both needed in this Flatlist
          data={
            // throwing weird undefined is not a function error
            // lessonDataCards[0]
            lessonData.get("minigames")
            // && Object.values(lessonData.get("minigames"))
          }
          numColumns={2}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
          renderItem={renderItem}
          contentContainerStyle={{
            width: "85%",
            alignSelf: "center",
          }}
          style={{
            marginBottom: 20,
            width: "100%",
          }}
          ListFooterComponentStyle={{
            alignItems: "center",
          }}
          ListFooterComponent={

            <MasteryFlex lessonData={lessonData} selectedChapter={selectedChapter} selectedLesson={selectedLesson} navigation={navigation} />


            // Previous implementation
            // Implemented by Hayden to show two different mastery cards. Do not delete
            // <FlatList
            //   data={
            //     selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
            //       .mastery &&
            //     Object.values(
            //       selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
            //         .mastery
            //     )
            //   }
            //   numColumns={1}
            //   keyExtractor={(item, index) => index}
            //   key={(item, index) => index}
            //   renderItem={renderItem}
            //   contentContainerStyle={{
            //     width: "85%",
            //     alignSelf: "center",
            //   }}
            //   style={{
            //     marginBottom: 20,
            //     width: "100%",
            //   }}
            //   ListFooterComponentStyle={{
            //     alignItems: "center",
            //   }}
            //   ListFooterComponent={
            //     <TouchableOpacity
            //       style={{
            //         width: "93%",
            //         height: 150,
            //         marginTop: 10,
            //         borderRadius: 20,
            //         justifyContent: "center",
            //         overflow: "hidden",
            //       }}
            //       onPress={() => nav.navigate("Mastery")}
            //     >
            //       <ImageBg
            //         style={{
            //           borderRadius: 20,
            //         }}
            //         source={require("../../../../assets/mastery.png")}
            //       >
            //         <TitleText weight="bold" size="h5" color="quaternary">
            //           {t("common:mastery")}
            //         </TitleText>
            //       </ImageBg>
            //     </TouchableOpacity>
            //   }
            // />
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