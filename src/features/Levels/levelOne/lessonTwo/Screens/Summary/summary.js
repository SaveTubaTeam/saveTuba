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
  margin-bottom: 20px;
`;

export const SummaryScreenAirPollution = () => {
  return (
    <>
      <ScrollView>
        <Container>
          <Spacer size="large" />
          <Card>
            <BodyText>Air Pollution is not great.</BodyText>
            <View style={{ alignItems: "center", padding: 10 }}>
              <Image
                style={{ width: 300, height: 300 }}
                source={require("../../../../../../../assets/sustainability.png")}
              />
            </View>
            <BodyText>
              Air pollution is the contamination of air due to the presence of
              substances in the atmosphere that are harmful to the health of
              humans and other living beings, or cause damage to the climate or
              to materials. There are many different types of air pollutants,
              such as gases, particulates, and biological molecules.{" "}
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
