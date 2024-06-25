import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator, View, StyleSheet } from "react-native";
import { TitleText } from "../../../components/title-text.component";
import { Card } from "../../../components/card.component";
import { Spacer } from "../../../components/spacer.component";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LeaderboardItem from "./LeaderboardItem";
import { db } from "../../../../firebase";

export default function LeaderboardCard() {
  const [leaderboard, setLeaderboard] = useState(null);
  const { t } = useTranslation();
  const classCode = useSelector(state => state.user.classroom.classCode);

  //leaderboard listener. see: https://firebase.google.com/docs/firestore/query-data/listen#web_9
  //This will receive a new query snapshot every time the query results change (that is, when a document is added, removed, or modified).
  useEffect(() => {
    const unsubscribe = db.collection('users').where("classCode", '==', classCode)
        .onSnapshot((querySnapshot) => {

          if(querySnapshot.size === 0) { //guard clause for empty snapshot
            console.log("LEADERBOARD SNAPSHOT IS EMPTY");
            return;
          }

          let leaderboardArray = [];
          querySnapshot.forEach((user) => {
            let userDoc = user.data();
            let userXP = userDoc.experiencePoints;
            let displayName = `${userDoc.firstName} ${userDoc.lastName.charAt(0)}.`

            leaderboardArray.push({ userXP: userXP, displayName: displayName });
          });
          leaderboardArray.sort((a, b) => b.userXP - a.userXP); //largest xp comes first
          console.log("\t\tLEADERBOARD:", leaderboardArray);
          setLeaderboard(leaderboardArray);

        }, (error) => {
          console.error("ERROR in Leaderboard listener:", error);
        });

    //cleanup function
    return () => { 
      unsubscribe(); 
      console.log("-------- unsubscribed from leaderboard listener --------")
    } // Unsubscribe when component unmounts (here this means on signout or when hmr reloading)
  }, []);

  let content;
  if(leaderboard) {
    content = (
      leaderboard.map((item, index) => {
        return ( <LeaderboardItem item={item} index={index} key={index}/> );
      })
    )
  } else { //loading leaderboard
    content = (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="rgba(65, 128, 152, 1)" style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}/> 
      </View>
    )
  }

  return (
    <Card style={{ marginBottom: 20 }}>
      <TitleText>{t("common:leaderboard")}</TitleText>

      <Spacer size="large"></Spacer>

      <ScrollView style={{ height: 300 }} nestedScrollEnabled={true} >
        {content}
      </ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    justifyContent: 'center',
  }
})