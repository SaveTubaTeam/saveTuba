import React from "react";
import styled from "styled-components/native";
import {
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GradeOne from "../Grades/GradeOne";
import GradeTwo from "../Grades/GradeTwo";
import GradeThree from "../Grades/GradeThree";
import GradeFour from "../Grades/GradeFour";

import { connect } from "react-redux";

const Stack = createNativeStackNavigator();

const Lock = styled.Image`
  z-index: 100;
  position: absolute;
  width: 15%;
  height: undefined;
  aspect-ratio: 1;
`;

const ImageBg = styled.ImageBackground`
  height: 100%;
`;

function HomeView() {
  const navigation = useNavigation();
  return (
    <ImageBg resizeMode="cover" source={require("../../../assets/homebg.png")}>
      <ScrollView>
        {/* Attribution: <a href="https://www.freepik.com/vectors/springtime">Springtime vector created by freepik - www.freepik.com</a> */}

        <TouchableOpacity
          style={style.roundButton1}
          onPress={() => navigation.push("GradeOne")}
        >
          <Text style={style.baseText}>1</Text>
        </TouchableOpacity>

        {/* <Lock
            style={{ top: 120, left: 330 }}
            source={require("../../../assets/lock.png")}
          /> */}
        <TouchableOpacity
          style={style.roundButton2}
          onPress={() => navigation.push("GradeTwo")}
        >
          <Text style={style.baseText}>2</Text>
        </TouchableOpacity>

        <Lock
          style={{ top: 250, left: 100 }}
          source={require("../../../assets/lock.png")}
        />
        <TouchableOpacity
          style={style.roundButton1}
          /*onPress={() => navigation.push("GradeThree")}*/
        >
          <Text style={style.baseText}>3</Text>
        </TouchableOpacity>

        <Lock
          style={{ top: 370, right: 30, alignSelf: "flex-end" }}
          source={require("../../../assets/lock.png")}
        />
        <TouchableOpacity
          style={style.roundButton2}
          /*onPress={() => navigation.push("GradeFour")}*/
        >
          <Text style={style.baseText}>4</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBg>
  );
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    //<NavigationContainer independent ={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="Grades"
        component={HomeView}
        options={{
          title: "Классы", //Levels
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
        name="GradeOne"
        component={GradeOne}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GradeTwo"
        component={GradeTwo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="GradeThree"
        component={GradeThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GradeFour"
        component={GradeFour}
        options={{ headerShown: false }}
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
    left: 25,
    borderRadius: 100,
    backgroundColor: "#CCE882",
  },
  roundButton2: {
    width: 125,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: -25,
    borderRadius: 100,
    backgroundColor: "#CCE882",
    alignSelf: "flex-end",
  },
  baseText: {
    fontSize: 50,
    color: "white",
  },
});
