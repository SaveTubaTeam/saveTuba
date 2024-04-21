import React, { Component, useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
// Theme stuff
import { theme } from "../infrastructure/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { auth } from "../../firebase";

// Different Screens thus far
import HomeScreen from "../features/Home/HomeScreen";
import AccountNav from "../features/Account/accountNav/accountNav";
import ProfileScreen from "../features/Profile/Screens/ProfileScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Redux Imports
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { store } from "../../redux/store/store";

import {
  fetchUser,
  fetchAchievements,
  addAchievement,
} from "../../redux/actions/index";
import Amodal from "./achievement-components/Amodal";

const Tab = createBottomTabNavigator();
// const store = createStore(rootReducer, applyMiddleware(thunk));

// The SaveTuba app contains the navigation containers for the main screens of the application. 
//Utilizing tab-based navigation here. https://reactnavigation.org/docs/tab-based-navigation
const SaveTuba = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: theme.colors.ui.tertiary,
          tabBarInactiveTintColor: "#fff",
          headerShown: false,
          tabBarHideOnKeyboard: true,

          tabBarIconStyle: {
            marginTop: 5,
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
              <Ionicons name="home" color={color} size={32} />
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
    </>
  );
};

const Main = () => {
  /* componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAchievements();
  } */

    // Checking if there is user loaded (Sometimes screens will load before the data is read and loaded)
    // Checks if the first time they are in, this is to make sure that if something goes wrong in registering the user, or its an old account without achievements, that they will get achievements and achievement system will work.
    // if (this.props.currentUser != undefined) {
    // try {
    //   if (
    //     this.props.achievements != null ||
    //     this.props.achievements["achievements"][0] == undefined
    //   ) {
    //     this.props.addAchievement("first-time-signing-up");
    //     // this.props.fetchAchievements();
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    // } else {
    //   console.log("Main.js >> currentUser undefined");
    // }


    //NOTE: ActivityIndicator component is a loading icon. https://reactnative.dev/docs/activityindicator
    while (auth.currentUser == undefined) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" /> 
        </View>
      );
    }

    /*try {
      if (
        this.props.achievements != null ||
        this.props.achievements["achievements"][0] == undefined
      ) {
        this.props.addAchievement("first-time-signing-up");
      }
    } catch (err) {
      console.log(err);
    }*/

    // Eventually needs to be done better, functional but maybe not efficient in terms of memory or speed... not sure
    // So, to have pop up modals that works with redux, i.e. using dispatch will allow the modal to appear was difficult when I started
    // My solution was to create a "modal" that would contain the entire application within it and show the modal screen. I forget the videos I followed but based off other peoples solutions

    //Update 4/13/24: Commented out Amodal global wrapper. User achievements should be implemented in a more functional way.
    return (
      <>
        {/* <Amodal > */}
          <SaveTuba />
        {/* </Amodal> */}
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

// Boilerplate code going to be used everywhere
// This is for loading in data from the local storage into the function, class, or components
// Look at Redux folder at the index.js to understand more
/* const mapStateToProps = (state) => ({
  currentUser: state.userState.currentUser,
  achievements: state.userAchievements.achievements,
  achievementModal: state.modals.achievementModal,
  // imageMap: state.imageMap.,
}); */

// // Boilerplate code also going to be used everywhere
// // Similar to props, but instead allows you to use functions for Redux folder
/* const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchUser, fetchAchievements, addAchievement, },
    dispatch
  ); */

export default Main;
