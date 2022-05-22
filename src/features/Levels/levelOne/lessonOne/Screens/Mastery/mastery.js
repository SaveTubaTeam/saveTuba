import React from "react";
import { Image, ScrollView, View } from "react-native";
import styled from "styled-components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { render } from "react-dom";
import { BodyText } from "../../../../../../components/body-text.component";
import { TitleText } from "../../../../../../components/title-text.component";
import { Spacer } from "../../../../../../components/spacer.component";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Checklist = styled.View`
  margin-top: 20px;
  margin: 20px;
`;
const Item = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const MasteryScreen = () => {
  return (
    <>
      <ScrollView directionalLockEnabled={true}>
        <Container>
          <BodyText size="subtitle">
            Come up with 3 sustainable habits that improve the environment.
            Create a habit tracker for a month where you will track your
            progress.
          </BodyText>
          <Image
            style={{
              marginTop: 10,
              marginBottom: 10,
              width: "100%",
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode="contain"
            source={require("../../../../../../../assets/habittracker.png")}
          />
          <BodyText size="subtitle">
            Feel free to draw illustrations, make origami figures and glue them
            to the poster, decorate it with natural material such as dry leaves,
            flowers, etc. Be creative! After you are done decorating, put your
            Habit Tracker on the wall.
          </BodyText>
          <Spacer size="large" />
          <View
            style={{
              backgroundColor: "#748816",
              borderRadius: 10,
              width: "95%",
              padding: 10,
              marginBottom: 20,
            }}
          >
            <BodyText size="subtitle" color="tertiary">
              Show four pictures to your teacher:
            </BodyText>
            <Checklist>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" />
                <BodyText size="subtitle" color="tertiary">
                  Your Habit Tracker
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  You performing activity 1
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  You performing activity 1
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  You performing activity 1
                </BodyText>
              </Item>
            </Checklist>
          </View>
          <BodyText size="subtitle">
            It is ok if you forget to do one of the activities every once in a
            while, habits don't form overnight :) Do your best and share your
            amazing new habits with your parents and classmates! What did they
            come up with?
          </BodyText>
        </Container>
      </ScrollView>
    </>
  );
};

export default MasteryScreen;
