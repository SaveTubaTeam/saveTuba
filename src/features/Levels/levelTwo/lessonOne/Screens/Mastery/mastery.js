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
  padding-right: 20px;
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
            Supermarkets make grocery shopping simple.
          </BodyText>
          <BodyText size="subtitle">
            But it's easy to forget that everything we buy doesn't appear on the
            shelves by itself. Everything we consume takes time, energy, and
            resources to cultivate and make.
          </BodyText>
          <BodyText size="subtitle">
            We waste these resources when we discard food. When food waste rots
            in landfills, it emits greenhouse gases, contributing to climate
            change.
          </BodyText>
          <BodyText size="subtitle">
            So let’s try to grow our own food. Did you know that you can grow
            herbs, such as mint, coriander and basil on your windowsill?
          </BodyText>
          <Image
            style={{
              marginTop: 10,
              marginBottom: 10,
              width: "100%",
              height: undefined,
              aspectRatio: 4 / 2,
            }}
            resizeMode="contain"
            source={require("../../../../../../../assets/garden.png")}
          />
          <BodyText size="subtitle">
            Think about in what ways growing your own food helps to decrease the
            impacts of global warming. Come up with 5 points and write them
            down.
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
              Now let's start our gardening journey. Follow these steps:
            </BodyText>
            <Checklist>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" />
                <BodyText size="subtitle" color="tertiary">
                  Decide on seeds or a plant
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Find a sunny windowsill
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Find small pots for your plants.
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Get a soil mixture
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  In your pots, mix soil with some water
                </BodyText>
              </Item>
              <Item>
                <BouncyCheckbox fillColor="#C6DC3B" onPress={() => {}} />
                <BodyText size="subtitle" color="tertiary">
                  Put your seeds in
                </BodyText>
              </Item>
            </Checklist>
          </View>
          <BodyText size="subtitle">
            Don't forget to read the instructions on the seed packets about how
            far they need to be from each other and how deep you have to plant
            them. Make sure to water your plants regularly and that they get
            enough sunlight.
          </BodyText>
          <BodyText size="subtitle">
            Show a photo of your garden to your teacher.
          </BodyText>
          <BodyText size="subtitle">
            Congratulations, you just helped to decrease the amount of
            greenhouse gases in the atmosphere!
          </BodyText>
        </Container>
      </ScrollView>
    </>
  );
};

export default MasteryScreen;
