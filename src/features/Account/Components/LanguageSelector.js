import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation, useNavigationState } from "@react-navigation/native";
//import CountryFlag from "react-native-country-flag";
//import styled from "styled-components/native";

import { BodyText } from "../../../components/body-text.component";
import { useDispatch } from "react-redux";
//import { setEnglish, setKazakh, setRussian } from "../../../../redux/slices/languageSlice";

/* const Row = styled.View`
  flex-direction: row;
`; */

const Flag = ({ source }) => {
  return (
    <Image
      source={source}
      style={{
        borderRadius: 3,
        height: undefined,
        width: 50,
        aspectRatio: 1.5,
      }}
    />
  );
};

const LANGUAGES = [
  { code: "kk", label: <Flag source={require("../../../../assets/kz.jpeg")} /> },
  { code: "ru", label: <Flag source={require("../../../../assets/ru.png")} /> },
  { code: "en", label: <Flag source={require("../../../../assets/en.png")} /> },
];

const Selector = () => {
  const { t, i18n } = useTranslation(); //useTranslation() docs: https://react.i18next.com/latest/usetranslation-hook
  const selectedLanguageCode = i18n.language;
  const navigation = useNavigation();

  const setLanguage = async(languageCode) => {
    await i18n.changeLanguage(languageCode);
    navigation.popToTop(); //throws an error in development mode but works like a charm

    //IMLocalize.js (imported in App.js) acts as an event listener for changeLanguage(), caching the new language code under 'user-language'
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BodyText size="body" color="quaternary">
          {t("common:languageSelector")}
        </BodyText>
      </View>
      {/* Here we iterate through the three possible language codes, and map each code onto its own TouchableOpacity component.
      language.code refers to either "en", "kk", or "ru", and language.label refers to the code's respective image component. */}
      {LANGUAGES.map((language) => {
        const selectedLanguage = language.code === selectedLanguageCode;

        return (
          <TouchableOpacity
            key={language.code}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}
            style={{
              alignSelf: "center",
              marginTop: 10,
              borderColor: "#C6DC3B",
              borderWidth: 3,
              borderRadius: 5,
              elevation: 5,
            }}
          >
            {language.label}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}; //end of selector

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#444",
    fontSize: 24,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    color: "grey",
    paddingVertical: 4,
  },
  selectedText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#748816",
    paddingVertical: 4,
  },
});

export default Selector;
