import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import { Spacer } from "../../../spacer.component";

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const Prompt = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 60%;
  height: 40px;
  background-color: #748816;
  align-self: center;
  justify-content: center;
  border-radius: 20px;
`;

const Item = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
`;

//DATA ENTRY POINT
const ReorderHandler = ({
  info,
  selectedGrade,
  selectedChapter,
  selectedLesson,
}) => {
  
  //console.log("Data In: ", info.data);
  info.data.sort(function (a, b) {return Math.random() - 0.5;}); //shuffling data (this shuffle happens once upon initial render) https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize

  const [data, setData] = useState(info.data);
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [score, setScore] = useState(0);
  const navigation = useNavigation();

  //Modko is shorthand for ModalComponent. Here we render the modal upon minigame completion via "visible" state
  const Modko = () => {
    /*console.log(score);
    if(score == 7) {
      console.log("CORRECT ORDER");
    } else {
      console.log("INCORRECT ORDER");
    }*/ //NOTE: score is only updated after onPress().
    return (
      <Modal transparent animationType="slide" visible={visible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ModalContainer>
            <View>
              <BodyText size="subtitle">
                Score: {`${score}/${data.length}\n`}
                Your response was submitted! Good job ✨
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
              onPress={() => navigation.navigate("Lesson")}
            >
              <BodyText size="subtitle" color="secondary">
                Back to the lesson
              </BodyText>
            </TouchableOpacity>
          </ModalContainer>
        </View>
      </Modal>
    );
  }; //end of Modko

  //@param item the item to be rendered. renderItem() is called iteratively in the DraggableFlatList
  //@param drag triggers drag animation upon item press. please see DraggableFlatList documentation
  //@param isActive is true during item press
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <>
        <ScaleDecorator>
        <Item
          activeOpacity={1}
          style={{ backgroundColor: isActive ? item.active : item.dormant }}
          onPressIn={drag}
          disabled={isActive}
        >
          <BodyText color="secondary" size="subtitle">
            {item.text}
          </BodyText>
        </Item>
        </ScaleDecorator>
      </>
    );
  };

  //DraggableFlatlist is used to interactively order the list: https://www.npmjs.com/package/react-native-draggable-flatlist?activeTab=readme
  //Current version 4.0.0 heavily dependent on two packages: (package versions can be unit tested here: https://snack.expo.dev/@computerjazz/draggable-flatlist-examples)
  //react-native-reanimated
  //react-native-gesture-handler
  return (
    <>
      <Container>
        <DraggableFlatList
          scrollEnabled={false}
          data={data}
          style={{ width: "90%" }}
          onDragEnd={({ data }) => {
            setData(data);
            console.log("\nCurrent List:" + data.map((item) => `\n${item.index} ${item.text}`)); //logging current order of list
          }}
          keyExtractor={(item) => item.index + 1} //fixed bug where any key set to 0 would be undraggable.
          renderItem={renderItem}
          ListHeaderComponentStyle={{ alignItems: "center", paddingTop: 10 }}
          ListHeaderComponent={
            <Prompt>
              <TitleText size="subtitle">{info.prompt}</TitleText>
              <Spacer size="medium" />
              <TitleText size="caption">
                Hint: Sort the items from top (first) to bottom (last).
              </TitleText>
            </Prompt>
          }
          ListFooterComponentStyle={{ marginTop: 10 }}
          ListFooterComponent={
            <SubmitButton onPress={() => {
                //iterating through list to check for correct order and update score.
                for(let i=0; i<Object.keys(data).length; i++) {
                  console.log("Index:", data[i].index, "Iteration i:", i);
                  if(data[i].index == i) {
                    setScore((prevScore) => prevScore + 1);
                  }
                }

                //setting visibility of modal to true;
                setVisible(!visible);
                }}>
              <BodyText color="secondary" size="subtitle">
                {t("common:submit")}
              </BodyText>
            </SubmitButton>
          }
        />
        <Modko visible={false} />
      </Container>
    </>
  );
};
/* 
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
}); */

export default ReorderHandler;