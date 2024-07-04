import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import React, { useState } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import PersonalCard from "../Components/personal.component";
import { GeneralCard } from "../Components/general.component";
import { Spacer } from "../../../components/spacer.component";
import SignOut from "../Components/SignOutComponent";
import ClassroomCard from "../Components/ClassroomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function AccountScreen() {

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          {/* profile card */}
          <PersonalCard />

          <Spacer size="large" />

          <ClassroomCard />

          <Spacer size="large" />
        
          {/* GeneralCard contains LanguageSelector, toggles for SFX & Reminders, Help & About*/}
          <GeneralCard />

          <Spacer size="large" />

          <SignOut />

        </Container>
      </ScrollView>
    </SafeArea>
  );
}

export default AccountScreen;
