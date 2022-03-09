import React, { Component, useState } from "react";
import {
    TouchableOpacity,
    View,
    Switch,
} from 'react-native';
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
    SectionEnd
} from "./settings-info-card.styles";

const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  color: black;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsInfoCard = () => {
    const navigation = useNavigation();

    // Udemy video 100 when its time to inport users profile picture !!! NEED TO STORE LOG IN DATA !!!!
    return (
        <SettingsCard elevation={5}>
            <AvatarContainer>
                <Spacer position="bottom" size="large">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Avatar.Icon size={180} icon="head" backgroundColor={theme.colors.ui.tertiary} />
                    </TouchableOpacity>
                </Spacer>
                <Text>Email: {auth.currentUser?.email}</Text>
                {/* We can soon have a part on login with username as well*/}
                <Text>Username: {auth.currentUser?.displayName}</Text>
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
};
