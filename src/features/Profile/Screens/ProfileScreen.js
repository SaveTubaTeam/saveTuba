import React, { Component } from "react";
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

import { useEffect } from "react";

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


class ProfileScreen_ extends Component {
  constructor(props) {
    super(props);
    const store = props.store;
    this.state = store.getState();

    // suscribe to store
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  render() {
    const navigation = useNavigation();


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


}

function ProfileScreen({currentUser, store, achievements}) {
  const navigation = useNavigation();
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
            <ProfileCard currentUser={currentUser} store={store}/>

            <Spacer size="large" />



            <Badges badges={achievements}/>

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
  achievements: store.userAchievements.achievements,
  store: store,
});

export default connect(mapStateToProps, null)(ProfileScreen);
