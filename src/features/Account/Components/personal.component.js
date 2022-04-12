/* eslint-disable react/prop-types */
import React, { setState } from "react";
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
  align-items: center;
`;

const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.tertiary};
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[2]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[2]};
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

                <TitleText>Email: {currentUser?.email}</TitleText>
                <Row>

                    <TitleText>Change Username: </TitleText>
                    <Input
                        placeholder={currentUser?.username}
                    // onChange={event => { this.setState({ query: event.target.value }) }}
                    // onKeyPress={event => {
                    //     if (event.key === 'Enter') {
                    //         { (Username) => this.setState({ Username }) }
                    //     }
                    // }}
                    />
                </Row>

            </AvatarContainer>
        </Card>
    );

}