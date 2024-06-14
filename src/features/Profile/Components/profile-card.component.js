/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import userSlice, { selectCurrentUser } from "../../../../redux/slices/userSlice";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

// my stuff
import { View } from "react-native";

// const Friends = styled.View`
//   background-color: ${(props) => props.theme.colors.ui.tertiary};
//   border-radius: ${(props) => props.theme.sizes[2]};
//   width: 50%;
//   align-items: center;
//   margin-right: ${(props) => props.theme.space[2]};
//   justify-content: center;
//   padding: ${(props) => props.theme.sizes[0]};
// `;

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

export function ProfileCard() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const user = useSelector(selectCurrentUser);

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
          <TouchableOpacity //onPress={() => navigation.navigate("Profile")}
          >
            <Avatar.Icon
              size={180}
              icon="head"
              backgroundColor={theme.colors.ui.tertiary}
            />
          </TouchableOpacity>
        </Spacer>

        {/* username underneath avatar icon */}
        <TitleText size="subtitle">{`${user.firstName} ${user.lastName}`}</TitleText>

        <Spacer size="medium" />
        {/* <Row>
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
        </Row> */}
        <ProgressBar />
      </AvatarContainer>
    </Card>
  );
}

function ProgressBar() {
  const user = useSelector(selectCurrentUser);
  //may need to uncomment this later:
  /* if (currentUser?.level == null) {
    return <View></View>;
  } */

  //3 is a dummy var
  var nextLevelXP = Math.ceil(Math.pow((3 + 1.0) / 0.2, 2.1)); //calculating a scaling factor for the next level

  const width = 200;

  //375 is a dummy var
  const progress = 375 / nextLevelXP; //calculating the percentage of width to be covered by lighter overlay
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
        {/* 375 is a dummy var. */}
        375 / {Math.ceil(nextLevelXP)} XP
      </Text>
      <Row
        style={{
          justifyContent: "center",
        }}
      >

        {/* current level */}
        <Text>A</Text>

        {/* dark underlay of progress bar */}
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

          {/* lighter overlay which scales with variable 'progress' */}
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

        {/* next level */}
        <Text>B</Text>
      </Row>
    </View>
  );
}
