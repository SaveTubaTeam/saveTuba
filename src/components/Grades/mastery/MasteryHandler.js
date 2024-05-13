import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, Image } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
import { ImageBg } from "../grades.styles";
import CompletionModal from "../../../features/Account/LevelSystem/CompletionModal";
// import {getC} from "";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Prompt = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

const InputContainer = styled.View`
  width: 100%;
  background-color: white;
  margin: 10px;
  border-radius: 30px;
  padding: 20px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-family: Scada_400Regular;
  color: #748816;
  background-color: #fff;
  font-size: 18px;
  margin: 10px;
  padding: 10px;
  border: 2px dashed #c6dc3b;
  border-radius: 5px;
`;

const SubmitButton = styled(Button)`
  width: 80%;
  height: 40px;
  background-color: #748816;
  align-self: center;
  border-radius: 20px;
  margin-bottom: 10px;
`;

//TODO: need to add ability to input file, also need to check if user has actually submitted anything. Can copy SnapshotHandler modal for that.
//@param objectData our Mastery object passed from IndividualLessonHandler
const MasteryHandler = ({ objectData, imageMap }) => {
  const [text, setText] = useState("");
  const { t } = useTranslation();
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  
  const renderItem = ({ item }) => {

    return (
      <>
        <Prompt>
          <TitleText size="subtitle">{item.text}</TitleText>
          {item.image && (
            <Image
              style={{
                aspectRatio: 1,
                width: "60%",
                height: undefined,
                marginTop: 20,
              }}
              source={{uri: imageMap[item.image]}}
            />
          )}
        </Prompt>
      </>
    );
  };

  return (
    <Container>
      <ImageBg
        style={{ paddingTop: 20 }}
        source={{uri: imageMap["assets/lessonbg.png"]}}
        resizeMode="cover"
      >
        <FlatList // The flatlist used to load minigames and their data.
          data={
            objectData.cards &&
            Object.values(
              objectData.cards
            )
          }
          style={{ width: "90%" }}
          keyExtractor={(item, index) => index}
          key={(item, index) => index}
          renderItem={renderItem}
          contentContainerStyle={{
            alignItems: "center",
          }}
          ListFooterComponentStyle={{ width: "100%", alignItems: "center" }}
          ListFooterComponent={
            <InputContainer>
              <TitleText size="subtitle">{objectData.prompt}</TitleText>
              <Input
                placeholder={t("common:enteryouranswer")}
                placeholderTextColor={"#748816"}
                multiline={true}
                onChangeText={(input) => setText(input)}
                value={text}
              />
              <SubmitButton
                onPress={() => {
                  setText("");
                  setCompletionModalVisible(!completionModalVisible);
                }}
              >
                <BodyText color="secondary">{t("common:submit")}</BodyText>
              </SubmitButton>
            </InputContainer>
          }
        />
      </ImageBg>

        {/* marked for translation */}
      <CompletionModal score={-2} visible={completionModalVisible}
      prompt={`Congratulations!\nYour response has been submitted.\n\nYou've just completed a mastery! Give yourself a pat on the back.`}> 
      </CompletionModal>

    </Container>
  );
};

export default MasteryHandler;
