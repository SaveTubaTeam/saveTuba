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
import CountryFlag from "react-native-country-flag";
//import styled from "styled-components/native";

/* import { BodyText } from "../../../components/body-text.component";
import { useDispatch } from "react-redux"; */
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
  { code: "en", label: <Flag source={require("../../../assets/en.png")} /> },
  { code: "kk", label: <Flag source={require("../../../assets/kz.jpeg")} /> },
  { code: "ru", label: <Flag source={require("../../../assets/ru.png")} /> },
];

const SelectorLogin = () => {
  const { t, i18n } = useTranslation(); //useTranslation() docs: https://react.i18next.com/latest/usetranslation-hook
  const selectedLanguageCode = i18n.language;

  const setLanguage = async(languageCode) => {
    await i18n.changeLanguage(languageCode);

    //IMLocalize.js (imported in App.js) acts as an event listener for changeLanguage(), caching the new language code under 'user-language'
  };

  return (
    <View style={[styles.container, styles.rowLayout]}>
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
              borderColor: "#748816",
              borderWidth: 2,
              borderRadius: 5,
              shadowOpacity: 0.5,
              shadowRadius: 1,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              elevation: 5,
            }}
          >
            {language.label}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  rowLayout: {
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

export default SelectorLogin;
