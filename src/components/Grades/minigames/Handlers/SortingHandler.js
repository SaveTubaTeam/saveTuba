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

const SecondScreen = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ImageBg source={data.imageBg}>
      <Container>
        <Prompt>
          <TitleText>
            Good job! Go back to the lesson to continue learning!
          </TitleText>
          <Spacer size="large" />
          <SubmitButton onPress={() => navigation.navigate("Lesson")}>
            <BodyText color="secondary">Back</BodyText>
          </SubmitButton>
        </Prompt>
      </Container>
    </ImageBg>
  );
};

const Start = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const [correct, setCorrect] = useState(false);

  const [count, setCount] = useState(0);
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
                if (count != data.num) {
                  setVisible(!visible);
                  setCount(count + 1);
                  setCurrentOption(data.options[count + 1].title);
                  setCurrentAnswer(data.options[count + 1].name);
                } else {
                  setVisible(!visible);
                  navigation.navigate("SecondScreen");
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
  };

  const renderCategories = ({ item }) => {
    return (
      <>
        <Category
          activeOpacity="0.8"
          onPress={() => {
            if (item.name == currentAnswer) {
              setCorrect(true);
            } else {
              setCorrect(false);
            }
            setVisible(true);
          }}
        >
          {item.image ? (
            <Image source={item.image} style={{ width: 100, height: 100 }} />
          ) : (
            <BodyText size="subtitle">{item.name}</BodyText>
          )}
        </Category>
      </>
    );
  };

  return (
    <>
      <ImageBg source={data.imageBg}>
        <Container>
          <Prompt>
            <BodyText size="subtitle">{data.prompt}</BodyText>
          </Prompt>

          <Prompt>
            <TitleText>{currentOption}</TitleText>
          </Prompt>

          <FlatList // The flatlist used to load minigames and their data.
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

const SortingHandler = ({ data, navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => <Start data={data} />}
      </Stack.Screen>
      <Stack.Screen name="SecondScreen" options={{ headerShown: false }}>
        {() => <SecondScreen data={data} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(SortingHandler);
