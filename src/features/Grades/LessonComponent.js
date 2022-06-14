import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { SafeArea } from "../../components/safe-area.component";
import { TitleText } from "../../components/title-text.component";
import { BodyText } from "../../components/body-text.component";
import { Spacer } from "../../components/spacer.component";
import {
  Mastery,
  Adventure,
  ImageBg,
  Header,
} from "../../components/Grades/grades.styles";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #c5d9da;
`;

const Chunk = styled.View`
  margin-top: 5px;
  width: 30px;
  height: 10px;
  background-color: #748816;
  border: 1px solid white;
`;

const Head = styled.View`
  margin: 30px 0 30px 0;
  border-radius: 10px;
  padding: 50px 30px 20px 30px;
  border: 1px solid #748816;
  background-color: #fff8e7;
`;

const Tower = styled.Image`
  position: absolute;
  top: 50px;
  z-index: 100;
  height: 80px;
  width: 80px;
`;

const ProgContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

function LessonComponent({
  selectedGrade,
  selectedChapter,
  selectedLesson,
  navigation,
}) {
  const nav = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <>
        <Adventure
          onPress={() => {
            nav.navigate(item.navigation);
          }}
        >
          <ImageBg
            source={item.image}
            imageStyle={{ borderRadius: 100 }}
            resizeMode="cover"
          >
            <TitleText size="subtitle" color="secondary">
              {item.title}
            </TitleText>
          </ImageBg>
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
          title="Lesson"
          back={selectedGrade.chapters[selectedChapter].navigation}
          navigation={navigation}
        />
        <Tower source={require("../../../assets/solar-system.png")} />
        <Head>
          <TitleText size="h4" color="primary">
            {
              selectedGrade.chapters[selectedChapter].lessons[selectedLesson]
                .title
            }
          </TitleText>
          <Spacer size="small" />

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
          renderItem={renderItem}
        />

        <Mastery
          onPress={() => {
            navigation.navigate(
              selectedGrade.chapters[selectedChapter].lessons
            );
          }}
        >
          <BodyText weight="bold" size="subtitle" color="secondary">
            Мастерство
            {/* Mastery */}
          </BodyText>
        </Mastery>
      </Container>
    </SafeArea>
  );
}

// Boiler plate to connect redux/firebase to Lesson Component
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(LessonComponent);
