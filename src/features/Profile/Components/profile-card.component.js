/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

const Friends = styled.View`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 50%;
  align-items: center;
  margin-right: ${(props) => props.theme.space[2]};
  justify-content: center;
  padding: ${(props) => props.theme.sizes[0]};
`;

const Achievements = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

export function ProfileCard({ currentUser }) {
  const navigation = useNavigation();
  const { t } = useTranslation();
  console.log(currentUser);
  console.log(currentUser.username);
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
        <TitleText size="subtitle">{currentUser?.username}</TitleText>

        <Spacer size="medium" />
        <Row>
          <Friends>
            <BodyText color="secondary">
              {t("profile:friends")} {currentUser?.friendCount}
            </BodyText>
          </Friends>
          <Achievements>
            <BodyText color="secondary">
              {t("profile:grade")} {currentUser?.currentScore}
            </BodyText>
          </Achievements>
        </Row>
      </AvatarContainer>
    </Card>
  );
}
