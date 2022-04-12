/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faInfo, faLeaf } from "@fortawesome/free-solid-svg-icons";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";



const AvatarContainer = styled.View`
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

export const GeneralCard = () => {
    const navigation = useNavigation();


    return (
        <Card>
            <AvatarContainer>
                <Spacer position="bottom" size="large">
                    <TitleText>General</TitleText>
                </Spacer>
                <BodyText>Flags</BodyText>
                <Spacer position="bottom" size="medium" />
                <Row>
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <Avatar.Icon
                            size={40}
                            icon="flag"
                            backgroundColor={theme.colors.ui.tertiary}
                        />
                    </TouchableOpacity>
                    <Spacer position="right" size="medium" />
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <Avatar.Icon
                            size={40}
                            icon="flag"
                            backgroundColor={theme.colors.ui.tertiary}
                        />
                    </TouchableOpacity>
                    <Spacer position="left" size="medium" />
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <Avatar.Icon
                            size={40}
                            icon="flag"
                            backgroundColor={theme.colors.ui.tertiary}
                        />
                    </TouchableOpacity>
                </Row>
                <Spacer size="medium" />
                <BodyText>Sound Effects</BodyText>
                <Spacer size="medium" />
                <BodyText>Reminders</BodyText>
                <Spacer size="medium" />
                <Row>
                    <BodyText>Help</BodyText>
                </Row>
                <Spacer size="medium" />

                <Row>
                    <BodyText>About</BodyText>
                    <Spacer position="right" size="medium" />
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <FontAwesomeIcon
                            icon={faCircleInfo}
                            size={16}
                            color={theme.colors.ui.primary}
                        />
                    </TouchableOpacity>
                </Row>
                <Spacer size="medium" />


            </AvatarContainer>
        </Card>
    );

}