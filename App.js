import React from "react-native";

// Theme stuff
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

// Fonts
import {
  useFonts as useGabriela,
  Gabriela_400Regular,
} from "@expo-google-fonts/gabriela";
import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import i18n from "./src/components/Translations/i18n";
// navigation stuff - temporarily will be in App.js
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Different Screens thus far
import LoginScreen from "./src/features/Login/LoginScreen";
import HomeScreen from "./src/features/Home/HomeScreen";
import AccountScreen from "./src/features/Account/Screens/AccountScreen";
import ProfileScreen from "./src/features/Profile/Screens/ProfileScreen";

// Registration Screen
import Register from "./src/features/Login/Register";

// Redux Imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));

// Import Main Redux Controller
import MainScreen from "./src/components/Main";

// Stack navigators works as adding stacks, I don't believe this functions with back buttons, but it works for the login screen
const Stack = createNativeStackNavigator();

// Tab Navigator used for creating the bottom tab where home and other settings are visible
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default function App() {
  const [gabrielaLoaded] = useGabriela({
    Gabriela_400Regular,
  });

  const [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
  });

  if (!gabrielaLoaded || !ralewayLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="HomePage"
              component={Home}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
