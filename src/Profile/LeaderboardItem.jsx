import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { BodyText } from "../styled-components/body-text.component";

const RANK_COLORS = ["#748816", "#879e1a", "#99b41d", "#acca21", "#bcdc29", "#c3e03e", "#cae354"];

/** 
 * @param {Object} item
 * @param {int} index the index of the item within our LeaderboardCard Flatlist
*/
export default function LeaderboardItem({ item, index }) {

   let rankColor = RANK_COLORS[6]; //all items after index 5 are the same color
   if(index < 6) {
      rankColor = RANK_COLORS[index];
   }

   let medal = "";
   if(index === 0) { //first place
      medal = "🥇";
   } else if(index === 1) { //second place
      medal = "🥈";
   } else if(index === 2) { //third place
      medal = "🥉";
   }

   return (
      <View key={index} style={styles.listItem}>

         <View style={[styles.rank, { backgroundColor: rankColor }]}>
            <BodyText color="secondary" size="body">
               {`${medal}${index+1}`}
            </BodyText>
         </View>

         <View style={styles.playersStats}>
            <View style={styles.playersName}>
               <BodyText color="secondary" size="body">
                  {item.displayName}
               </BodyText>
            </View>

            <View style={styles.styleListItemProps}>
               <Image
                  style={styles.leaf} 
                  source={require("../../assets/leaf.png")} 
                  fadeDuration={100}
               />
               <BodyText color="secondary" size="body">
                  {item.userXP}
               </BodyText>
            </View>
         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   listItem: {
      flexDirection: "row",
      width: "100%",
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
   rank: {
      flex: 0.15,
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
   }
})