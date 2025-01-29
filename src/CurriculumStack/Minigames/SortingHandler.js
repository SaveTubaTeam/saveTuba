import React, { useState, useEffect } from "react";
import { View, Modal, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from "react-native";
import { Image } from "expo-image";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../styled-components/title-text.component";
import { BodyText } from "../../../body-text.component";
import { useDispatch } from "react-redux";
import { addActivity } from "../../../redux/slices/curriculumLocationSlice.js";
import CompletionModal from "../Modals/CompletionModal";

const Stack = createNativeStackNavigator();

const Start = ({ objectData, activityType }) => {
  const [visible, setVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [correct, setCorrect] = useState(false);

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const [optionsArray, setOptionsArray] = useState(objectData.options);
  const [currentOption, setCurrentOption] = useState(optionsArray[count].title);
  const [currentAnswer, setCurrentAnswer] = useState(optionsArray[count].name);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  //shuffling options upon initial render.
  useEffect(() => {
    dispatch(addActivity({ activity: activityType }));
    
    const shuffledOptions = [...objectData.options];
    shuffledOptions.sort(() => Math.random() - 0.5); // Shuffling the copy of the data array

    setOptionsArray(shuffledOptions);
    setCurrentOption(shuffledOptions[0].title);
    setCurrentAnswer(shuffledOptions[0].name);
  }, []);

  const Modko = () => {
    return (
      <Modal transparent animationType="slide" visible={visible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalContainer>
            <View>
              <BodyText size="subtitle">
                {correct == true
                  ? t("minigames:sortingcorrect")
                  : t("minigames:sortingincorrect")}
              </BodyText>
            </View>
            <TouchableOpacity
              style={styles.greenButtonModal}
              onPress={() => {
                if (count < optionsArray.length && optionsArray[count + 1] != null) {
                  setVisible(!visible);
                  setCurrentOption(optionsArray[count + 1].title);
                  setCurrentAnswer(optionsArray[count + 1].name);
                  setCount(prevCount => prevCount + 1);
                } else {
                  setVisible(!visible);
                  setCompletionModalVisible(!completionModalVisible);
                }
              }}
            >
              <BodyText size="subtitle" color="secondary">
                Next
              </BodyText>
            </TouchableOpacity>
          </ModalContainer>
        </View>
      </Modal>
    );
  }; //end of Modko

  const renderCategories = ({ item }) => { //here the item is the entire sorting minigame document from the db
    let content;
    if(item.image) {
      content = (
        <>
          <BodyText size="subtitle">{item.name}</BodyText>
          <Image 
            key={item.name}
            source={{ uri: item.imageDownloadURL }} 
            placeholder={item.imageBlurHash}
            style={{ width: 100, height: 100, alignSelf: 'center' }} 
          />
        </>
    )} else {
      content = (
      <BodyText size="subtitle">{item.name}</BodyText>
    )}
    
    return (
      <Category
        onPress={() => {
          if (item.name == currentAnswer) { //accessing item's name field via item.name
            setCorrect(true);
            setScore(prevScore => prevScore + 1);
          } else {
            setCorrect(false);
          }
          setVisible(true);
        }}
      >
        {content}
      </Category>
    );
  }; //end of renderCategories

  return (
    <ImageBackground 
      source={require("../../../../../assets/sortingbg.jpg")}
      style={styles.imageBackground}
      fadeDuration={0}
    >
      <Container>

        {/* the overall prompt for this sorting exercise */}
        <Prompt>
          <BodyText size="subtitle">{objectData.prompt}</BodyText>
        </Prompt>

        {/* current option */}
        <Prompt>
          <TitleText>{currentOption}</TitleText>
        </Prompt>

        {/* This flatlist renders all of the possible categories */}
        <FlatList
          scrollEnabled={false}
          data={objectData.categories}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
          renderItem={renderCategories}
          contentContainerStyle={{
            alignItems: "center"
          }}
          numColumns={2}
        />

        {/* shows user if they are correct/incorrect */}
        <Modko visible={false} />

        <CompletionModal 
          startCompletionProcess={completionModalVisible} 
          score={score} 
          prompt={t("minigames:sortingprompt")}
          totalPossibleScore={optionsArray.length}
        />
      </Container>
    </ImageBackground>
  );
};

//entry point
//@param objectData the sorting object passed in from IndividualLessonHandler
const SortingHandler = ({ objectData, activityType }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start objectData={objectData} activityType={activityType} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    paddingTop: 20
  },
  greenButtonModal: {
    backgroundColor: "#748816",
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
  }
})

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 40px
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const Category = styled.TouchableOpacity`
  width: 180px
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 5px;
  padding: 15px;
  border-radius: 10px;
`;

const Prompt = styled.View`
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

export default SortingHandler;