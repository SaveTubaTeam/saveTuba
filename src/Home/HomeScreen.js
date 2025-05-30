import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Surface } from "react-native-paper";
import { SafeArea } from "../styled-components/safe-area.component";
import HeaderComponent from "./HeaderComponent";
import ChaptersHandler from "../CurriculumStack/Handlers/ChaptersHandler";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/slices/userSlice";
import ClassCodeModal from "./ClassCodeModal";
import AboutModal from "./AboutModal";

const Stack = createNativeStackNavigator();

//in HomeView, we render the HomeScreen's background and each Grade's circular TouchableOpacity
function HomeView() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const classroom = useSelector(state => state.user.classroom);
  const user = useSelector(selectCurrentUser);
  const [classCodeModalVisible, setClassCodeModalVisible] = useState(false);
  const [modalAboutVisible, setModalAboutVisible] = useState(false);

  //had a hard time with this useEffect. still kinda jank for some reason - about modal opens immediately just cuz it wants to
  useEffect(() => {
    console.log("\tWELCOME MODAL LOGIC in HomeScreen.js:");
    console.log('dummyClassroom:', classroom.dummyClassroom);
    console.log('isNewUser:', user.isNewUser);
    console.log('classCode:', user.classCode)

    if ((classroom.dummyClassroom === true) && (user.classCode === 'dummyClassroom')) {
      setClassCodeModalVisible(true);
      setModalAboutVisible(false);
      console.log("force closed about modal");
    } else if(user.classCode !== 'dummyClassroom') {
      setClassCodeModalVisible(false);
      if (user.isNewUser) {
        console.log('Condition met: user.isNewUser and classroom.dummyClassroom is undefined');
        setModalAboutVisible(true);
      }
    }

  },[classroom, user]);

  return ( 
    <SafeArea>

    <HeaderComponent title={t("common:levels")} />

    <ImageBackground 
      style={styles.container}
      resizeMode="cover" 
      source={require("../../assets/homeBg.jpg")}
      fadeDuration={0}
    >
      <ScrollView style={{ paddingTop: 50 }}>

      <TouchableOpacity
        onPress={() => { navigation.push("ChaptersHandler", { grade: "Grade2" }); }}
      >
        <Surface style={styles.roundButton1} elevation={3}>
          <Text style={styles.baseText}>2</Text>
        </Surface>
      </TouchableOpacity>

        {/* <Image //grade3 lock
          style={{ position: "absolute", right: 20, top: 105, zIndex: 1000, width: 60, height: 60 }}
          source={require("../../assets/lock.png")}
        />  */}

      <TouchableOpacity
        onPress={() => navigation.push("ChaptersHandler", { grade: "Grade3" })} //route.params sent into ChaptersHandler is defined here
      >
        <Surface style={styles.roundButton2} elevation={3}>
          <Text style={styles.baseText}>3</Text>
        </Surface>
      </TouchableOpacity>

        {/* <Image //grade4 lock
          style={{ position: "absolute", left: 100, top: 230, zIndex: 1000, width: 60, height: 60 }}
          source={require("../../assets/lock.png")}
        /> */}

      <TouchableOpacity
        onPress={() => navigation.push("ChaptersHandler", { grade: "Grade4" })} //route.params sent into ChaptersHandler is defined here
      >
        <Surface style={styles.roundButton1} elevation={3}>
            <Text style={styles.baseText}>4</Text>
        </Surface>
      </TouchableOpacity>

        {/* <Image //grade5 lock
          style={{ position: "absolute", right: 20, top: 350, zIndex: 1000, width: 60, height: 60 }}
          source={require("../../assets/lock.png")}
        /> */}
      <TouchableOpacity
        onPress={() => navigation.push("ChaptersHandler", { grade: "Grade5" })} //route.params sent into ChaptersHandler is defined here
      >
        <Surface style={styles.roundButton2} elevation={3}>
            <Text style={styles.baseText}>5</Text>
        </Surface>
      </TouchableOpacity>

      </ScrollView>

      <ClassCodeModal classCodeModalVisible={classCodeModalVisible} setClassCodeModalVisible={setClassCodeModalVisible} />

      <AboutModal modalAboutVisible={modalAboutVisible} setModalAboutVisible={setModalAboutVisible} />

    </ImageBackground>
    </SafeArea>
  );
}

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Grades"
        component={HomeView}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChaptersHandler"
        component={ChaptersHandler}
        options={{ headerShown: false }}
        initialParams={{ grade: "Grade2" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container:{
    height: "100%",
  },
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
  }
});

export default HomeScreen;