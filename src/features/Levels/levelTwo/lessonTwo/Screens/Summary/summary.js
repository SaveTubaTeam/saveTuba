import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

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
  width: 350px;
  height: 350px;
  position: absolute;
  bottom: -160px;
  right: -50px;
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
        <Container onPress={() => navigation.navigate(props.next)}>
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

const SummaryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="The products of agriculture that people eat come from both plants and animals."
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
            text="Plant foods include fruits, vegetables, and grains. Meat, dairy (milk) products, and eggs are some of the most common animal foods."
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
            text="Plants and animals also supply such natural materials as cotton, flax, wool, and hides."
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
          <Storyline
            text="Workers process these materials into thread, cloth, and leather."
            next="FifthScreen"
            back="ThirdScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="FifthScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text=" Then people use the materials to make such things as clothing, draperies, shoes, furniture coverings, and many other items"
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
            text="Growing trees is another important agricultural job."
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
            text="Lumber from tree farms is used to make buildings, furniture, boats, and many other things. 
"
            next="SeventhScreen"
            back="SixthScreen"
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

export default SummaryScreen;
