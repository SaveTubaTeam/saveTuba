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

const DarkLayer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const RoundButton = styled.TouchableOpacity`
position: absolute;
width: 125px;
height: 125px;
border-radius: 100px;
background-color: ${({ isVisible }) => (isVisible ? "#cce882" : "transparent")};
${({ isVisible }) =>
  isVisible
    ? `
    justify-content: center;
    align-items: center;
    padding: 10px;
    left: 25px;
    border-radius: 100px;
    background-color: #cce882;
    color: white;
    z-index: 22;
  `
    : `
    width: 0;
    height: 0;
  `}
`

const ForestHandler = ({ data }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [circle1, setCircle1] = useState(true); //circle 1 is visible at the beginning
  const [circle2, setCircle2] = useState(false); //circle 2 is unvisible at the beginning
  const[circle3, setCircle3] = useState(false); //circle 3 is unvisible at the beginning
  const navigation = useNavigation();

  const gameHandler = ( id ) => {
    if (id == "1" && circle2 == false && circle3 == false) {
      setCircle1(false);
      setCircle2(true);
    } else if (id == "2" && circle1 == false && circle3 == false) {
      setCircle2(false);
      setCircle3(true);
    } else if (id == "3" && circle1 == false && circle2 == false) {
      setCircle3(false);
      setVisible(true);
    }
  }

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
        <DarkLayer>
        </DarkLayer>
        <RoundButton style = {{ top: "5%", left: "10%" }} isVisible={circle1} onPress = {() => gameHandler("1")} />
        <Prompt>
          <TitleText size="subtitle">{data.prompt}</TitleText>
        </Prompt>
        <RoundButton style = {{ top: "80%", left: "60%" }} isVisible={circle2} onPress = {() => gameHandler("2")} />
        <RoundButton style = {{ top: "80%", left: "10%" }} isVisible={circle3} onPress = {() => gameHandler("3")} />
        <Modko visible={false} />
      </Container>
    </>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const style = StyleSheet.create({
    roundButton: {
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
    zeroButton: {
      width: 0,
      height: 0,
    },
    baseText: {
      fontSize: 50,
      color: "white",
    },
  });

export default connect(mapStateToProps, null)(ForestHandler);
