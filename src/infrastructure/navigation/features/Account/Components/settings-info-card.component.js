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

    // Udemy video 100 when its time to inport users profile picture
    return (
        <SettingsCard elevation={5}>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Avatar.Icon size={180} icon="head" backgroundColor={theme.colors.ui.tertiary} />
                </TouchableOpacity>
                <Text>Email: {auth.currentUser?.email}</Text>
            </AvatarContainer>
            <Info>
                <Title>Title</Title>
                <Section>
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
