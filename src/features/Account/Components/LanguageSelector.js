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
import styled from "styled-components/native";

import { BodyText } from "../../../components/body-text.component";

const Row = styled.View`
  flex-direction: row;
`;

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
  {
    code: "kk",
    label: <Flag source={require("../../../../assets/kz.jpeg")} />,
  },
  { code: "ru", label: <Flag source={require("../../../../assets/ru.png")} /> },
  { code: "en", label: <Flag source={require("../../../../assets/en.png")} /> },
];

const Selector = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = (code) => {
    return i18n.changeLanguage(code);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BodyText size="body" color="quaternary">
          {t("common:languageSelector")}
        </BodyText>
      </View>
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
    // <View
    //     style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'space-evenly',
    //     }}>
    //     <Row>
    //         {LANGUAGES.map(language => {
    //             const selectedLanguage = language.code === selectedLanguageCode;

    //             return (
    //                 <Pressable
    //                     key={language.code}
    //                     style={styles.buttonContainer}
    //                     disabled={selectedLanguage}
    //                     onPress={() => setLanguage(language.code)}
    //                 >
    //                     <Text
    //                         style={[selectedLanguage ? styles.selectedText : styles.text]}
    //                     >
    //                         {language.label}
    //                     </Text>
    //                 </Pressable>
    //             );
    //         })}
    //         <Pressable
    //             key={language.code}
    //             disabled={selectedLanguage}
    //             onPress={() => setLanguage('en')}
    //             style={{
    //                 borderRadius: 8,
    //                 backgroundColor:
    //                     currentLanguage === 'en' ? '#748816' : '#C6DC3B',
    //                 padding: 8,
    //             }}>
    //             <CountryFlag isoCode="us" size={25} />
    //         </Pressable>
    //         <Spacer position="left" size="small" />

    //         <Pressable
    //             key={language.code}
    //             disabled={selectedLanguage}
    //             onPress={() => setLanguage('kk')}
    //             style={{
    //                 borderRadius: 8,
    //                 backgroundColor:
    //                     currentLanguage === 'kk' ? '#748816' : '#C6DC3B',
    //                 padding: 8,
    //             }}>
    //             <CountryFlag isoCode="kz" size={25} />
    //         </Pressable>
    //         <Spacer position="right" size="small" />
    //         <Pressable
    //             key={language.code}
    //             disabled={selectedLanguage}
    //             onPress={() => setLanguage('ru')}
    //             style={{
    //                 borderRadius: 8,
    //                 backgroundColor:
    //                     currentLanguage === 'ru' ? '#748816' : '#C6DC3B',
    //                 padding: 8,
    //             }}>
    //             <CountryFlag isoCode="ru" size={25} />
    //         </Pressable>
    //     </Row>
    // </View >
  );
};

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
