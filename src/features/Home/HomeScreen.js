import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
// import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOne from '../Levels/LevelOne';
import ScreenTwo from '../Levels/LevelTwo';

const Stack = createNativeStackNavigator();

function HomeView() {
  const navigation = useNavigation();
  return (
    <SafeArea style={{backgroundColor: "#CCE882"}}>
      <ScrollView style={{ alignContent: "center"}}>
        <TouchableOpacity onPress={() => navigation.push("ScreenOne")}
          style={style.roundButton1}>
          <Text>LevelOne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("ScreenTwo")}>
          <Text>LevelTwo</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeArea>
  );
}

const HomeScreen = () => {
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#748816',
  },
  roundButton2: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#748816'
  }

});
