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

const Container = styled.TouchableOpacity`
  flex: 0.8;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const DialogBox = styled.ImageBackground``;

const TubaRight = styled.Image`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: -175px;
  right: -75px;
`;

const TubaRotated = styled.Image`
  position: absolute;
  width: 285px;
  height: 250px;
  bottom: -150px;
  left: 0;
`;

const TubaLeft = styled.Image`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: -175px;
  left: -75px;
`;

const Storyline = (props) => {
  const navigation = useNavigation();
  const bgUrl = "../../../../../../../assets/naturebackground.jpg";
  const dialogBoxUrl = "../../../../../../../assets/dialogbox.png";
  return (
    <>
      <ImageBg source={require(bgUrl)} resizeMode="cover">
        <Container
          onPress={() => navigation.navigate(props.whereTo)}
          activeOpacity="1"
        >
          <DialogBox source={require(dialogBoxUrl)} resizeMode="contain">
            <Text style={{ fontSize: 18, margin: 105 }}>{props.text}</Text>
          </DialogBox>
          {props.Tuba}
        </Container>
      </ImageBg>
    </>
  );
};

const StoryImage = (props) => {
  const navigation = useNavigation();
  const bgUrl = "../../../../../../../assets/naturebackground.jpg";
  return (
    <>
      <ImageBg source={require(bgUrl)} resizeMode="cover">
        <Container onPress={() => navigation.navigate(props.whereTo)}>
          <View style={{ alignItems: "center", padding: 10 }}>
            <Image
              style={{ width: 300, height: 280 }}
              source={require("../../../../../../../assets/sustainability.png")}
            />
          </View>
          {props.Tuba}
        </Container>
      </ImageBg>
    </>
  );
};

const SummaryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="Hi, I'm Tuba!"
            whereTo="SecondScreen"
            Tuba={
              <TubaLeft
                source={require("../../../../../../../assets/tuba1.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SecondScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="Let's learn together!"
            whereTo="ThirdScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ThirdScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="Sustainability is all about  balance."
            whereTo="FourthScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="FourthScreen" options={{ headerShown: false }}>
        {() => (
          <StoryImage
            whereTo="FifthScreen"
            Tuba={
              <TubaRotated
                source={require("../../../../../../../assets/tuba3.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="FifthScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="The environment provides us with all the resources that we require to fulfill our basic human needs, such as food, water, and housing."
            whereTo="SixthScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SixthScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="However, people are consuming more resources than they can replenish."
            whereTo="SeventhScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SeventhScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="Sustainability plays a key role in preserving the environment for future generations."
            whereTo="EighthScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="EighthScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="It means consuming resources at a rate that gives them time to replenish."
            whereTo="NinthScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="NinthScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="That is why we need to be thoughtful about the consumption of resources and conserve them."
            whereTo="NinthScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

// const SummaryScreen = () => {
//   return (
//     <>
//       <ScrollView>
//         <Container>
//           <Spacer size="large" />
//           <Card>
//             <BodyText>Sustainability is all about balance.</BodyText>
//             <View style={{ alignItems: "center", padding: 10 }}>
//               <Image
//                 style={{ width: 300, height: 300 }}
//                 source={require("../../../../../../../assets/sustainability.png")}
//               />
//             </View>
//             <BodyText>
//               The environment provides us with all the resources that we require
//               to fulfill our basic human needs, such as food, water, and
//               housing. However, people are consuming more resources than they
//               can replenish.{" "}
//             </BodyText>
//             <Spacer size="large" />
//             <BodyText>
//               Sustainability plays a key role in preserving the environment for
//               future generations; it essentially means consuming resources at a
//               rate that gives them time to replenish. That is why we need to be
//               thoughtful about the consumption of resources and conserve them.
//             </BodyText>
//           </Card>
//         </Container>
//       </ScrollView>
//     </>
//   );
// };

export default SummaryScreen;
