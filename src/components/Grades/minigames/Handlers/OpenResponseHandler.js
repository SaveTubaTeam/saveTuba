import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { Image } from 'expo-image';
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
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

//@param data is the OpenResponse object passed in from OpenResponseHandler
const ImagePrompt = ({ data, imageMap }) => {
  //const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const navigation = useNavigation();
  const { t } = useTranslation();

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
                {t("minigames:nosubmission")}
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
                {t("minigames:openresponsetryagain")}
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
            width: "100%",
            padding: 15,
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
            <Image 
              source={{uri: imageMap[data.image]}} 
              style={{ width: 150, height: 150, borderRadius: 20 }} 
              contentFit="cover"
            />
          </View>
          <TitleText size="subtitle">
            {data.prompt}
          </TitleText>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            marginBottom: 10,
            height: 250,
            borderRadius: 30,
            flex: 1,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 15,
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
            /* marked for translation */
            placeholder={t("minigames:openresponsethink")}
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
            }}
          >
            <BodyText color="secondary">{t("common:submit")}</BodyText>
          </Button>
        </View>
      </View>

      <Modko visible={visible} />

            {/* marked for translation */}
      <CompletionModal 
        visible={completionModalVisible}
        score={-1}
        prompt={t("minigames:openresponseprompt")}
      >

      </CompletionModal>
    </ScrollView>
  );
};

//@param objectData is the OpenResponse object
const OpenResponseHandler = ({ objectData, imageMap }) => {
  
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
          <ImagePrompt data={objectData} imageMap={imageMap} />
        </View>
      </ImageBg>
    </View>
  );
};

export default OpenResponseHandler;
