import React from "react";
import { ImageBackground, Text, Image, View, ScrollView } from "react-native";
import styled from "styled-components";
import TypingEffectText from "react-native-typing-animation-effect";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { Spacer } from "../../../../../../components/spacer.component";
import { TitleText } from "../../../../../../components/title-text.component";
import { BodyText } from "../../../../../../components/body-text.component";
import { Card } from "../../../../../../components/card.component";

const Stack = createNativeStackNavigator();

export const Container = styled.TouchableOpacity`
  flex: 0.8;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

function Start() {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={require("../../../../../../../assets/naturebackground.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Container onPress={() => navigation.navigate("SecondScreen")}>
          <ImageBackground
            source={require("../../../../../../../assets/dialog-box.png")}
            resizeMode="contain"
            style={{ padding: 78 }}
          >
            <TypingEffectText style={{ fontSize: 18 }}>
              bitch i'm tuba
            </TypingEffectText>
          </ImageBackground>
          <Image
            source={require("../../../../../../../assets/tuba2.png")}
            style={{
              width: 450,
              height: 450,
              position: "absolute",
              bottom: -175,
              right: -75,
              zIndex: -50,
            }}
          />
        </Container>
      </ImageBackground>
      {/*
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
  */}
    </>
  );
}

function SecondScreen() {
  return <Text>hi</Text>;
}

export const SummaryScreenAirPollution = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
