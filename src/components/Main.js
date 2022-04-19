import React, { Component } from "react";
import { Text, View } from "react-native";

// Theme stuff
import { theme } from "../infrastructure/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

// Different Screens thus far
import HomeScreen from "../features/Home/HomeScreen";
import AccountScreen from "../features/Account/Screens/AccountScreen";
import ProfileScreen from "../features/Profile/Screens/ProfileScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Redux Imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../../redux/reducers";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../redux/actions/index";

const Tab = createBottomTabNavigator();

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
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={32} />
            ),
          }}
        />
        {/* <Tab.Screen name="Unity" component={null} /> */}
        <Tab.Screen
          name="Settings"
          component={AccountScreen}
          options={{
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
