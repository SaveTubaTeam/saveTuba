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

// navigation stuff - temporarily will be in App.js
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Different Screens thus far
import LoginScreen from "./src/infrastructure/navigation/screens/LoginScreen";
import HomeScreen from "./src/infrastructure/navigation/screens/HomeScreen";
import AccountScreen from "./src/infrastructure/navigation/screens/AccountScreen";

// Stack navigators works as adding stacks, I don't believe this functions with back buttons, but it works for the login screen
const Stack = createNativeStackNavigator();

// Tab Navigator used for creating the bottom tab where home and other settings are visible
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="Unity" component={null} /> */}
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
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
