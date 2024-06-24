import { ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import React from "react";
import { SafeArea } from "../../../components/safe-area.component";
import PersonalCard from "../Components/personal.component";
import { GeneralCard } from "../Components/general.component";
import { Spacer } from "../../../components/spacer.component";
import SignOut from "../Components/signouut.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function AccountScreen() {
  const { i18n } = useTranslation();
  const selectedLanguageCode = i18n.language; //getting current language from i18n
  //console.log("Code: ", selectedLanguageCode);

  const navigation = useNavigation();

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          {/* profile card */}
          <PersonalCard />

          <Spacer size="large" />
          {/* GeneralCard contains LanguageSelector, toggles for SFX & Reminders, Help & About*/}
          <GeneralCard />

          <SignOut navigation={navigation} />

        </Container>
      </ScrollView>
    </SafeArea>
  );
}

export default AccountScreen;
