import React, { Component, useState } from "react";
import { TouchableOpacity, View, Switch } from "react-native";
import { Avatar } from "react-native-paper";
import { ToggleSwitch } from "../../../components/toggle-switch";
import { Spacer } from "../../../components/spacer.component";
import styled from "styled-components";
import { theme } from "../../../infrastructure/theme";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/core";
import {
  SettingsCard,
  SettingsCardCover,
  Info,
  Title,
  Section,
  Icon,
  SectionEnd,
} from "./settings-info-card.styles";

import { connect } from "react-redux";

const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  color: black;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export function SettingsInfoCard(props) {
  const navigation = useNavigation();

  const {currentUser} = props;

  // const { currentUser } = props;
  // console.log({props.currentUser});
  // Udemy video 100 when its time to inport users profile picture !!! NEED TO STORE LOG IN DATA !!!!
  return (
    <SettingsCard elevation={5}>
      <AvatarContainer>
        <Spacer position="bottom" size="large">
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Avatar.Icon
              size={180}
              icon="head"
              backgroundColor={theme.colors.ui.tertiary}
            />
          </TouchableOpacity>
        </Spacer>
        <Text>Email: {currentUser.email}</Text>
        {/* We can soon have a part on login with username as well*/}
        <Text>Username: {currentUser.username}</Text>
      </AvatarContainer>
      <Info>
        <Title>Change to inline view (quick fix)</Title>

        <Title>Languages</Title>
        <Title>Help</Title>
        <Title>About</Title>
        <Title>Reminders (switch)</Title>
        <Spacer position="top" size="large">
          <ToggleSwitch />
        </Spacer>
      </Info>
    </SettingsCard>
  );
}

// const mapStateToProps = (store) => ({
//   currentUser: store.userState.currentUser
// });

// export default connect(mapStateToProps, null)(SettingsInfoCard);