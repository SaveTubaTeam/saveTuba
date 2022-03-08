import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Spacer } from "../../../../../components/spacer.component";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { theme } from "../../../../theme";
import { auth } from "../../../../../../firebase";
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
                <Title>Soon to be a switch</Title>
                <Title>Languages</Title>
                <Title>Help</Title>
                <Title>About</Title>
                <Title>Reminders (switch)</Title>
                <Title>Sound Effect (Switch)</Title>
                <Section>
                    {/* This section here is just me testing to see if I could put an image on the right side of the card */}
                    <SectionEnd>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png" }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
            </Info>
        </SettingsCard>
    );
};
