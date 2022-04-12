/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faCircleQuestion, faInfo, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { moderateScale } from 'react-native-size-matters';

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";



const AvatarContainer = styled.View`
  align-items: center;
`;

const RowContainer = styled.View`
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
`;



export const GeneralCard = () => {
    const navigation = useNavigation();
    const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(false);
    const toggleSwitchSE = () => setIsSoundEffectsEnabled(previousState => !previousState);

    const [isRemindersEnabled, setIsRemindersEnabled] = useState(false);
    const toggleSwitchR = () => setIsRemindersEnabled(previousState => !previousState);

    return (
        <Card>
            <AvatarContainer>
                <Spacer position="bottom" size="large">
                    <TitleText>General</TitleText>
                </Spacer>
                <Spacer position="bottom" size="medium" />
                <Row>
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        {/* it will change from navigation to just changing feature in database */}
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
                <Spacer size="large" />
                <Spacer size="large" />

                <Row>
                    <BodyText>Sound Effects</BodyText>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isSoundEffectsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchSE}
                        value={isSoundEffectsEnabled}
                        style={{
                            transform: [{ scaleX: moderateScale(.8, 0.2) }, {
                                scaleY:
                                    moderateScale(.8, 0.2)
                            }]
                        }}

                    />
                </Row>
                <Spacer size="medium" />


                <Row>
                    <BodyText>Reminders</BodyText>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isRemindersEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchR}
                        value={isRemindersEnabled}
                        style={{
                            transform: [{ scaleX: moderateScale(.8, 0.2) }, {
                                scaleY:
                                    moderateScale(.8, 0.2)
                            }]
                        }}

                    />

                </Row>
                <Spacer size="medium" />

                <Row>
                    <BodyText>Help</BodyText>
                    <Spacer position="right" size="medium" />
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <FontAwesomeIcon
                            icon={faCircleQuestion}
                            size={16}
                            color={theme.colors.ui.primary}
                        />
                    </TouchableOpacity>
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