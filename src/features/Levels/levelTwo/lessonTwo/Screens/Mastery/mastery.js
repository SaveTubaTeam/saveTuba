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
            Greenhouse effect can be harmful if too much carbon dioxide is
            trapped in the atmosphere. However, it can be useful for plants to
            maintain the necessary temperature and humidity level if used in the
            gardens.
          </BodyText>
          <Spacer size="large" />
          <BodyText size="subtitle">
            Today we are going to build a tiny greenhouse for the plants we
            planted in the previous lesson. It can be easily made out of the
            plastic wrap and the wooden sticks.
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
            source={require("../../../../../../../assets/greenhouse.png")}
          />
        </Container>
      </ScrollView>
    </>
  );
};

export default MasteryScreen;
