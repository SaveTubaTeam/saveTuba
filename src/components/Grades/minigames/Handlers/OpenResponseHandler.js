import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-paper";

import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { ImageBg } from "../../grades.styles";

import { getChapterData, getLessonData, getGradeData } from "../../../../features/Grades/Handlers/Database.js";
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal";

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const ImagePrompt = ({ questions, imageMap }) => {
  const [currentPrompt, setPrompt] = useState(0);
  //const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const navigation = useNavigation();

  console.log("QW:", questions);

  //modal popup for when the user doesn't type anything
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
                {`hmmmm... it seems you haven't submitted anything\n`}
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
              onPress={() => setVisible(!visible)}
            >
              {/* marked for translation */}
              <BodyText size="subtitle" color="secondary">
                Try Again
              </BodyText>
            </TouchableOpacity>
          </ModalContainer>
        </View>
      </Modal>
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            padding: 20,
            alignItems: "center",
            backgroundColor: "white",
            marginTop: 20,
            borderRadius: 30,
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 20,
              marginBottom: 10,
              overflow: "hidden",
            }}
          >
            <ImageBg
              source={{uri: imageMap[questions.prompts[currentPrompt].image]}}
              resizeMode="cover"
            ></ImageBg>
          </View>
          <TitleText size="subtitle">
            {questions.prompts[currentPrompt].text}
          </TitleText>
        </View>

        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
            height: 250,
            borderRadius: 30,
            width: "100%",
            height: 240,
            backgroundColor: "white",
            borderRadius: 30,
            flex: 1,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 20,
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontFamily: "BalsamiqSans_400Regular",
              color: "#748816",
              fontSize: 18,
              flexShrink: 1,
            }}
            onChangeText={setValue}
            placeholder={questions.prompts[currentPrompt].placeholder}
            placeholderTextColor={"#D5DBB9"}
            multiline={true}
            value={value}
          />
          <Button
            style={{
              width: "80%",
              height: 40,
              backgroundColor: "#748816",
              alignSelf: "center",
              borderRadius: 20,
            }}
            onPress={() => {
              if(value === '') {
                setVisible(!visible)
              } else {
                setCompletionModalVisible(!completionModalVisible);
              }

              setValue("");
              if (currentPrompt < questions.numberOfPrompts - 1) {
                setPrompt(currentPrompt + 1);
              }
            }}
          >
            {/* marked for translation */}
            <BodyText color="secondary">Submit</BodyText>
          </Button>
        </View>
      </View>

      <Modko visible={visible} />

            {/* marked for translation */}
      <CompletionModal 
        visible={completionModalVisible}
        score={-1}
        prompt={"Your response has been submitted. Good job!\nGo back to the lesson to continue learning."}
      >

      </CompletionModal>
    </ScrollView>
  );
};

const OpenResponseHandler = ({ questionSet, imageMap }) => {
  // getLessonData();
  // const navigation = useNavigation();
  // console.log(navigation);
  
  return (
    <View style={{ flex: 1 }}>
      <ImageBg
        source={{uri: imageMap["assets/promptBackground.jpg"]}} //hardcoded background
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "90%",
          }}
        >
          <ImagePrompt questions={questionSet} imageMap={imageMap} />
        </View>
      </ImageBg>
    </View>
  );
};
/* 
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
}); */

export default OpenResponseHandler;
