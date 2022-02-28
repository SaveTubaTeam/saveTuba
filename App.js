import { StatusBar } from 'expo-status-bar';
import React from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

// navigation stuff - temporarily will be in App.js
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Different Screens thus far
import LoginScreen from './src/infrastructure/navigation/screens/LoginScreen';
import HomeScreen from './src/infrastructure/navigation/screens/HomeScreen';
import AccountScreen from './src/infrastructure/navigation/screens/AccountScreen';

// Stack navigators works as adding stacks, I don't believe this functions with back buttons, but it works for the login screen
const Stack = createNativeStackNavigator();

// Tab Navigator used for creating the bottom tab where home and other settings are visible
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Unity" component={null} /> */}
        <Tab.Screen name="Account" component={AccountScreen} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="HomePage" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
