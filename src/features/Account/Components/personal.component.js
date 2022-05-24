/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { TitleText } from "../../../components/title-text.component";
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

const InputContainer = styled.View`
  width: 40%;
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
  const { t } = useTranslation();

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

        <TitleText size="subtitle">{currentUser?.email}</TitleText>
        <Row>
          <TitleText size="subtitle">
            {t("personal:changeusername")}:{" "}
          </TitleText>
          <InputContainer>
            <Input placeholder={currentUser?.username} />
          </InputContainer>
        </Row>
      </AvatarContainer>
    </Card>
  );
}
