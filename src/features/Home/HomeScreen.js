import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";

import ChaptersHandler from "../Grades/ChaptersHandler";

const Stack = createNativeStackNavigator();

const ImageBg = styled.ImageBackground`
  height: 100%;
`;

function HomeView() {
  const navigation = useNavigation();
  return (
    <ImageBg resizeMode="cover" source={require("../../../assets/homebg.png")}>
      <ScrollView style={{ paddingTop: 50 }}>
        <TouchableOpacity
          style={style.roundButton1}
          onPress={() => {
            navigation.push("ChaptersHandler", { level: 1 });
          }}
        >
          <Text style={style.baseText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.roundButton2}
          onPress={() => navigation.push("ChaptersHandler", { level: 2 })}
        >
          <Text style={style.baseText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.roundButton1}
          onPress={() => navigation.push("ChaptersHandler", { level: 3 })}
        >
          <Text style={style.baseText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.roundButton2}
          onPress={() => navigation.push("ChaptersHandler", { level: 4 })}
        >
          <Text style={style.baseText}>4</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBg>
  );
}

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Grades"
        component={HomeView}
        options={{
          title: "Классы", // Grades
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
        name="ChaptersHandler"
        component={ChaptersHandler}
        options={{
          headerShown: false,
        }}
        initialParams={{ level: 1 }}
      />
    </Stack.Navigator>
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
