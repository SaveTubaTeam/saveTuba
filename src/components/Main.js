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

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, fetchUser } from "../../redux/slices/userSlice";
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

//Main handles the rendering of the SaveTuba navigation stack above, and calls fetchUser
const Main = () => {
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.user.status)
  const user = useSelector(selectCurrentUser)
  const navigation = useNavigation();
  //const [loading, setLoading] = useState(false); //for the spinner

  //here we check the status of fetchUser
  useEffect(() => {
    //defining variables for fetchUser()
    let loginType;
    let input;
    //TODO: once phone number verification is working, should update this to check for phone number logintype
      if(auth.currentUser) {
        //checking if firebase auth was with email or phone number
        if(auth.currentUser.email) {
          loginType = 'email'
          input = auth.currentUser.email
        }
        //console.log("\nloginType:", loginType, "\ninput:", input);

        if(userStatus === 'idle') {
          dispatch(fetchUser({loginType, input}));
        }
        
        if(userStatus === 'finished') {
          console.log("Main.js fetched user from store:", user)
        }

        if(userStatus === 'rejected') {
          handleFetchUserRejected(); //see below
        }
      }
  }, [userStatus, dispatch]); //had some problems keeping Main.js from rendering more than expected so there's a lot of clutter in the terminal. sorry folks

  //for 'rejected' load case inside of useEffect below
  const handleFetchUserRejected = async() => {
    console.log("fetchUser failed in Main.js. Pushing back to LoginEmail")
    await auth.signOut()
    Alert.alert("uh oh...", "that shouldn't have happened - please contact support")
    navigation.replace("LoginEmail");
  }

    //Update 4/22/24: removed Amodal global wrapper. User achievements should be implemented in a more functional way.

    //ternary operator to render a spinner while we wait for fetchUser()
    return (
      <>
        {userStatus === 'loading' ? (
          <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" /> 
          </View>
        ) : (
          <SaveTuba />
        )}
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
