import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
// import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOne from '../Levels/LevelOne';
import ScreenTwo from '../Levels/LevelTwo';
import ScreenThree from '../Levels/LevelThree';
import ScreenFour from '../Levels/LevelFour';
import ScreenFive from '../Levels/LevelFive';
import ScreenSix from '../Levels/LevelSix';


const Stack = createNativeStackNavigator();

const ImageBg = styled.ImageBackground`
  flex: 1;
`;

function HomeView() {
  const navigation = useNavigation();
  return (
    <SafeArea style={{backgroundColor: "#CCE882"}}>
      <ScrollView style={{ alignContent: "center"}}>
      <ImageBg source={require("../../../assets/homepagebackground.png")}>
        <TouchableOpacity style={style.roundButton1} onPress={() => navigation.push("ScreenOne")}>
          <Text>LevelOne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("ScreenTwo")}>
          <Text>LevelTwo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.roundButton1} onPress={() => navigation.push("ScreenThree")}>
          <Text>LevelThree</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("ScreenFour")}>
          <Text>LevelFour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.roundButton1} onPress={() => navigation.push("ScreenFive")}>
          <Text>LevelFive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("ScreenSix")}>
          <Text>LevelSix</Text>
        </TouchableOpacity>
        </ImageBg>
      </ScrollView>
    </SafeArea>
  );
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <NavigationContainer independent ={true}>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component = {HomeView}
          options={{ headerShown: true}}
        />
        <Stack.Screen
          name = "ScreenOne"
          component = {ScreenOne}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name = "ScreenTwo"
          component = {ScreenTwo}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name = "ScreenThree"
          component = {ScreenThree}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name = "ScreenFour"
          component = {ScreenFour}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name = "ScreenFive"
          component = {ScreenFive}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name = "ScreenSix"
          component = {ScreenSix}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  roundButton1: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    left: 10,
    borderRadius: 100,
    backgroundColor: '#C6DC3B'
  },
  roundButton2: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    left: 255,
    borderRadius: 100,
    backgroundColor: '#C6DC3B'
  }
});