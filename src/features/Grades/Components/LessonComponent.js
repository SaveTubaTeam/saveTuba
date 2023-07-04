import { MasteryFlex } from "../../../components/mastery-flex.component";
import { TitleText } from "../../../components/title-text.component";
import { SafeArea } from "../../../components/safe-area.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Adventure,
  Header,
  // Mastery,
  // ImageBg,
} from "../../../components/Grades/grades.styles";
import {
  View,
  Image,
  FlatList,
  // ScrollView,
  // TouchableOpacityBase,
  // TouchableOpacity,
} from "react-native";
// import { t } from "i18next";
// import mastery from "../../../components/Translations/languages/en/mastery";

const Container = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

// const MasteryStyle = styled.View`
//   height: 100%;
//   width: 100%;
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #cce882;
// `;

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
  console.log("Grade: ", selectedGrade, "\nChapter: ", selectedChapter, "\nLesson: ", selectedLesson);
  const nav = useNavigation();
  const { t } = useTranslation();

  // const [metaData, setMetaData] = useState();
  // const masteryData = () => {
  //   setMetaData(selectedGrade, selectedChapter, selectedLesson, navigation);
  // };
  // masteryData();

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
              style={{
                height: "70%",
                aspectRatio: 1,
                width: undefined,
                marginBottom: 5,
              }}
              source={item.icon}
            ></Image>
            <TitleText size="subtitle" color="secondary">
              {item.navigation}
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
          back={selectedGrade.chapters[selectedChapter].navigation}
          navigation={navigation}
        />
        <Tower
          source={
            selectedGrade.chapters[selectedChapter].lessons[selectedLesson].thumbnail
          }
        />
        <Head>
          <TitleText size="title">
            {
              selectedGrade.chapters[selectedChapter].lessons[selectedLesson].title
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

            <MasteryFlex data={[selectedGrade, selectedChapter, selectedLesson, navigation]} />

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
