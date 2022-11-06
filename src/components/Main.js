import React, { Component } from "react";
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
import { fetchUser } from "../../redux/actions/index";

const Tab = createBottomTabNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
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
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
