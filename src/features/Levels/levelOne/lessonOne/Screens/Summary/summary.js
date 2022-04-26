import React from "react";
import { Image, View, ScrollView } from "react-native";
import styled from "styled-components";

import { Spacer } from "../../../../../../components/spacer.component";
import { TitleText } from "../../../../../../components/title-text.component";
import { BodyText } from "../../../../../../components/body-text.component";
import { Card } from "../../../../../../components/card.component";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SummaryScreen = () => {
  return (
    <>
      <ScrollView>
        <Container>
          <Spacer size="large" />
          <Card>
            <BodyText>Sustainability is all about balance.</BodyText>
            <View style={{ alignItems: "center", padding: 10 }}>
              <Image
                style={{ width: 300, height: 300 }}
                source={require("../../../../../../../assets/sustainability.png")}
              />
            </View>
            <BodyText>
              The environment provides us with all the resources that we require
              to fulfill our basic human needs, such as food, water, and
              housing. However, people are consuming more resources than they
              can replenish.{" "}
            </BodyText>
            <Spacer size="large" />
            <BodyText>
              Sustainability plays a key role in preserving the environment for
              future generations; it essentially means consuming resources at a
              rate that gives them time to replenish. That is why we need to be
              thoughtful about the consumption of resources and conserve them.
            </BodyText>
          </Card>
        </Container>
      </ScrollView>
    </>
  );
};

export default SummaryScreen;
