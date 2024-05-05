import React, { useState } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";
import {
  View,
  Modal,
  Pressable,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { ImageBg } from "../../grades.styles";
import CompletionModal from "../../../../features/Account/LevelSystem/CompletionModal";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import ImageUpload from "../ImageUpload";
import { useNavigation } from "@react-navigation/native";

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
  width: 80%;
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

const SnapshotHandler = ({
  data,
  imageMap
}) => {
  const { t } = useTranslation();
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ImageBg source={{uri: imageMap["assets/lessonbg2.png"]}}>
          <Prompt>
            <TitleText size="subtitle">{data.prompt}</TitleText>
          </Prompt>
          <Prompt>

            <ImageUpload />

            <SubmitButton onPress={() => setCompletionModalVisible(!completionModalVisible)}>
              <BodyText color="secondary" size="subtitle">
                {t("common:submit")}
              </BodyText>
            </SubmitButton>

          </Prompt>
        </ImageBg>
        {/* <Modko visible={false} /> */}
        
        {/* marked for translation */}
        <CompletionModal score={-1} visible={completionModalVisible}
        prompt={'Your image has been submitted. Good job!\nGo back to the lesson to continue learning.'}>
        </CompletionModal>

      </Container>
    </>
  );
};
/* 
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
}); */

export default SnapshotHandler;
