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
            text="Средняя температура поверхности Земли постепенно повышается. Глобальное потепление является термином для этого процесса."
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
            text="Понимание парникового эффекта полезно для понимания глобального потепления. Теплица – это стеклянный дом, в котором растут растения. "
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
            text="Стекло пропускает свет, сохраняя при этом тепло. Даже когда на улице мороз, сохраненное тепло сохраняет растения в тепле."
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
            text="Точно так же атмосфера Земли улавливает солнечную энергию. "
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
            text="Это улавливание осуществляется углекислым газом и другими газами в воздухе, известными как парниковые газы."
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
            text="Без этих газов в космос ушло бы слишком много тепла, что сделало бы невозможной жизнь."
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
            text="Однако, когда в атмосферу выбрасывается больше парниковых газов, задерживается больше тепла."
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
            text="В результате происходит глобальное потепление."
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
            text="Теплая погода может быть вредна для живых организмов."
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
            text="Это может также растопить полярные ледяные шапки. В результате уровень моря поднимется."
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
            text="Прибрежные растения, животные и сооружения окажутся под угрозой исчезновения."
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
