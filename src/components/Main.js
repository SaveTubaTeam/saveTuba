import React, { useState, useEffect, memo } from "react";
import { ActivityIndicator, StyleSheet, View, Alert } from "react-native";
import { theme } from "../infrastructure/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../firebase";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { signOutUser } from "../../redux/slices/userSlice";
import { useTranslation } from "react-i18next";

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

// jac927 7/4/24 | James: I was able to remove some odd duping behaviour in Main.js where consecutive (n-many) 
// sign-ins in the same session would cause n-many Main.js component dupes. I fixed this bug by using react-navigation's 
// StackActions.replace() instead of navigation.navigate(). The .replace() method wipes the <SaveTuba /> tab navigator 
// from the stack completely. See SignOutComponent.jsx for the implementation.

const Main = () => {
  const { t } = useTranslation();
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
      console.error("userErrorMessage:", userErrorMessage);
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
    if(GoogleSignin.getCurrentUser()) { //null if not signed in with google
      await GoogleSignin.signOut();
    }
    await auth.signOut();
    /* marked for translation */
    Alert.alert(t("error:uhoh"), t("error:contactsupport"));
    navigation.replace("Login");
  }

  //Update 4/22/24: removed Amodal global wrapper. User achievements/badges should be implemented in a more functional way.
  return (
    <>
      {content}
    </>
  );
};//end of Main component

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
