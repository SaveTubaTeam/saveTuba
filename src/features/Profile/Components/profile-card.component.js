/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";
import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";
import { View } from "react-native";
import { Image } from "expo-image";

export function ProfileCard() {
  const { t } = useTranslation();
  const user = useSelector(selectCurrentUser);

  let userIcon;
  if(user.photoURL) {
    userIcon = (
      <Image 
        style={{ width: 180, height: 180, borderRadius: 180, position: "absolute" }}
        source={{ uri: user.photoURL }}
      />
    )
  } else {
    userIcon = null;
  }

  return (
    <Card>
      <View style={{ alignItems: "center" }}>
      <Avatar.Icon 
        size={180} 
        icon="head" 
        backgroundColor={theme.colors.ui.tertiary} 
        style={{ marginBottom: 10, position: "relative" }}
      />
      {userIcon}
      </View>

      {/* username underneath avatar icon */}
      <TitleText size="h5">{`${user.firstName} ${user.lastName}`}</TitleText>

      <Spacer size="medium" />

      <ProgressBar />
    </Card>
  );
}

//random numbers for level thresholds. 
//if the max threshold is exceeded, the progress bar extends out of the screen to the right lol
const LEVEL_THRESHOLDS = [3000, 9000, 27000, 81000, 243000, 729000, 2187000];

function ProgressBar() {
  const user = useSelector(selectCurrentUser);
  const userXP = user.experiencePoints;
  const [ lowerIndex, upperIndex ] = findThresholdIndexes(userXP);

  let nextLevelXP = LEVEL_THRESHOLDS[lowerIndex];
  const progress = userXP / nextLevelXP; //calculating the percentage of width to be covered by lighter overlay
  return (
    <View style={{ flex: 1, alignContent: "center", alignItems: "center", marginBottom: 5 }}>
      
      <Text style={styles.italicTextStyle}>
        {`${userXP} / ${Math.ceil(nextLevelXP)} XP`}
      </Text>

      <Row style={{ justifyContent: "center" }}>

        {/* current level */}
        <Text style={styles.italicTextStyle}>{lowerIndex}</Text>

        {/* dark underlay of progress bar */}
        <View style={styles.barDarkUnderlay}>

          {/* lighter overlay which scales with variable 'progress' */}
          <View style={[styles.barLightOverlay, { width: progress * 200 }]} />

        </View>

        {/* next level */}
        <Text style={styles.italicTextStyle}>{upperIndex}</Text>
      </Row>
    </View>
  );
}

function findThresholdIndexes(number) {
  const len = LEVEL_THRESHOLDS.length
  let lowerIndex = 0;
  let upperIndex = 0;

  if(number > LEVEL_THRESHOLDS[len-1]) { //checking if our number exceeds the max
    lowerIndex = len-1;
    upperIndex = len;
    return [lowerIndex, upperIndex];
  }

  for(let i=0; i<len; i++) { //finding threshold indexes
    if(number < LEVEL_THRESHOLDS[i]) {
      lowerIndex = i;
      upperIndex = i+1;
      break;
    }
  }

  return [lowerIndex, upperIndex];
}

const Row = styled.View`
  flex-direction: row;
`;

const styles = StyleSheet.create({
  barDarkUnderlay: {
    flex: 1,
    backgroundColor: "rgba(65,128,152,1)",
    height: 10,
    width: 200,
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 9,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  }, 
  barLightOverlay: {
    flex: 1,
    backgroundColor: "rgba(96,187,221,1)",
    width: 0,
    borderRadius: 9,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  }, 
  italicTextStyle: {
    color: "rgba(65,128,152,1)", 
    fontSize: 14, 
    fontStyle: "italic" 
  }, 
  cardContainerRow: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingTop: 5, 
    paddingBottom: 5,
  }
})