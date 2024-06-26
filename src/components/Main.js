import React, { Component, useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Alert } from "react-native";
// Theme stuff
import { theme } from "../infrastructure/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../firebase";

// Different Screens thus far
import HomeScreen from "../features/Home/HomeScreen";
import AccountNav from "../features/Account/accountNav/accountNav";
import ProfileScreen from "../features/Profile/Screens/ProfileScreen";
import AssignmentsPage from "../features/Home/AssignmentsPage";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, signInUser, addCompletions, addClassroom } from "../../redux/slices/userSlice";
import { useGetUserQuery, useGetCompletionsArrayQuery, useGetClassroomQuery } from "../../redux/apiSlice";

const Tab = createBottomTabNavigator();
// const store = createStore(rootReducer, applyMiddleware(thunk));

// The SaveTuba app contains the navigation containers for the main screens of the application. 
//Utilizing tab-based navigation here. https://reactnavigation.org/docs/tab-based-navigation
const SaveTuba = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.ui.tertiary,
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarStyle: {
          backgroundColor: "#C6DC3B",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        /* store={store} */
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={32} />
          ),
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
        }}
      />
    </Tab.Navigator>
  );
};

//Main handles the rendering of the SaveTuba navigation stack above
const Main = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser);
  const navigation = useNavigation();

  // Define userEmail only if auth.currentUser is defined
  let userEmail = auth.currentUser ? auth.currentUser.email : 'none';

  // Execute useGetUserQuery only when auth.currentUser is defined
  const { data: userData, isLoading: userLoading, isSuccess: userSuccess, isError: userError, error: userErrorMessage } = useGetUserQuery(
    { userEmail: userEmail },
    { skip: !auth.currentUser }
  );

  useEffect(() => {
    if (userSuccess) {
      dispatch(signInUser({ userData: userData }));
    } else if (userError) {
      console.error(userErrorMessage);
      handleUserRejected();
    }
  }, [userSuccess, userError, userErrorMessage, userData]);

  // Execute useGetCompletionsArrayQuery only when userData has been successfully dispatched to store from the above useEffect
  const { data: completionsArray, isLoading: completionsLoading, isSuccess: completionsSuccess, isError: completionsError, error: completionsErrorMessage } = useGetCompletionsArrayQuery(
    { userEmail: userEmail },
    { skip: user.emptyUser ? true : false }
  );

  useEffect(() => {
    if (completionsSuccess) {
      dispatch(addCompletions({ completions: completionsArray }));
    } else if (completionsError) {
      console.error(completionsErrorMessage);
      handleUserRejected();
    }
  }, [completionsSuccess, completionsError, completionsErrorMessage, completionsArray]);

  // Execute useGetClassroomQuery only when userData has been successfully dispatched to store.
  const { data: classroomObject, isLoading: classroomLoading, isSuccess: classroomSuccess, isError: classroomError, error: classroomErrorMessage } = useGetClassroomQuery(
    { classCode: user.classCode },
    { skip: user.emptyUser ? true : false }
  );

  useEffect(() => {
    if (classroomSuccess) {
      dispatch(addClassroom({ classroomObject: classroomObject }));
    } else if (classroomError) {
      console.error(classroomErrorMessage);
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
    console.error("user queries failed in Main.js. Pushing back to LoginEmail")
    await auth.signOut();
    Alert.alert("uh oh...", "that shouldn't have happened - please contact support")
    navigation.replace("LoginEmail");
  }

    //Update 4/22/24: removed Amodal global wrapper. User achievements/badges should be implemented in a more functional way.

  return (
    <>
      {content}
    </>
  );
}//end of Main component

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
