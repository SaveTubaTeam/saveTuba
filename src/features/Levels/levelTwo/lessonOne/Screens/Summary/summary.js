import React from "react";
import { Text } from "react-native";
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
  bottom: -165px;
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
        <Container>
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
            text="The Earth's average surface temperature is gradually rising. Global warming is the term for this process."
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
            text="Understanding the greenhouse effect is helpful in understanding global warming. A greenhouse is a glass house where plants grow. "
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
            text="Glass lets light in while keeping heat out. Even when it's freezing outside, the retained heat keeps the plants warm."
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
            text="Similarly, the Earth's atmosphere captures solar energy. "
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
            text="This trapping is accomplished by carbon dioxide and other gases in the air, collectively known as greenhouse gases."
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
            text="Without these gases, too much heat would escape into space, making life impossible to sustain. "
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
            text="However, when more greenhouse gases are released into the atmosphere, more heat is trapped."
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
            text="As a result, global warming occurs."
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
            text="Warmer weather may be harmful to living organisms."
            next="TenthScreen"
            back="EighthScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="TenthScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="It might also melt the polar ice caps. Sea levels would rise as a result of this."
            next="EleventhScreen"
            back="NinthScreen"
            Tuba={
              <TubaRight
                source={require("../../../../../../../assets/tuba2.png")}
              />
            }
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="EleventhScreen" options={{ headerShown: false }}>
        {() => (
          <Storyline
            text="Coastal plants, animals, and structures would be endangered."
            next="EleventhScreen"
            back="TenthScreen"
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
