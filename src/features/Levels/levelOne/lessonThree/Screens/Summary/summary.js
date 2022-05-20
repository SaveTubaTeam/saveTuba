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
        <Container onPress={() => navigation.navigate(props.whereTo)}>
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
            text="Understanding the greenhouse effect is helpful in understanding global warming. A greenhouse is a glass house where plants grow. "
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
            text="Glass lets light in while keeping heat out. Even when it's freezing outside, the retained heat keeps the plants warm."
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
          <Storyline
            text="Similarly, the Earth's atmosphere captures solar energy. "
            whereTo="FifthScreen"
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
            text="Without these gases, too much heat would escape into space, making life impossible to sustain. "
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
            text="However, when more greenhouse gases are released into the atmosphere, more heat is trapped."
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
            text="As a result, global warming occurs."
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
            text="Warmer weather may be harmful to living organisms."
            whereTo="TenthScreen"
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
            whereTo="EleventhScreen"
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
            whereTo="EleventhScreen"
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
