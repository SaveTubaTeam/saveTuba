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
    // console.warn(this.props);
    if (this.props.currentUser != undefined) {
      try {
        if (this.props.achievements != null || this.props.achievements["achievements"][0] == undefined) {
          this.props.addAchievement("first-time-signing-up");
          // this.props.fetchAchievements();
        }
      } catch (err) {
        console.log(err);
      }
    }

    // if (this.props["achievementModal"]["isOpen"]) {
    //   return <Amodal />;
    // } else {
    
    
    // Eventually needs to be done better, functional but maybe not efficient in terms of memory or speed... not sure
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

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  achievements: store.userAchievements.achievements,
  achievementModal: store.modals,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchUser, fetchAchievements, addAchievement },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
