/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components/native";
import {
  Switch,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleInfo,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { moderateScale } from "react-native-size-matters";
import { useTranslation } from "react-i18next";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

import Selector from "./LanguageSelector";

const AvatarContainer = styled.View`
  align-items: center;
  width: 100%;
`;

const Row = styled.View`
  flex-direction: row;
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export const GeneralCard = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(false);
  const toggleSwitchSE = () =>
    setIsSoundEffectsEnabled((previousState) => !previousState);

  const [isRemindersEnabled, setIsRemindersEnabled] = useState(false);
  const toggleSwitchR = () =>
    setIsRemindersEnabled((previousState) => !previousState);

  const [modalHelpVisible, setModalHelpVisible] = useState(false);
  const [modalAboutVisible, setModalAboutVisible] = useState(false);

  return (
    <Card>
      <AvatarContainer>
        <Spacer position="bottom" size="large">
          <TitleText size="subtitle">{t("general:general")}</TitleText>
        </Spacer>

        <Selector />

        <Spacer position="bottom" size="large" />

        <Row>
          <BodyText color="quaternary">{t("general:soundeffects")}</BodyText>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSoundEffectsEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchSE}
            value={isSoundEffectsEnabled}
            style={{
              transform: [
                { scaleX: moderateScale(0.8, 0.2) },
                {
                  scaleY: moderateScale(0.8, 0.2),
                },
              ],
            }}
          />
        </Row>

        <Row>
          <BodyText color="quaternary">{t("general:reminders")}</BodyText>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isRemindersEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchR}
            value={isRemindersEnabled}
            // figure out flex in order to make switch more inlign
            style={{
              transform: [
                { scaleX: moderateScale(0.8, 0.2) },
                {
                  scaleY: moderateScale(0.8, 0.2),
                },
              ],
            }}
          />
        </Row>
        <Spacer size="medium" />

        <Row>
          <BodyText>{t("general:help")}</BodyText>
          <Spacer position="right" size="medium" />
          <TouchableOpacity onPress={() => setModalHelpVisible(true)}>
            {/* This will need to also be a feature in the firebase - language */}
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size={16}
              color={theme.colors.ui.primary}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalHelpVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalHelpVisible(!modalHelpVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{t("about:help")}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalHelpVisible(!modalHelpVisible)}
                >
                  <Text style={styles.textStyle}>{t("about:close")}</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </Row>
        <Spacer size="medium" />

        <Row>
          <BodyText>{t("general:about")}</BodyText>
          <Spacer position="right" size="medium" />
          <TouchableOpacity onPress={() => setModalAboutVisible(true)}>
            {/* This will need to also be a feature in the firebase - language */}
            <FontAwesomeIcon
              icon={faCircleInfo}
              size={16}
              color={theme.colors.ui.primary}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalAboutVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalAboutVisible(!modalAboutVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{t("about:about")}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalAboutVisible(!modalAboutVisible)}
                >
                  <Text style={styles.textStyle}>{t("about:close")}</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </Row>
        <Spacer size="medium" />
      </AvatarContainer>
    </Card>
  );
};
