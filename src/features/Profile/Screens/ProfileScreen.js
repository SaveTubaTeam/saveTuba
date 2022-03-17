import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Leaderboard from "react-native-leaderboard";
import { auth } from "../../../../firebase";

import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const TitleText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  padding-bottom: ${(props) => props.theme.sizes[1]};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeArea>
      <Container>
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
            <Text>Email: {auth.currentUser?.email}</Text>
            {/* We can soon have a part on login with username as well*/}
            <Text>Username: {auth.currentUser?.displayName}</Text>
          </AvatarContainer>
        </Card>
        <Spacer size="large" />

        <Card>
          <TitleText>Badges</TitleText>
        </Card>
        <Spacer size="large" />
        <Card>
          <TitleText>Leaderboard</TitleText>
          <Leaderboard
            data={[
              { userName: "Joe", highScore: 52 },
              { userName: "Jenny", highScore: 120 },
              //...
            ]}
            sortBy="highScore"
            labelBy="userName"
            evenRowColor={theme.colors.bg.secondary}
            oddRowColor={theme.colors.bg.secondary}
          />
        </Card>
      </Container>
    </SafeArea>
  );
};

export default ProfileScreen;
