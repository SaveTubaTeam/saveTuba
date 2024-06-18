import React, { useEffect } from "react";
import styled from "styled-components/native";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

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
    <ImageBg resizeMode="cover" source={require("../../../assets/homebg.png")}>
      <ScrollView style={{ paddingTop: 50 }}>
        <TouchableOpacity
          style={style.roundButton1}
          onPress={() => {
            navigation.push("ChaptersHandler", { grade: "Grade2" }); //route.params sent into ChaptersHandler is defined here
          }}
        >
          <Text style={style.baseText}>2</Text>
        </TouchableOpacity>

        {/* <Image //removing lock icon from Grade 3
          style={{
            position: "absolute",
            right: 20,
            top: 105,
            zIndex: 1000,
            width: 60,
            height: 60,
          }}
          source={require("../../../assets/lock.png")}
        />  */}
        <TouchableOpacity
          style={style.roundButton2}
          onPress={() => navigation.push("ChaptersHandler", { grade: "Grade3" })} //route.params sent into ChaptersHandler is defined here
        >
          <Text style={style.baseText}>3</Text>
        </TouchableOpacity>

        {/* <Image //removing lock from grade 4
          style={{
            position: "absolute",
            left: 100,
            top: 230,
            zIndex: 1000,
            width: 60,
            height: 60,
          }}
          source={require("../../../assets/lock.png")}
        /> */}
        <TouchableOpacity
          style={style.roundButton1}
          onPress={() => navigation.push("ChaptersHandler", { grade: "Grade4" })} //route.params sent into ChaptersHandler is defined here
        >
          <Text style={style.baseText}>4</Text>
        </TouchableOpacity>

        {/* <Image
          style={{ //removing lock from grade 5
            position: "absolute",
            right: 20,
            top: 350,
            zIndex: 1000,
            width: 60,
            height: 60,
          }}
          source={require("../../../assets/lock.png")}
        /> */}
        <TouchableOpacity
          style={style.roundButton2}
          onPress={() => navigation.push("ChaptersHandler", { grade: "Grade5" })} //route.params sent into ChaptersHandler is defined here
        >
          <Text style={style.baseText}>5</Text>
        </TouchableOpacity>
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

const ImageBg = styled.ImageBackground`
  height: 100%;
`;

export default HomeScreen;