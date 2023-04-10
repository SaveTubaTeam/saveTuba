import React, { Component, useState } from "react";
// Theme stuff
import { theme } from "../infrastructure/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

// Different Screens thus far
import HomeScreen from "../features/Home/HomeScreen";
import AccountNav from "../features/Account/accountNav/accountNav";
import ProfileScreen from "../features/Profile/Screens/ProfileScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Redux Imports
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../redux/reducers";
import thunk from "redux-thunk";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchUser,
  fetchAchievements,
  addAchievement,
} from "../../redux/actions/index";

import Amodal from "./achievement-components/Amodal";

const Tab = createBottomTabNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

// The SaveTuba app contains the navigation containers for the main screens of the application. 
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
          store={store}
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

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAchievements();
  }

  render() {
    // Checking if there is user loaded (Sometimes screens will load before the data is read and loaded)
    // Checks if the first time they are in, this is to make sure that if something goes wrong in registering the user, or its an old account without achievements, that they will get achievements and achievement system will work.
    if (this.props.currentUser != undefined) {
      try {
        if (
          this.props.achievements != null ||
          this.props.achievements["achievements"][0] == undefined
        ) {
          this.props.addAchievement("first-time-signing-up");
          // this.props.fetchAchievements();
        }
      } catch (err) {
        console.log(err);
      }
    }

    // Eventually needs to be done better, functional but maybe not efficient in terms of memory or speed... not sure
    // So, to have pop up modals that works with redux, i.e. using dispatch will allow the modal to appear was difficult when I started
    // My solution was to create a "modal" that would contain the entire application within it and show the modal screen. I forget the videos I followed but based off other peoples solutions
    return (
      <>
        <Amodal children={<SaveTuba />}>
          {/* <Tab.Navigator
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
              store={store}
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
          </Tab.Navigator> */}
        </Amodal>
      </>
    );
  }
}
// }

// Boilerplate code going to be used everywhere
// This is for loading in data from the local storage into the function, class, or components
// Look at Redux folder at the index.js to understand more
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  achievements: store.userAchievements.achievements,
  achievementModal: store.modals,
});

// Boilerplate code also going to be used everywhere
// Similar to props, but instead allows you to use functions for Redux folder
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchUser, fetchAchievements, addAchievement },
    dispatch
  );

// Boilerplate code, if you want to use the local storage (Redux), than this needs to be the export statement of the component.
// If you don't need the data or functions than just write null in their places below.
export default connect(mapStateToProps, mapDispatchToProps)(Main);
