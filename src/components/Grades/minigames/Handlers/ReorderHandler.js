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
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #cce882;
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 70%;
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

REORDER_GRADIENTS = [
  {active: "#c58bda", dormant: "#b897e8"}, 
  {active: "#a9a2f2", dormant: "#9badf8"}, 
  {active: "#8db8fc", dormant: "#81c1fc"}, 
  {active: "#7ac9f9", dormant: "#77d1f5"}, 
  {active: "#7ad8ef", dormant: "#82dee8"},
  {active: "#b897e8", dormant: "#c58bda"}, 
  {active: "#9badf8", dormant: "#a9a2f2"}, 
  {active: "#81c1fc", dormant: "#8db8fc"}, 
  {active: "#77d1f5", dormant: "#7ac9f9"}, 
  {active: "#82dee8", dormant: "#7ad8ef"}];

//ENTRY POINT
//@param objectData the reorder object passed in from IndividualLessonHandler
const ReorderHandler = ({ objectData }) => {
  //console.log("Data In: ", objectData);
  const [originalArray, setOriginalArray] = useState(objectData.data);
  const [data, setData] = useState(objectData.data);

  useEffect(() => {
    setOriginalArray(objectData.data); //to prevent unwanted re-rendering I useState the originalArray. Is probably unnecessary.

    const shuffledData = [...data]; // Creating a copy of data array for safe mutation
    shuffledData.sort(() => Math.random() - 0.5); // Shuffling the copy of the data array

    const styledData = shuffledData.map((element, index) => ({ //mapping our gradient onto the shuffled array.
      ...element, //safe object mutation
      active: REORDER_GRADIENTS[index % 9].active,
      dormant: REORDER_GRADIENTS[index % 9].dormant
    }));

    setData(styledData); // Updating the data state with shuffled and mapped data
  }, []);

  const { t } = useTranslation();
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [score, setScore] = useState(0);
  const navigation = useNavigation();

  //@param item the item to be rendered. renderItem() is called iteratively in the DraggableFlatList
  //@param drag triggers drag animation upon item press. please see DraggableFlatList documentation
  //@param isActive is true during item press
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <>
        <ScaleDecorator>
        <Item
          key={item.text}
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
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#cce882" }}>
        <DraggableFlatList
          scrollEnabled={false}
          data={data}
          style={{ width: "90%" }}
          onDragEnd={({ data }) => {
            setData(data);
            console.log("\nCurrent List:" + data.map((item) => `\n${item.text}`)); //logging current order of list
          }}
          keyExtractor={(item) => item.text} //fixed bug where any key set to 0 would be undraggable.
          renderItem={renderItem}
          ListHeaderComponentStyle={{ alignItems: "center", paddingTop: 10, justifyContent: 'center' }}
          ListHeaderComponent={
            <Prompt>
              <TitleText size="subtitle">{objectData.prompt}</TitleText>
              <Spacer size="medium" />

              {/* marked for translation */}
              <TitleText size="caption">
                {t("minigames:reorderhint")}
              </TitleText>
            </Prompt>
          }
          ListFooterComponentStyle={{ marginTop: 10 }}
          ListFooterComponent={

            /* Submit Button */
            <SubmitButton onPress={() => {
                setScore(0);//resetting score
                //iterating through list to check for correct order and update score.
                data.forEach((item, index) => {
                  console.log(`\nUser: ${item.text}\nCorrect: ${originalArray[index].text}`);
                  if (item.text === originalArray[index].text) { setScore((prevScore) => prevScore + 1); }
                });

                //setting visibility of modal to true;
                setCompletionModalVisible(!completionModalVisible);
                }}>
              <BodyText color="secondary" size="subtitle">
                {t("common:submit")}
              </BodyText>
            </SubmitButton>
          }
        />

        {/* marked for translation */}
        <CompletionModal visible={completionModalVisible} score={score} 
        prompt={t("minigames:reorderprompt")}>
        </CompletionModal>

      </ScrollView>
    </>
  );
};

export default ReorderHandler;