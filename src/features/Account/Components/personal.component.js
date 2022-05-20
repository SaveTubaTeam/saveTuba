/* eslint-disable react/prop-types */
import React, { setState, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSolid,
  faCamera,
  faCircleInfo,
  faCircleQuestion,
  faInfo,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

import { StyleSheet } from "react-native";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

const AvatarContainer = styled.View`
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputContainer = styled.View`
  width: 40%;
`;

const Input = styled.TextInput`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.ui.secondary};
  padding: ${(props) => props.theme.sizes[0]} ${(props) => props.theme.sizes[1]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export function PersonalCard(props) {
  const navigation = useNavigation();
  const { currentUser } = props;

  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(
      `${currentUser?.firstName}-photo`
    );
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(currentUser);
    }, [currentUser])
  );

  return (
    <Card>
      <AvatarContainer>
        <Spacer position="bottom" size="large">
          <Row>
            {/* <Avatar.Icon
                            size={180}
                            icon="head"
                            backgroundColor={theme.colors.ui.tertiary}
                        /> */}

            {!photo && (
              <Avatar.Icon
                size={180}
                icon="head"
                backgroundColor={theme.colors.ui.tertiary}
              />
            )}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              />
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate("CameraScreen")}
            >
              {/* This will need to also be a feature in the firebase - language */}
              <FontAwesomeIcon
                position="absolute"
                icon={faCamera}
                size={60}
                top={20}
                right={-10}
                color={theme.colors.ui.primary}
              />
            </TouchableOpacity>
          </Row>
        </Spacer>

        <BodyText size="subtitle">Email: {currentUser?.email}</BodyText>
        <Row>
          <BodyText size="subtitle">Change Username: </BodyText>
          <InputContainer>
            <Input placeholder={currentUser?.username} />
          </InputContainer>
        </Row>
      </AvatarContainer>
    </Card>
  );
}
