import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";

import { withTranslation } from "react-i18next";
import { TitleText } from "../../../components/title-text.component";
import StatsView from "./stats-view.component";
import { Card } from "../../../components/card.component";
import { Spacer } from "../../../components/spacer.component";
import { t } from "i18next";
import { auth, db } from "../../../firebase";

class LeaderboardCard extends Component {
  state = {
    leaderboardData: [],
  };
  // sample API data
  componentDidMount() {
    // axios
    //   .get("http://dusoccer.dribbleup.com/sampleAPI/")
    //   .then((res) => res.data)
    //   .then((data) => {
    //     this.setState({
    //       leaderboardData: data.leaderboard,
    //     });
    //   });

    const docRef = doc(db, "classroom", auth.currentUser.classCode);
  }

  styleRank = (rank) => {
    if (rank === 1) {
      return {
        backgroundColor: "#748816",
      };
    } else if (rank === 2) {
      return {
        backgroundColor: "#879e1a",
      };
    } else if (rank === 3) {
      return {
        backgroundColor: "#99b41d",
      };
    } else if (rank === 4) {
      return {
        backgroundColor: "#acca21",
      };
    } else if (rank === 5) {
      return {
        backgroundColor: "#bcdc29",
      };
    } else if (rank === 6) {
      return {
        backgroundColor: "#c3e03e",
      };
    } else {
      return {
        backgroundColor: "#cae354",
      };
    }
  };

  giveMedalToRank = (rank) => {
    if (rank === 1) return "🥇";
    else if (rank === 2) return "🥈";
    else if (rank === 3) return "🥉";
  };

  render() {
    let { leaderboardData } = this.state;
    const { t, i18n } = this.props;
    return (
      <Card style={{ marginBottom: 20 }}>
        <TitleText>{t("leaderboard")}</TitleText>

        <Spacer size="large"></Spacer>

        <ScrollView style={{ height: 300 }} nestedScrollEnabled>
          <StatsView
            leaderboardData={leaderboardData}
            styleRank={this.styleRank}
            giveMedalToRank={this.giveMedalToRank}
          />
        </ScrollView>
      </Card>
    );
  }
}

export default withTranslation("profile")(LeaderboardCard);
