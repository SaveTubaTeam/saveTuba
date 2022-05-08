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
import LessonHandler from "../Levels/LessonHandler";
import LevelOne from "../Levels/LevelOne";
import LevelTwo from "../Levels/LevelTwo";
import LevelThree from "../Levels/LevelThree";
import LevelFour from "../Levels/LevelFour";
import LevelFive from "../Levels/LevelFive";
import LevelSix from "../Levels/LevelSix";

import { connect } from "react-redux";

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
            onPress={() => navigation.push("LevelOne")}
          >
            <Text style={style.baseText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("LevelTwo")}
          >
            <Text style={style.baseText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("LevelThree")}
          >
            <Text style={style.baseText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("LevelFour")}
          >
            <Text style={style.baseText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton1}
            onPress={() => navigation.push("LevelFive")}
          >
            <Text style={style.baseText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.roundButton2}
            onPress={() => navigation.push("LevelSix")}
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
        name="LevelOne"
        component={LevelOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LevelTwo"
        component={LevelTwo}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="LevelThree"
        component={LevelThree}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LevelFour"
        component={LevelFour}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LevelFive"
        component={LevelFive}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="LevelSix"
        component={LevelSix}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(HomeScreen);

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
