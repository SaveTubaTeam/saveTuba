import React, { useState } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { View, Modal, TouchableOpacity, StyleSheet, Image } from "react-native";

import { useTranslation } from "react-i18next";
import { TitleText } from "../../../title-text.component";
import { BodyText } from "../../../body-text.component";
import ImageUpload from "../ImageUpload";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
    height: 100%;
    width: 100%;
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
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 80%;
    background-color: #fff;
    border-radius: 30px;
    padding: 20px;
    align-items: center;
`;

const RoundButton = styled.TouchableOpacity`
    position: absolute;
    width: 125px;
    height: 125px;
    border-radius: 100px;
    background-color: red;
`

const ForestHandler = ({ data }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
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
                Good job ✨
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
  };

  return (
    <>
      <Container>
        <RoundButton style = {{ top: "5%", left: "10%" }} onPress={() => console.log("Wazzup Beijing")} />
        <Prompt>
          <TitleText size="subtitle">{data.prompt}</TitleText>
        </Prompt>
        <RoundButton style = {{ top: "80%", left: "60%" }} onPress={() => console.log("Hello Save Tuba")} />
        <Modko visible={false} />
      </Container>
    </>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const style = StyleSheet.create({
    roundButton1: {
      width: 125,
      height: 125,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      left: 25,
      borderRadius: 100,
      backgroundColor: "Red",
      color: "white",
      zIndex:22,
    },
    roundButton2: {
      width: 125,
      height: 125,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      left: -25,
      borderRadius: 100,
      backgroundColor: "#CCE882",
      alignSelf: "flex-end",
    },
    baseText: {
      fontSize: 50,
      color: "white",
    },
  });

export default connect(mapStateToProps, null)(ForestHandler);
