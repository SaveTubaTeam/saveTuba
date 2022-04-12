/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

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

export function PersonalCard(props) {
    const navigation = useNavigation();
    const { currentUser } = props;


    return (
        <Card>
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
                <TitleText>{currentUser?.username}</TitleText>
                {/* should be username */}
                {/* We can soon have a part on login with username as well*/}
                <Row>
                    <BodyText color="primary">{currentUser?.currentScore}</BodyText>
                    <FontAwesomeIcon
                        icon={faLeaf}
                        size={16}
                        color={theme.colors.ui.primary}
                    />
                </Row>

            </AvatarContainer>
        </Card>
    );

}