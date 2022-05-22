import React, { useEffect, useState } from "react";
import { View, FlatList, Modal, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";
import { BodyText } from "../../components/body-text.component";
import { Spacer } from "../../components/spacer.component";
import {
  Container,
  Summary,
  Mastery,
  Adventure,
  ImageBg,
} from "../../components/Levels/levels.styles";

import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { LessonOne } from "./levelOne/lessonOne/LessonOne";
import { LessonTwo } from "./levelOne/lessonTwo/LessonTwo";
import { LessonThree } from "./levelOne/lessonThree/LessonThree";
import { LessonFour } from "./levelOne/lessonFour/LessonFour";

// Depending on the minigame selected will navigate to the game
// Might be able to make it more dynamic by using obj.title as route name as well **Needs to be worked in lessonHandler component
function getLinkToScreen(selectedItem, navigation) {
  if (selectedItem.map((obj) => obj.title) == "Crossword") {
    navigation.navigate("Crossword", {
      data: selectedItem.map((obj) => obj.image),
    });
  } else if (selectedItem.map((obj) => obj.title) == "Multiple Choice") {
    navigation.navigate("MultipleChoice", {
      data: "./TestData.json",
    });
  }
}

function LessonComponent(props) {
  const [selectedItem, setSelectedItem] = useState([
    { title: null, description: null, key: null },
  ]);
  const { currentUser, navigation, route } = props;

  // function and input to select lesson data
  const { level } = route.params;
  const [selectedLevel, setSelectedLevel] = useState(null);
  useEffect(() => {
    switch (level) {
      case 1:
        setSelectedLevel(LessonOne);
        break;
      case 2:
        setSelectedLevel(LessonTwo);
        break;
      case 3:
        setSelectedLevel(LessonThree);
        break;
      case 4:
        setSelectedLevel(LessonFour);
        break;
      default:
        setSelectedLevel(null);
        break;
    }
  }, []);

  // Sets the selectedItem -- may not be needed
  const handleOnSelectedItem = (title, key, description) => {
    setSelectedItem([{ title: title, key: key, description: description }]);
  };
  // function thats called when modal is closed to the selected minigame to null
  const handeOnCloseModal = () => {
    setSelectedItem(null);
  };

  // Renders the minigame cubes seen as crossword, multiple choice etc...
  const renderItem = ({ item, navigation }) => {
    // if (item.key == selectedItem) {
    const title = item.title;
    const description = item.description;
    const key = item.key; // Error/Warning about items not having Key not sure how to fix

    return (
      <View
        style={{
          height: 80,
          width: "46%",
          margin: 5,
        }}
      >
        <Adventure
          style={{ width: "100%", height: "100%" }}
          onPress={() => handleOnSelectedItem(title, key, description)}
        >
          <ImageBg
            source={item.image}
            imageStyle={{ borderRadius: 16 }}
            resizeMode="cover"
          >
            <TitleText size="subtitle" color="secondary">
              {item.title}
            </TitleText>
          </ImageBg>
        </Adventure>
      </View>
    );
  };

  // Renders the modal dyanimcally depending on the selectedItem
  function RenderModal(props) {
    const { selectedItem, onClose } = props;
    const navigation = useNavigation();
    // Checks if the minigame is a valid game, i.e. did we setup the data correctly (not robust)
    const [modalVisible, setModalVisible] = useState(() => {
      return selectedItem[0].description != null;
    });

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          onClose;
        }}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedItem.map((obj) => (
              // eslint-disable-next-line react/jsx-key
              <View>
                <TitleText size="h4">{obj.title}</TitleText>
                <TitleText size="body">{obj.description}</TitleText>
              </View>
            ))}
            <Button // Start minigame button
              onPress={() => {
                onClose;
                setModalVisible(!modalVisible);
                getLinkToScreen(selectedItem, navigation);
              }}
            >
              <BodyText color="secondary">Start</BodyText>
            </Button>
            <Button // Back Button
              onPress={() => {
                onClose;
                setModalVisible(!modalVisible);
              }}
            >
              <BodyText color="secondary">Back</BodyText>
            </Button>
          </View>
        </View>
      </Modal>
    );
  }

  // HORRIFIC FIX TO selectedLesson being NULL AT START
  if (selectedLevel == null) {
    return <View></View>;
  }

  return (
    <Container>
      <FlatList // The flatlist used to load minigames and their data.
        data={selectedLevel.minigames}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.key}
        key={(item) => item.key}
        style={{ padding: 0, paddingLeft: 0, paddingRight: 0 }}
        // putting everything before and after the flatlist
        // in header and footer fixes the nested virtualized
        // lists error
        ListHeaderComponent={
          <>
            <TitleText size="h4" color="primary">
              {selectedLevel.title}
            </TitleText>
            <Spacer size="small" />
            <BodyText size="subtitle">{selectedLevel.summary}</BodyText>
            <Summary
              onPress={() => {
                navigation.navigate(selectedLevel.summaryComponent.route);
              }}
            >
              <BodyText weight="bold" color="primary" size="subtitle">
                Full Summary
              </BodyText>
            </Summary>
            <Spacer size="large" />
            <TitleText>Adventures</TitleText>
            <Spacer size="small" />
          </>
        }
        ListHeaderComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        ListFooterComponent={
          <>
            <Mastery
              onPress={() => {
                navigation.navigate(selectedLevel.masteryComponent.route);
              }}
            >
              <BodyText weight="bold" size="subtitle" color="secondary">
                Mastery
              </BodyText>
            </Mastery>

            <RenderModal
              isVisible={selectedItem}
              selectedItem={selectedItem}
              onClose={handeOnCloseModal}
              navigation={navigation}
              key={selectedLevel.info.key}
            />
          </>
        }
        ListFooterComponentStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </Container>
  );
}

// Boiler plate to connect redux/firebase to Lesson Component
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(LessonComponent);

const styles = StyleSheet.create({
  wideButton: {
    backgroundColor: "#748816",
    height: 80,
    width: 310,
    borderRadius: 5,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  container: {
    paddingTop: 20,
    borderRadius: 20,
    backgroundColor: "#F6FEDB",
    padding: 0,
    alignItems: "center",
    height: "60%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "80%",
    height: "50%",
    paddingTop: "20%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  width: 50%;
  align-items: center;
`;
