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

export const GeneralCard = () => {
    const navigation = useNavigation();


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

            </AvatarContainer>
        </Card>
    );

}