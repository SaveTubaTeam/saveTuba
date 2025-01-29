import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import DragList from 'react-native-draglist';
import { useTranslation } from "react-i18next";
import { TitleText } from "../../styled-components/title-text.component";
import { BodyText } from "../../../body-text.component";
import { Spacer } from "../../styled-components/spacer.component";
import CompletionModal from "../Modals/CompletionModal";
import { useDispatch } from "react-redux";
import { addActivity } from "../../../redux/slices/curriculumLocationSlice.js";

const REORDER_GRADIENTS = [
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
const ReorderHandler = ({ objectData, activityType }) => {
  //console.log("Data In: ", objectData);
  const dispatch = useDispatch();
  const [data, setData] = useState(objectData.content);

  useEffect(() => {
    dispatch(addActivity({ activity: activityType }))

    const shuffledData = [...data]; // Creating a copy of data array for safe mutation
    shuffledData.sort(() => Math.random() - 0.5); // Shuffling the copy of the data array

    const styledData = shuffledData.map((element, index) => ({ //mapping our gradient onto the shuffled array.
      ...element, //safe object mutation
      active: REORDER_GRADIENTS[index % 10].active,
      dormant: REORDER_GRADIENTS[index % 10].dormant
    }));

    setData(styledData); // Updating the data state with shuffled and mapped data
  }, []);

  const { t } = useTranslation();
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [score, setScore] = useState(0);

  function renderItem(info) {
    const { item, onDragStart, onDragEnd, isActive } = info;

    return (
      <Item
        key={item}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}
        style={{ backgroundColor: isActive ? item.active : item.dormant }}
      >
        <BodyText color="secondary" size="subtitle">{item.text}</BodyText>
      </Item>
    );
  }

  function onReordered(fromIndex, toIndex) {
    const copy = [...data]; // Create a copy of the array to avoid mutating state directly
    const removed = copy.splice(fromIndex, 1); // Remove the item from 'fromIndex'

    copy.splice(toIndex, 0, removed[0]); // Insert the removed item at 'toIndex'
    setData(copy); // Update state with the new order
    console.log("\nCurrent List:" + data.map((item) => `\n${item.text}`)); //logging current order of list
  }

  const HeaderComponent = () => {
    return (
      <Prompt style={{ alignItems: "center", justifyContent: 'center' }}>
        <TitleText size="subtitle">{objectData.prompt}</TitleText>
        <Spacer size="medium" />
        <TitleText size="caption">
          {t("minigames:reorderhint")}
        </TitleText>
      </Prompt>
    );
  }

  const FooterComponent = () => {
    return (
      <SubmitButton 
        style={{ marginTop: 10 }}
        onPress={() => {
        setScore(0);//resetting score
        //iterating through list to check for correct order and update score.
        data.forEach((item, index) => {
          console.log(`\nUser: ${item.text}\nCorrect: ${objectData.content[index].text}`);
          if (item.text === objectData.content[index].text) { setScore((prevScore) => prevScore + 1); }
        });

        //setting visibility of modal to true;
        setCompletionModalVisible(currentVisible => !currentVisible);
        }}>
        <BodyText color="secondary" size="subtitle">
          {t("common:submit")}
        </BodyText>
      </SubmitButton>
    );
  }

  return (
    <ImageBackground 
      source={require("../../../../../assets/reorderbg.jpg")}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} 
      fadeDuration={0}
    >
      <DragList
        scrollEnabled={true}
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingTop: 20, flexGrow: 0, width: "100%" }}
        data={data}
        keyExtractor={(item) => item.text}
        onReordered={onReordered}
        renderItem={renderItem}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      />

        <CompletionModal 
          startCompletionProcess={completionModalVisible} 
          score={score} 
          prompt={t("minigames:reorderprompt")}
          totalPossibleScore={objectData.content.length}
        />

    </ImageBackground>
  );
};

export default ReorderHandler;

const Prompt = styled.View`
  width: 95%;
  background-color: #fff;
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 10px;
  align-items: center;
  align-self: center;
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
  align-self: center;
`;