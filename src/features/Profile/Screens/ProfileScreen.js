import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView, View } from "react-native";
import { ProfileCard } from "../Components/profile-card.component";
import { Badges } from "../Components/badges.component";
import LeaderboardCard from "../Components/leaderboard.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";

function ProfileScreen() {
  return (
      <SafeArea>
        <ScrollView>
          <Container>

            <ProfileCard />

            <Spacer size="large" />

            <Badges />

            <Spacer size="large" />

            <LeaderboardCard />
            
          </Container>
        </ScrollView>
      </SafeArea>
  );
}


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ProfileScreen;
