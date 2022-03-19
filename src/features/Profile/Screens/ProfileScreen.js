import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ProfileCard } from "../Components/profile-card.component";
import { Badges } from "../Components/badges.component";
import { LeaderboardCard } from "../Components/leaderboard.component";

import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ImageBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBg source={require("../../../../assets/basic-bg.png")}>
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
    </ImageBg>
  );
};

export default ProfileScreen;
