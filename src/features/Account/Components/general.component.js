import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Switch, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { moderateScale } from "react-native-size-matters";
import { useTranslation } from "react-i18next";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";
import Selector from "./LanguageSelector";
import AboutModal from "./AboutModal";
import HelpModal from "./HelpModal";
import { Audio } from "expo-av";

// Import all sound files
import soundeffectsOn from "../../../../assets/saveTubaSoundEffects/soundeffectsOn.wav";
import popupOpen from "../../../../assets/saveTubaSoundEffects/popupOpen.wav";
// Add more sound imports as needed

const soundMap = {
  soundeffectsOn,
  popupOpen
  // Add more sounds to the map as needed
};

export const GeneralCard = () => {
  const { t } = useTranslation();
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(true);
  const [modalHelpVisible, setModalHelpVisible] = useState(false);
  const [modalAboutVisible, setModalAboutVisible] = useState(false);
  const [sound, setSound] = useState();

  async function playSound(soundName) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(soundMap[soundName]);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const toggleSwitchSE = () => {
    setIsSoundEffectsEnabled((previousState) => {
      const newState = !previousState;
      if (newState) {
        playSound("soundeffectsOn");
      }
      return newState;
    });
  };

  const handleHelpPress = () => {
    setModalHelpVisible(true);
    playSound("popupOpen");
  };

  const handleAboutPress = () => {
    setModalAboutVisible(true);
    playSound("popupOpen");
  };

  return (
    <Card>
      <AvatarContainer>
        <Spacer position="bottom" size="large">
          <TitleText size="subtitle">{t("common:general")}</TitleText>
        </Spacer>

        {/* Select Language */}
        <Selector />

        <Spacer position="bottom" size="large" />

        <Row>
          <BodyText color="quaternary">{t("common:soundeffects")}</BodyText>
          <Switch
            trackColor={{ false: "#767577", true: "rgba(65,128,152,0.9)" }}
            thumbColor={isSoundEffectsEnabled ? "#60BBDD" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchSE}
            value={isSoundEffectsEnabled}
            style={{ transform: [{ scaleX: moderateScale(0.8, 0.2) }, { scaleY: moderateScale(0.8, 0.2) }] }}
          />
        </Row>

        <Spacer size="medium" />

        <TouchableOpacity onPress={handleHelpPress}>
          <Row>
            <BodyText>{t("common:help")}</BodyText>
            <Spacer position="right" size="medium" />
            <FontAwesomeIcon icon={faCircleQuestion} size={21} color={theme.colors.ui.primary} />
          </Row>
        </TouchableOpacity>
        
        <HelpModal modalHelpVisible={modalHelpVisible} setModalHelpVisible={setModalHelpVisible} />

        <Spacer size="medium" />

        <TouchableOpacity onPress={handleAboutPress}>
          <Row>
            <BodyText>{t("common:about")}</BodyText>
            <Spacer position="right" size="medium" />
            <FontAwesomeIcon icon={faCircleInfo} size={21} color={theme.colors.ui.primary} />
          </Row>
        </TouchableOpacity>
        
        <AboutModal modalAboutVisible={modalAboutVisible} setModalAboutVisible={setModalAboutVisible} />

        <Spacer size="medium" />
      </AvatarContainer>
    </Card>
  );
};

const AvatarContainer = styled.View`
  align-items: center;
  width: 100%;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;