import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";

import { BodyText } from "../../../components/body-text.component";

export default class StatsView extends Component {
  render() {
    return (
      <ScrollView>
        {this.props.leaderboardData.map((data) => {
          return (
            <View key={data.rank} style={styles.listItem}>
              <View
                style={[
                  this.props.styleRank(data.rank),
                  {
                    flex: 0.15,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                  },
                ]}
              >
                <BodyText color="secondary" size="body">
                  {this.props.giveMedalToRank(data.rank)}
                </BodyText>
                <BodyText color="secondary" size="body">
                  {data.rank}
                </BodyText>
              </View>

              <View style={styles.playersStats}>
                <View style={styles.playersName}>
                  <BodyText color="secondary" size="body">
                    {data.username}
                  </BodyText>
                </View>

                <View style={styles.styleListItemProps}>
                  <Image
                    style={styles.leaf}
                    source={require("../../../../assets/leaf.png")}
                  />
                  <BodyText color="secondary" size="body">
                    {data.value}
                  </BodyText>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const { width } = Dimensions.get("window") * 0.8;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    width: width,
    height: 64,
    backgroundColor: "#60BBDD",
    borderRadius: 15,
    borderColor: "#F6FEDB",
    borderWidth: 1,
  },
  playersStats: {
    flex: 1,
    flexDirection: "row",
  },
  playersName: {
    flex: 0.9,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  leaf: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  styleListItemProps: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
