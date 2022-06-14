import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { SafeArea } from "../../components/safe-area.component";
import { Header } from "../../components/Grades/grades.styles";
import { TitleText } from "../../components/title-text.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #c5d9da;
`;

const Lesson = styled.TouchableOpacity`
  padding: 20px;
  border: 2px solid green;
`;

function LessonsComponent({ selectedGrade, selectedChapter, navigation }) {
  const nav = useNavigation();

  const renderItem = ({ item }) => {
    // keep the item there
    return (
      <Lesson
        onPress={() => {
          nav.navigate(item.navigation);
        }}
      >
        <TitleText size="subtitle" color="secondary">
          {item.title}
        </TitleText>
      </Lesson>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Header title="Lessons" back="Grade" navigation={navigation} />
        <FlatList // The flatlist used to load minigames and their data.
          data={selectedGrade.chapters[selectedChapter].lessons}
          renderItem={renderItem}
          key={(item) => item.key}
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
