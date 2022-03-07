import { StatusBar } from 'expo-status-bar';
import React from "react-native";
import { StyleSheet, Text, View } from 'react-native';

// navigation stuff - temporarily will be in App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/infrastructure/navigation/screens/LoginScreen';
import HomeScreen from './src/infrastructure/navigation/screens/HomeScreen';
import Settings from './src/infrastructure/navigation/screens/Settings'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
