import React from "react";
import styled from "styled-components/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeArea } from "../../components/safe-area.component";
// import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOne from "../Levels/LevelOne";
import ScreenTwo from "../Levels/LevelTwo";
import ScreenThree from "../Levels/LevelThree";
import ScreenFour from "../Levels/LevelFour";
import ScreenFive from "../Levels/LevelFive";
import ScreenSix from "../Levels/LevelSix";

const Stack = createNativeStackNavigator();

const ImageBg = styled.ImageBackground`
  flex: 1;
`;

function HomeView() {
  const navigation = useNavigation();
  return (
    <SafeArea style={{ backgroundColor: "#CCE882" }}>
      <ScrollView style={{ alignContent: "center" }}>
        {/* Attribution: <a href="https://www.freepik.com/vectors/springtime">Springtime vector created by freepik - www.freepik.com</a> */}
        <ImageBg source={require("../../../assets/homebg.png")}>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("ScreenOne")}
          >
            <Text style={style.baseText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("ScreenTwo")}
          >
            <Text style={style.baseText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("ScreenThree")}
          >
            <Text style={style.baseText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("ScreenFour")}
          >
            <Text style={style.baseText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("ScreenFive")}
          >
            <Text style={style.baseText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("ScreenSix")}
          >
            <Text style={style.baseText}>6</Text>
          </TouchableOpacity>
        </ImageBg>
      </ScrollView>
    </SafeArea>
  );
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    //<NavigationContainer independent ={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="Levels"
        component={HomeView}
        options={{
          title: "Levels",
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
        name="ScreenOne"
        component={ScreenOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ScreenFour"
        component={ScreenFour}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ScreenFive"
        component={ScreenFive}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ScreenSix"
        component={ScreenSix}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  roundButton1: {
    width: 125,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 10,
    borderRadius: 100,
    backgroundColor: "#CCE882",
  },
  roundButton2: {
    width: 125,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 255,
    borderRadius: 100,
    backgroundColor: "#CCE882",
  },
  baseText: {
    fontSize: 50,
    color: "white",
  },
});
