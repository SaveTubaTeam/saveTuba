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

function LeveloneView() {
  const navigation = useNavigation();
  return (
    <SafeArea style={{ backgroundColor: "#CCE882" }}>
      <ScrollView style={{ alignContent: "center" }}>
        {/* Attribution: <a href="https://www.freepik.com/vectors/spring-season">Spring season vector created by freepik - www.freepik.com</a> */}
        <ImageBg source={require("../../../assets/lessonbg.png")}>
          <Button onPress={() => navigation.goBack()}>
            <Text style={style.backText}>Back</Text>
          </Button>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("LessonOne")}
          >
            <Text style={style.baseText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("Two")}
          >
            <Text style={style.baseText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton3}
            onPress={() => navigation.push("Three")}
          >
            <Text style={style.baseText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("Four")}
          >
            <Text style={style.baseText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("Five")}
          >
            <Text style={style.baseText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("Six")}
          >
            <Text style={style.baseText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton3}
            onPress={() => navigation.push("Seven")}
          >
            <Text style={style.baseText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("Eight")}
          >
            <Text style={style.baseText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("Nine")}
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
        name="LessonOne"
        component={LessononeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Two"
        component={LessontwoScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Three"
        component={LessonthreeScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Four"
        component={LessonfourScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Five"
        component={LessonfiveScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Six"
        component={LessonsixScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Seven"
        component={LessonsevenScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Eight"
        component={LessoneightScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Nine"
        component={LessonnineScreen}
        options={{ headerShown: true }}
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
    color: "white",
  },
});
