/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

// my stuff
import { View } from "react-native";

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

export function ProfileCard({ currentUser, store }) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  // console.warn(store);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     console.log("Refreshing");
  //   });
  //   return unsubscribe;
  // }, [navigation]);

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
              {t("profile:grade")} {currentUser?.level}
            </BodyText>
          </Achievements>
        </Row>
        <ProgressBar currentUser={currentUser} />
      </AvatarContainer>
    </Card>
  );
}

function ProgressBar({ currentUser }) {
  if (currentUser?.level == null) {
    return <View></View>;
  }
  var nextLevelXP = Math.ceil(Math.pow((currentUser?.level + 1.0) / 0.2, 2.1));

  const width = 200;
  const progress = currentUser.currentScore / nextLevelXP;
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          // color: 'rgba(255,255,255,1)','rgba(65,128,152,1)'
          color: "rgba(65,128,152,1)",
          // color: 'red',
          // color: (props) => props.theme.colors.ui.seconadry,
          fontSize: 14,
          fontStyle: "italic",
        }}
      >
        {currentUser.currentScore} / {Math.ceil(nextLevelXP)} XP
      </Text>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        <Text>{currentUser.level}</Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(65,128,152,1)",
            height: 10,
            width: width,
            marginTop: 5,
            marginHorizontal: 10,
            borderRadius: 9,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(96,187,221,1)",
              width: progress * width,
              borderRadius: 9,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          ></View>
        </View>
        <Text>{currentUser.level + 1}</Text>
      </Row>
    </View>
  );
}
