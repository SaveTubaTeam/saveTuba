import React, { Component, useState } from "react";
import styled from "styled-components/native";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../../../firebase";

import { ProfileCard } from "../Components/profile-card.component";
import { Badges } from "../Components/badges.component";
import LeaderboardCard from "../Components/leaderboard.component";

import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";

import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { useEffect } from "react";

import { Button, Modal } from "react-native-paper";

import {
  fetchAchievements,
  addAchievement,
  closeAchievementModal,
} from "../../../../redux/actions";
import Amodal from "../../../components/achievement-components/Amodal";

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

function ProfileScreen({
  currentUser,
  store,
  achievements,
  fetchAchievements,
  addAchievement,
  closeAchievementModal,
  achievementModal
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [visible, isVisible] = useState(achievementModal["isOpen"]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     console.log("Refreshing");
  //   });
  //   return unsubscribe;
  // }, [navigation]);
  // console.warn(achievements);
  return (
    <ImageBg source={require("../../../../assets/basic-bg.png")}>
      <SafeArea>
        <ScrollView>
          <Container>
            <ProfileCard currentUser={currentUser} store={store} />
            <Button
              style={{
                flex: 1,
                backgroundColor: "red",
              }}
              onPress={() => {
                // (addAchievement("Hello"));
              }}
            ></Button>

            <Spacer size="large" />

            <Badges badges={achievements} />

            <Spacer size="large" />

            <LeaderboardCard />
          </Container>
        </ScrollView>
        {/* <Modal transparent animationType="slide" visible={visible}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{backgroundColor: 'red', flex: 1}}>

            </View>
          </View>
        </Modal> */}
      </SafeArea>
    </ImageBg>
  );
}

// const ProfileScreenView({
//   currentUser,
//   store,
//   achievements,

// })

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  achievements: store.userAchievements.achievements,
  achievementModal: store.modals,
  store: store,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchAchievements, addAchievement, closeAchievementModal },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
