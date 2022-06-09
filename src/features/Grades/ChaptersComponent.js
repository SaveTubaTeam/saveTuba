import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { TitleText } from "../../components/title-text.component";
import { SafeArea } from "../../components/safe-area.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #c5d9da;
`;

const Chapter = styled.TouchableOpacity`
  padding: 20px;
  border: 2px solid green;
`;

function ChaptersComponent({ selectedGrade }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    // keep the item there
    return (
      <Chapter
        onPress={() => {
          navigation.navigate(item.navigation);
        }}
      >
        <TitleText size="subtitle" color="secondary">
          {item.title}
        </TitleText>
      </Chapter>
    );
  };

  return (
    <SafeArea>
      <Container>
        <FlatList // The flatlist used to load minigames and their data.
          data={selectedGrade.chapters}
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

export default connect(mapStateToProps, null)(ChaptersComponent);
