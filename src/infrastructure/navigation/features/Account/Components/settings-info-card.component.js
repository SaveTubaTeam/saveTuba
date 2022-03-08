import React from "react";
import { View } from "react-native";

import { Spacer } from "../../../../../components/spacer.component";
import styled from "styled-components";

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

export const SettingsInfoCard = () => {
    // Udemy video 100 when its time to inport users profile picture
    return (
        <SettingsCard elevation={5}>
            <View>
                <SettingsCardCover key="hard code?" source={{ uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg" }} />
            </View>
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
