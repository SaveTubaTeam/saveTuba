import 'expo-dev-client';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback } from "react";
import * as encoding from "text-encoding"; //NECESSARY IMPORT! for i18n I believe
import { LogBox, Image, Platform, UIManager } from "react-native";
import 'intl-pluralrules';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styled-components/theme";
import {
  useFonts as useScada,
  Scada_400Regular,
  Scada_700Bold,
} from "@expo-google-fonts/scada";
import {
  useFonts as useBalsamiqSans,
  BalsamiqSans_400Regular,
  BalsamiqSans_700Bold,
} from "@expo-google-fonts/balsamiq-sans";
import * as SplashScreen from 'expo-splash-screen';
import "./src/Translations/IMLocalize"; //gets cached language or default kk

import { enableScreens } from 'react-native-screens';
enableScreens();

// navigation stuff
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/Login/LoginScreen"
import AlternativeLoginScreen from './src/Login/AlternativeLoginScreen';
import RegisterScreen from "./src/Login/RegisterScreen";
import Main from "./src/Home/Main";

// Redux Imports
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

//Wrapping here at root node https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

// Stack navigators works as adding stacks, I don't believe this functions with back buttons, but it works for the login screen
const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

//The below .ignore lines apply only to LogBox on the emulator and not the actual console. Was a point of confusion for me.
LogBox.ignoreAllLogs(); //ignores warnings only!
LogBox.ignoreLogs(["Setting a timer"]); //to ignore all setTimeout warnings (firebase uses long-running timers)

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Loading fonts
  const [balsamiqSansLoaded] = useBalsamiqSans({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold,
  });

  const [scadaLoaded] = useScada({
    Scada_400Regular,
    Scada_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 500)); //artificial timeout buffer
      } catch (e) {
        console.error(e);
      } finally {
        setAppIsReady(true); // Tell the application to render
        //detecting and logging iOS/Android version information
        console.log("Current Phone:", Platform.OS, Platform.Version); //NOTE: Android will return API version, NOT OS version. Please refer to https://en.wikipedia.org/wiki/Android_version_history#Overview for correct version mapping.
      }
    }
    prepare();
  }, []);

  //copy pasted from: https://docs.expo.dev/versions/latest/sdk/splash-screen/
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady || !balsamiqSansLoaded || !scadaLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView} >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="AlternativeLogin"
                component={AlternativeLoginScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="Register"
                component={RegisterScreen}
              />
              <Stack.Screen
                options={{ headerShown: false, animation: 'fade' }}
                name="Main"
                component={Main}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
      <Toast />
    </GestureHandlerRootView>
  );
}
