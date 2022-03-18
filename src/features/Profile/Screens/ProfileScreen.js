import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, ScrollView } from "react-native";

import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Leaderboard from "react-native-leaderboard";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
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

const Friends = styled.View`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  border-radius: 15px;
  width: 50%;
  align-items: center;
  margin-right: 10;
  justify-content: center;
`;

const Achievements = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 15px;
  width: 50%;
  align-items: center;
  justify-content: center;
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

const BodyText = styled.Text`
  color: red;
  padding-bottom: ${(props) => props.theme.sizes[1]};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Row = styled.View`
  flex-direction: row;
`;

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <Card>
            <AvatarContainer>
              <Spacer position="bottom" size="large">
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Avatar.Icon
                    size={180}
                    icon="head"
                    backgroundColor={theme.colors.ui.tertiary}
                  />
                </TouchableOpacity>
              </Spacer>
              <TitleText>{auth.currentUser?.email}</TitleText>
              {/* should be username */}
              {/* We can soon have a part on login with username as well*/}
              <Row>
                <BodyText>328 </BodyText>
                <FontAwesomeIcon
                  icon={faLeaf}
                  size={18}
                  color={theme.colors.ui.primary}
                />
              </Row>
              <Row>
                <Friends>
                  <BodyText>28 friends</BodyText>
                </Friends>
                <Achievements>
                  <BodyText>6 achievements</BodyText>
                </Achievements>
              </Row>
            </AvatarContainer>
          </Card>

          <Spacer size="large" />

          <Card>
            <TitleText>Badges</TitleText>
          </Card>

          <Spacer size="large" />

          <Card>
            <TitleText>Leaderboard</TitleText>
            {/*<Leaderboard
            data={[
              { userName: "Natalya", highScore: 342 },
              { userName: "Sergey", highScore: 339 },
              { userName: "Elena", highScore: 328 },
              { userName: "Aleksandr", highScore: 326 },
            ]}
            scrollEnabled="false"
            sortBy="highScore"
            labelBy="userName"
            labelStyle={{
              color: "white",
              fontFamily: theme.fonts.body,
            }}
            rankStyle={{ color: "white", fontFamily: theme.fonts.body }}
            scoreStyle={{
              color: "white",
              fontFamily: theme.fonts.body,
            }}
            evenRowColor={theme.colors.bg.secondary}
            oddRowColor={theme.colors.bg.secondary}
          />*/}
          </Card>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default ProfileScreen;
