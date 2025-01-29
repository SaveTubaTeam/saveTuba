import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import React, { useState } from "react";
import { SafeArea } from "../styled-components/safe-area.component";
import PersonalCard from "./personal.component";
import { GeneralCard } from "./general.component";
import { Spacer } from "../styled-components/spacer.component";
import SignOut from "./SignOutComponent";
import ClassroomCard from "./ClassroomCard";

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
