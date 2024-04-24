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

import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { SafeArea } from "../../../safe-area.component";
import { ImageBg } from "../../grades.styles";
import { Spacer } from "../../../spacer.component";

import LevelSystem from "../../../../features/Account/LevelSystem/LevelSystem";

const Stack = createNativeStackNavigator();

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const Category = styled.TouchableOpacity`
  justify-content: center;
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
`;

const Prompt = styled.View`
  width: 80%;
  background-color: #fff;
  border-radius: 30px;
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
  const [levelSystemVisible, setLevelSystemVisible] = useState(false);
  const [correct, setCorrect] = useState(false);

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const [currentOption, setCurrentOption] = useState(data.options[count].title);
  const [currentAnswer, setCurrentAnswer] = useState(data.options[count].name);

  const navigation = useNavigation();

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
                  ? "That's right! Good job ✨"
                  : "Incorrect! Better luck next time 🍀"}
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
                if (count < data.num && data.options[count + 1] != null) {
                  setVisible(!visible);
                  setCurrentOption(data.options[count + 1].title);
                  setCurrentAnswer(data.options[count + 1].name);
                  setCount(count + 1);
                } else {
                  setVisible(!visible);
                  setLevelSystemVisible(!levelSystemVisible); //setting LevelSystem modal visible
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

  //TODO: categories should maybe show both images and text if applicable.
  const renderCategories = ({ item }) => { //here the item is the entire sorting minigame document from the db
    return (
      <>
        <Category
          activeOpacity="0.8"
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
          {item.image ? (
            <Image source={{uri: imageMap[item.image]}} style={{ width: 100, height: 100 }} /> //accessing uri via imageMap
          ) : (
            <BodyText size="subtitle">{item.name}</BodyText>
          )}
        </Category>
      </>
    );
  }; //end of renderCategories

  return (
    <>
      <ImageBg source={{uri: imageMap[data.imageBg]}}>
        <Container>
          <Prompt>
            <BodyText size="subtitle">{data.prompt}</BodyText>
          </Prompt>

          <Prompt>
            <TitleText>{currentOption}</TitleText>
          </Prompt>

          <FlatList
            scrollEnabled={false}
            data={data.categories}
            keyExtractor={(item, index) => index}
            key={(item, index) => index}
            renderItem={renderCategories}
            contentContainerStyle={{
              alignItems: "center",
            }}
            numColumns={2}
          />
          <Modko visible={false} />

            {/* marked for translation */}
          <LevelSystem visible={levelSystemVisible} score={score} 
          prompt={'Good job completing this sorting exercise!\nGo back to the lesson to continue learning.'}>
          </LevelSystem>
        </Container>
        {/*}
        <Option style={{ opacity: visibleOne }}>
          <TitleText>{data.content[1].first}</TitleText>
          {data.content[1].firstImage && (
            <Img resizeMode="contain" source={data.content[1].firstImage} />
          )}
        </Option>
        <Option style={{ opacity: visibleTwo }}>
          <TitleText>{data.content[1].second}</TitleText>
          {data.content[1].secondImage && (
            <Img resizeMode="contain" source={data.content[1].secondImage} />
          )}
        </Option>
        <Option style={{ opacity: visibleThree }}>
          <TitleText>{data.content[1].third}</TitleText>
          {data.content[1].thirdImage && (
            <Img resizeMode="contain" source={data.content[1].thirdImage} />
          )}
          </Option>*/}
      </ImageBg>
    </>
  );
};

//entry point
const SortingHandler = ({ data, navigation, imageMap }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start data={data} imageMap={imageMap} />}
      </Stack.Screen>
      {/* <Stack.Screen
        name="SecondScreen"
        options={{ headerShown: false }}
        component={LevelSystem}
      ></Stack.Screen> */}
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

/* 
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
}); */

export default SortingHandler;