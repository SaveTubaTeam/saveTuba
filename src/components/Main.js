import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Alert } from "react-native";
import { theme } from "../infrastructure/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../firebase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { signOutUser } from "../../redux/slices/userSlice";
import { useTranslation } from "react-i18next";

// Import Audio
import { Audio } from 'expo-av';

// Different Screens thus far
import HomeScreen from "../features/Home/HomeScreen";
import AccountNav from "../features/Account/accountNav/accountNav";
import ProfileScreen from "../features/Profile/Screens/ProfileScreen";
import AssignmentsPage from "../features/Home/AssignmentsPage";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, signInUser, addCompletions, addClassroom } from "../../redux/slices/userSlice";
import { useGetUserQuery, useGetCompletionsArrayQuery, useGetClassroomQuery } from "../../redux/apiSlice";
const Tab = createBottomTabNavigator();

const SaveTuba = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../assets/saveTubaSoundEffects/menuSelect(memory).wav'));
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.ui.tertiary,
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: { marginTop: 4 },
        tabBarStyle: { backgroundColor: "#C6DC3B" },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={32} />
          ),
          tabBarOnPress: (e) => {
            playSound();
            e.defaultHandler();
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="school" color={color} size={32} />
          ),
          tabBarOnPress: (e) => {
            playSound();
            e.defaultHandler();
          },
        }}
      />
      <Tab.Screen
        name="Assignments"
        component={AssignmentsPage}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="library" color={color} size={32} />
          ),
          tabBarOnPress: (e) => {
            playSound();
            e.defaultHandler();
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={AccountNav}
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={32} />
          ),
          tabBarOnPress: (e) => {
            playSound();
            e.defaultHandler();
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const navigation = useNavigation();

  let userEmail = auth.currentUser ? auth.currentUser.email : 'none';

  const { data: userData, isLoading: userLoading, isSuccess: userSuccess, isError: userError, error: userErrorMessage } = useGetUserQuery(
    { userEmail: userEmail },
    { skip: !auth.currentUser }
  );

  useEffect(() => {
    if (userSuccess) {
      dispatch(signInUser({ userData: userData }));
    } else if (userError) {
      console.error("userErrorMessage:", userErrorMessage);
      handleUserRejected();
    }
  }, [userSuccess, userError, userErrorMessage, userData]);

  const { data: completionsArray, isLoading: completionsLoading, isSuccess: completionsSuccess, isError: completionsError, error: completionsErrorMessage } = useGetCompletionsArrayQuery(
    { userEmail: userEmail },
    { skip: user.emptyUser ? true : false }
  );

  useEffect(() => {
    if (completionsSuccess) {
      dispatch(addCompletions({ completions: completionsArray }));
    } else if (completionsError) {
      console.error("completionsErrorMessage:", completionsErrorMessage);
      handleUserRejected();
    }
  }, [completionsSuccess, completionsError, completionsErrorMessage, completionsArray]);

  const { data: classroomObject, isLoading: classroomLoading, isSuccess: classroomSuccess, isError: classroomError, error: classroomErrorMessage } = useGetClassroomQuery(
    { classCode: user.classCode },
    { skip: user.emptyUser ? true : false }
  );

  useEffect(() => {
    if (classroomSuccess) {
      dispatch(addClassroom({ classroomObject: classroomObject }));
    } else if (classroomError) {
      console.error("classroomErrorMessage:", classroomErrorMessage);
      handleUserRejected();
    }
  }, [classroomSuccess, classroomError, classroomErrorMessage, classroomObject]);

  let content;
  if(userLoading || completionsLoading || classroomLoading) {
    content = (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" /> 
      </View>
    );
  } else if(userSuccess && completionsSuccess && classroomSuccess) {
    content = (
      <SaveTuba />
    );
  } else if(userError || completionsError || classroomError) {
    content = null;
  }

  const handleUserRejected = async() => {
    console.error("user queries failed in Main.js. Pushing back to Login");
    dispatch(signOutUser());
    if(GoogleSignin.getCurrentUser()) { 
      await GoogleSignin.signOut();
    }
    await auth.signOut();
    Alert.alert(t("error:uhoh"), t("error:contactsupport"));
    navigation.replace("Login");
  }

  return (
    <>
      {content}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Main;
