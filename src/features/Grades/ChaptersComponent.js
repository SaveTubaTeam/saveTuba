import React from "react";
import { FlatList, View, Image } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

import { Header } from "../../components/Grades/grades.styles";
import { BodyText } from "../../components/body-text.component";
import { TitleText } from "../../components/title-text.component";
import { SafeArea } from "../../components/safe-area.component";

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

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

const Icon = styled.Image`
  height: 100px;
  width: undefined;
  aspect-ratio: 1;

  position: absolute;
  right: 30px;
  top: -20px;
`;

function ChaptersComponent({ selectedGrade, navigation }) {
  const nav = useNavigation();
  const renderItem = ({ item }) => {
    // keep the item there
    return (
      <Chapter
        onPress={() => {
          nav.navigate(item.navigation);
        }}
      >
        <LinearGradient
          colors={[item.colorOne, item.colorTwo]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={{
            height: 150,
            padding: 20,
            borderRadius: 40,
          }}
        >
          <View style={{ position: "absolute", left: 30, bottom: 30 }}>
            <BodyText align="left" size="body" color="secondary">
              {item.title}
            </BodyText>
            <TitleText align="left" size="subtitle" color="secondary">
              {item.name}
            </TitleText>
          </View>
        </LinearGradient>
        <Icon source={item.icon} />
      </Chapter>
    );
  };

  return (
    <SafeArea>
      <Container>
        <Header title="Chapters" back="Grades" navigation={navigation} />
        <FlatList
          style={{ width: "100%" }}
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
