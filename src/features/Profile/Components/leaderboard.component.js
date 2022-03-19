import React from "react";
import { useNavigation } from "@react-navigation/native";
import Leaderboard from "react-native-leaderboard";

import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";

export const LeaderboardCard = () => {
  const navigation = useNavigation();

  return (
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
  );
};
