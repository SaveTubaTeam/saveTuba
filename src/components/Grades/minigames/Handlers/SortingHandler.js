import React, { useState } from "react";
import {
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { SafeArea } from "../../../safe-area.component";
import { ImageBg } from "../../grades.styles";
import { Spacer } from "../../../spacer.component";

import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal";

const Stack = createNativeStackNavigator();

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

const SubmitButton = styled.TouchableOpacity`
  width: 100px;
  justify-content: center;
  height: 40px;
  background-color: #748816;
  align-self: center;
  border-radius: 20px;
`;

const Start = ({ data, imageMap }) => {
  // console.log("Data: ", imageMap);
  const [visible, setVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [correct, setCorrect] = useState(false);

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const [currentOption, setCurrentOption] = useState(data.options[count].title);
  const [currentAnswer, setCurrentAnswer] = useState(data.options[count].name);

  const navigation = useNavigation();
  const { t } = useTranslation();

  const Modko = () => {
    return (
      <Modal transparent animationType="slide" visible={visible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalContainer>
            <View>
              {/* marked for translation */}
              <BodyText size="subtitle">
                {correct == true
                  ? t("minigames:sortingcorrect")
                  : t("minigames:sortingincorrect")}
              </BodyText>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#748816",
                borderRadius: 10,
                marginTop: 10,
                paddingTop: 5,
                paddingBottom: 5,
              }}
              onPress={() => {
                if (count < data.options.length && data.options[count + 1] != null) {
                  setVisible(!visible);
                  setCurrentOption(data.options[count + 1].title);
                  setCurrentAnswer(data.options[count + 1].name);
                  setCount(count + 1);
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
          <Image source={{uri: imageMap[item.image]}} style={{ width: 100, height: 100, alignSelf: 'center' }} />
        </>
    )} else {
      content = (
      <BodyText size="subtitle">{item.name}</BodyText>
    )}
    
    return (
      <>
        <Category
          onPress={() => {
            if (item.name == currentAnswer) { //accessing item's name field via item.name
              setCorrect(true);
              setScore(score + 1);
            } else {
              setCorrect(false);
            }
            setVisible(true);
          }}
        >
          {content}
        </Category>
      </>
    );
  }; //end of renderCategories

  return (
    <>
      <ImageBg source={require("../../../../../assets/lessonbg.png")}>
        <Container>

          {/* the overall prompt for this sorting exercise */}
          <Prompt>
            <BodyText size="subtitle">{data.prompt}</BodyText>
          </Prompt>

          {/* current option */}
          <Prompt>
            <TitleText>{currentOption}</TitleText>
          </Prompt>

          {/* This flatlist renders all of the possible categories */}
          <FlatList
            scrollEnabled={false}
            data={data.categories}
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

            {/* marked for translation */}
          <CompletionModal visible={completionModalVisible} score={score} 
          prompt={t("minigames:sortingprompt")}>
          </CompletionModal>
        </Container>
      </ImageBg>
    </>
  );
};

//entry point
//@param objectData the sorting object passed in from IndividualLessonHandler
const SortingHandler = ({ objectData, navigation, imageMap }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start data={objectData} imageMap={imageMap} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};


const AdventureImages = {
  crossword: "assets/crosswordbg.jpg",
  puzzle: "assets/puzzlebg.jpg",
  matching: "assets/matchingbg.jpg",
  multiplechoice: "assets/mcqbg.jpg",
};

const SortingImages = {
  bg: [
    {
      lvl_1_les_1: "assets/beach.jpg",
      lvl_1_les_2: "assets/rrr.jpg",
      lvl_1_les_4: "assets/lessonbg.png",
      lvl_2_les_1: "assets/waste.jpg",
      lvl_2_les_2: "assets/farm.jpeg",
    },
  ],
  lvl_1_les_1: [
    {
      firstImage: "assets/wave.jpg",
      secondImage: "assets/animals.png",
      thirdImage: "assets/pots.png",
    },
  ],
  lvl_2_les_2: [
    {
      firstImage: "assets/dairy.png",
      secondImage: "assets/fruit.png",
      thirdImage: "assets/meat.png",
    },
  ],
};

const QuizImages = {
  bg: [
    {
      lvl_1_les_1: "assets/nat.jpg",
      lvl_1_les_2: "assets/habitat.jpg",
      lvl_2_les_1: "assets/path.jpg",
      lvl_2_les_2: "assets/mountains.jpeg",
    },
  ],
};



const TestImages = {
  solar_panel_1: "assets/solar-panel.jpg",
  bikingPic: "assets/desc_ridingbike.jpg",
  faucetPic: "assets/desc_turnWaterOff.jpg",
  recyclingPic: "assets/desc_recycling.png",
  lightsPic: "assets/desc_turningLight.jpg",
  
  lvl_1_les_2_img_1: "assets/LampAndLights.jpg",
  lvl_1_les_2_img_2: "assets/reusedTrash.jpg",
  lvl_1_les_2_img_3: "assets/recyclingDescription.png",
  lvl_1_les_2_img_4: "assets/imageResponseGame/Level_1_Lesson_2/TVthing.jpg",
  
  lvl_2_les_1_img_1: "assets/6vnr_756t_210818.jpg",
  lvl_2_les_1_img_2: "assets/29067.jpg",
  lvl_2_les_1_img_3: "assets/7249661.jpg",
  lvl_2_les_1_img_4: "assets/Wavy_Eco-01_Single-01.jpg",
  
  lvl_2_les_2_img_1: "assets/farming1.jpg",
  lvl_2_les_2_img_2: "assets/planting.jpg",
  lvl_2_les_2_img_3: "assets/tractor.jpg",
  lvl_2_les_2_img_4: "assets/wateringplant.jpg",
};

export default SortingHandler;