import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Surface } from "react-native-paper";

import ChaptersHandler from "../Grades/Handlers/ChaptersHandler";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

//in HomeView, we render the HomeScreen's background and each Grade's circular TouchableOpacity
function HomeView() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const imageMap = useSelector(state => state.imageMap.imageData); //selecting imageData from imageMap slice.

  // console.log("Home Page ==> ", imageMap);
  return ( // source={require("../../../assets/homebg.png")}
    <ImageBg resizeMode="cover" source={require("../../../assets/homeBg.jpg")}>
      <ScrollView style={{ paddingTop: 50 }}>
        <Surface style={style.roundButton1} elevation={3}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("ChaptersHandler", { grade: "Grade2" }); //route.params sent into ChaptersHandler is defined here
            }}
          >
            <Text style={style.baseText}>2</Text>
          </TouchableOpacity>
        </Surface>

        <Image //grade3 lock
          style={{
            position: "absolute",
            right: 20,
            top: 105,
            zIndex: 1000,
            width: 60,
            height: 60,
          }}
          source={require("../../../assets/lock.png")}
        /> 

        <Surface style={style.roundButton2} elevation={3}>
          <TouchableOpacity
            onPress={() => navigation.push("ChaptersHandler", { grade: "Grade3" })} //route.params sent into ChaptersHandler is defined here
          >
            <Text style={style.baseText}>3</Text>
          </TouchableOpacity>
        </Surface>

        <Image //grade4 lock
          style={{
            position: "absolute",
            left: 100,
            top: 230,
            zIndex: 1000,
            width: 60,
            height: 60,
          }}
          source={require("../../../assets/lock.png")}
        />

        <Surface style={style.roundButton1} elevation={3}>
          <TouchableOpacity
            onPress={() => navigation.push("ChaptersHandler", { grade: "Grade4" })} //route.params sent into ChaptersHandler is defined here
          >
            <Text style={style.baseText}>4</Text>
          </TouchableOpacity>
        </Surface>

        <Image
          style={{ //grade5 lock
            position: "absolute",
            right: 20,
            top: 350,
            zIndex: 1000,
            width: 60,
            height: 60,
          }}
          source={require("../../../assets/lock.png")}
        />

        <Surface style={style.roundButton2} elevation={3}>
          <TouchableOpacity
            onPress={() => navigation.push("ChaptersHandler", { grade: "Grade5" })} //route.params sent into ChaptersHandler is defined here
          >
            <Text style={style.baseText}>5</Text>
          </TouchableOpacity>
        </Surface>

      </ScrollView>
    </ImageBg>
  );
}

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Grades"
        component={HomeView}
        options={{
          headerShown: true,
          title: t("common:levels"), // Grades
          headerStyle: {
            backgroundColor: "#C6DC3B",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "BalsamiqSans_400Regular",
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
        initialParams={{ grade: "Grade2" }}
      />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  roundButton1: {
    width: 125,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    left: 25,
    borderRadius: 100,
    backgroundColor: "#CCE882"
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
    alignSelf: "flex-end"
  },
  baseText: {
    fontSize: 55,
    color: "white",
  },
});

const ImageBg = styled.ImageBackground`
  height: 100%;
`;

export default HomeScreen;