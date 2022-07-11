import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../../../firebase";

import { ProfileCard } from "../Components/profile-card.component";
import { Badges } from "../Components/badges.component";
import LeaderboardCard from "../Components/leaderboard.component";

import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";

import { connect } from "react-redux";

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

function ProfileScreen({currentUser}) {
  const navigation = useNavigation();
  console.warn(currentUser.currentScore);


  return (
    <ImageBg source={require("../../../../assets/basic-bg.png")}>
      <SafeArea>
        <ScrollView>
          <Container>
            <ProfileCard currentUser={currentUser} />

            <Spacer size="large" />

            <Badges />

            <Spacer size="large" />

            <LeaderboardCard />
          </Container>
        </ScrollView>
      </SafeArea>
    </ImageBg>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(ProfileScreen);
