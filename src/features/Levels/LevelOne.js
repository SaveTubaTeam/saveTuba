import React from "react";
import styled from "styled-components/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Touchable,
  Image,
} from "react-native";
import { SafeArea } from "../../components/safe-area.component";
// import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LessononeScreen from "../Levels/levelOne/lessonOne/lessononeScreen";
import LessontwoScreen from "../Levels/levelOne/lessonTwo/lessontwoScreen";
import LessonthreeScreen from "../Levels/levelOne/lessonThree/lessonthreeScreen";
import LessonfourScreen from "../Levels/levelOne/lessonFour/lessonfourScreen";
import LessonfiveScreen from "../Levels/levelOne/lessonFive/lessonfiveScreen";
import LessonsixScreen from "../Levels/levelOne/lessonSix/lessonsixScreen";
import LessonsevenScreen from "../Levels/levelOne/lessonSeven/lessonsevenScreen";
import LessoneightScreen from "../Levels/levelOne/lessonEight/lessoneightScreen";
import LessonnineScreen from "../Levels/levelOne/lessonNine/lessonnineScreen";

import LessonHandler from "./LessonHandler";

import { styles } from "styled-system";

const Stack = createNativeStackNavigator();
const ImageBg = styled.ImageBackground`
  flex: 1;
`;
const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.secondary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 20%;
  align-items: center;
`;

const Lock = styled.Image`
  z-index: 100;
  position: absolute;
  width: 10%;
  height: undefined;
  aspect-ratio: 1;
`;

function LeveloneView() {
  const navigation = useNavigation();
  return (
    <SafeArea style={{ backgroundColor: "#CCE882" }}>
      <ScrollView style={{ alignContent: "center" }}>
        <ImageBg source={require("../../../assets/leveloneBack.png")}>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("LessonHandler", { level: 1 })}
          >
            <Text style={style.baseText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("LessonHandler", { level: 2 })}
          >
            <Text style={style.baseText}>2</Text>
          </TouchableOpacity>

          <Lock
            style={{ top: 200, left: 350 }}
            source={require("../../../assets/lock.png")}
          />
          <TouchableOpacity
            style={style.roundButton3}
            /*onPress={() => navigation.push("LessonHandler", { level: 3 })}*/
          >
            <Text style={style.baseText}>3</Text>
          </TouchableOpacity>

          <Lock
            style={{ top: 300, left: 220 }}
            source={require("../../../assets/lock.png")}
          />

          <TouchableOpacity
            style={style.roundButton2}
            /*onPress={() => navigation.push("LessonHandler", { level: 4 })}*/
          >
            <Text style={style.baseText}>4</Text>
          </TouchableOpacity>

          <Lock
            style={{ top: 400, left: 75 }}
            source={require("../../../assets/lock.png")}
          />

          <TouchableOpacity
            style={style.roundButton1}
            /*onPress={() => navigation.push("LessonHandler", { level: 5 })}*/
          >
            <Text style={style.baseText}>5</Text>
          </TouchableOpacity>

          <Lock
            style={{ top: 500, left: 220 }}
            source={require("../../../assets/lock.png")}
          />

          <TouchableOpacity
            style={style.roundButton2}
            /*onPress={() => navigation.push("LessonHandler", { level: 6 })}*/
          >
            <Text style={style.baseText}>6</Text>
          </TouchableOpacity>

          <Lock
            style={{ top: 600, left: 350 }}
            source={require("../../../assets/lock.png")}
          />

          <TouchableOpacity
            style={style.roundButton3}
            /*onPress={() => navigation.push("LessonHandler", { level: 7 })}*/
          >
            <Text style={style.baseText}>7</Text>
          </TouchableOpacity>

          <Lock
            style={{ top: 700, left: 220 }}
            source={require("../../../assets/lock.png")}
          />

          <TouchableOpacity
            style={style.roundButton2}
            /*onPress={() => navigation.push("LessonHandler", { level: 8 })}*/
          >
            <Text style={style.baseText}>8</Text>
          </TouchableOpacity>

          <Lock
            style={{ top: 800, left: 70 }}
            source={require("../../../assets/lock.png")}
          />

          <TouchableOpacity
            style={style.roundButton1}
            /*onPress={() => navigation.push("LessonHandler", { level: 9 })}*/
          >
            <Text style={style.baseText}>9</Text>
          </TouchableOpacity>
        </ImageBg>
      </ScrollView>
    </SafeArea>
  );
}

const LevelOne = () => {
  const navigation = useNavigation();
  return (
    //<NavigationContainer independent ={false}>
    <Stack.Navigator>
      <Stack.Screen
        name="Level One"
        component={LeveloneView}
        options={{
          title: "Level 1",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#C6DC3B",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "Gabriela_400Regular",
            color: "#748816",
          },
        }}
      />
      <Stack.Screen
        name="LessonHandler"
        component={LessonHandler}
        options={{ headerShown: false }}
        initialParams={{ level: 1 }}
      />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default LevelOne;

const style = StyleSheet.create({
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 10,
    borderRadius: 100,
    backgroundColor: "#CCE882",
  },
  roundButton2: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 150,
    borderRadius: 100,
    backgroundColor: "#CCE882",
  },
  roundButton3: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 280,
    borderRadius: 100,
    backgroundColor: "#CCE882",
  },
  baseText: {
    fontSize: 50,
    color: "white",
  },
  backText: {
    fontSize: 15,
  },
});
