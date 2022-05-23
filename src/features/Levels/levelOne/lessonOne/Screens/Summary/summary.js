import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Container = styled.View`
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
  width: 350px;
  height: 350px;
  position: absolute;
  bottom: -160px;
  right: -50px;
`;

const TubaRotated = styled.Image`
  position: absolute;
  width: 285px;
  height: 250px;
  bottom: -150px;
  left: 0;
`;

const TubaLeft = styled.Image`
  width: 350px;
  height: 350px;
  position: absolute;
  bottom: -160px;
  left: -50px;
`;

const Forward = styled.TouchableOpacity`
  position: absolute;
  height: 40px;
  width: 40px;
  right: 10px;
`;

const Back = styled.TouchableOpacity`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 10px;
`;

const Btn = styled.Image`
  width: 100%;
  height: 100%;
`;

const Storyline = (props) => {
  const navigation = useNavigation();
  const bgUrl = "../../../../../../../assets/naturebackground.jpg";
  const dialogBoxUrl = "../../../../../../../assets/dialogbox.png";
  const forwardButtonUrl = "../../../../../../../assets/right.png";
  const backButtonUrl = "../../../../../../../assets/left.png";
  return (
    <>
      <ImageBg source={require(bgUrl)} resizeMode="cover">
        <Container activeOpacity="1">
          <Forward
            style={{ zIndex: 100 }}
            onPress={() => navigation.navigate(props.next)}
          >
            <Btn source={require(forwardButtonUrl)} />
          </Forward>

          <Back
            style={{ zIndex: 100 }}
            onPress={() => navigation.navigate(props.back)}
          >
            <Btn source={require(backButtonUrl)} />
          </Back>

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
  const forwardButtonUrl = "../../../../../../../assets/right.png";
  const backButtonUrl = "../../../../../../../assets/left.png";
  return (
    <>
      <ImageBg source={require(bgUrl)} resizeMode="cover">
        <Container>
          <Forward
            style={{ zIndex: 100 }}
            onPress={() => navigation.navigate(props.next)}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require(forwardButtonUrl)}
            />
          </Forward>

          <Back
            style={{ zIndex: 100 }}
            onPress={() => navigation.navigate(props.back)}
          >
            <Image
              style={{ height: 40, width: 40 }}
              source={require(backButtonUrl)}
            />
          </Back>

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
            text="Привет, я Тuba!" //Hi, I'm Tuba!
            next="SecondScreen"
            back="Start"
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
            text="Давайте учиться вместе!" //Let's learn together!
            next="ThirdScreen"
            back="Start"
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
            text="Устойчивое развитие — это баланс" //Sustainability is all about  balance.
            next="FourthScreen"
            back="SecondScreen"
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
            next="FifthScreen"
            back="ThirdScreen"
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
            text="Окружающая среда обеспечивает нас всеми ресурсами, необходимыми для удовлетворения наших основных человеческих потребностей, таких как пища, вода и жилье" //The environment provides us with all the resources that we require to fulfill our basic human needs, such as food, water, and housing.
            next="SixthScreen"
            back="FourthScreen"
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
            text="Однако люди потребляют больше ресурсов, чем могут восполнить." //However, people consume more resources than they can replenish.
            next="SeventhScreen"
            back="FifthScreen"
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
            text="Устойчивое развитие играет ключевую роль в сохранении окружающей среды для будущих поколений." //Sustainability plays a key role in preserving the environment for future generations.
            next="EighthScreen"
            back="SixthScreen"
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
            text="Это означает потребление ресурсов со скоростью, которая дает им время для восполнения." //It means consuming resources at a rate that gives them time to replenish.
            next="NinthScreen"
            back="SeventhScreen"
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
            text="Вот почему мы должны думать о потреблении ресурсов и экономить их." //That is why we need to be thoughtful about the consumption of resources and conserve them.
            next="NinthScreen"
            back="EighthScreen"
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
