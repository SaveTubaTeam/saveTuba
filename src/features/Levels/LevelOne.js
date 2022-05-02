import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Touchable, Image } from "react-native";
import { SafeArea } from "../../components/safe-area.component";
// import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { styles } from "styled-system";

import LessonHandler from "./LessonHandler";

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

function LeveloneView(){
  const navigation = useNavigation();
  return(
    <SafeArea style={{backgroundColor: "#CCE882"}}>
      <ScrollView style={{ alignContent: "center"}}>
        <ImageBg source={require("../../../assets/leveloneBack.png")}>
          <Button onPress={() => navigation.goBack()}>
            <Text style={style.backText}>Back</Text>
          </Button>
          <TouchableOpacity style={style.roundButton1} onPress={() => navigation.push("LessonHandler", {level: 1 })}>
            <Text style={style.baseText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("LessonHandler", {level: 2 })}>
            <Text style={style.baseText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton3} onPress={() => navigation.push("LessonHandler", {level: 3 })}>
            <Text style={style.baseText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("LessonHandler", {level: 4 })}>
            <Text style={style.baseText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton1} onPress={() => navigation.push("LessonHandler", {level: 5 })}>
            <Text style={style.baseText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("LessonHandler", {level: 6 })}>
            <Text style={style.baseText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton3} onPress={() => navigation.push("LessonHandler", {level: 7 })}>
            <Text style={style.baseText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton2} onPress={() => navigation.push("LessonHandler", {level: 8 })}>
            <Text style={style.baseText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.roundButton1} onPress={() => navigation.push("LessonHandler", {level: 9 })}>
            <Text style={style.baseText}>9</Text>
          </TouchableOpacity>
        </ImageBg>
      </ScrollView>
    </SafeArea>
  );
}

const LevelOne = () => {
  const navigation = useNavigation();
  return(
    <NavigationContainer independent ={true}>
      <Stack.Navigator>
        <Stack.Screen
            name = "Level One"
            component = {LeveloneView}
            options={{ headerShown: true,
              headerStyle: {
                backgroundColor: '#C6DC3B',
              }
            }}
          />
          <Stack.Screen
            name = "LessonHandler"
            component = {LessonHandler}
            options={{headerShown: false}}
            initialParams={{level: 1}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LevelOne;

const style = StyleSheet.create({
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    left: 10,
    borderRadius: 100,
    backgroundColor: '#CCE882'
  },
  roundButton2: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    left: 150,
    borderRadius: 100,
    backgroundColor: '#CCE882'
  },
  roundButton3: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    left: 280,
    borderRadius: 100,
    backgroundColor: '#CCE882'
  },
  baseText: {
    fontSize: 50,
    color: 'white',
  },
  backText: {
    fontSize: 15,
    color: 'white',
  }
});
