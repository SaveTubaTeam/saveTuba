import 'expo-dev-client';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from 'react';
import { useEffect, useState, useCallback } from "react";
import * as encoding from "text-encoding";
import { LogBox, View, ActivityIndicator, Text } from "react-native";
import 'intl-pluralrules';
// Theme stuff
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts } from 'expo-font';
import { Scada_400Regular, Scada_700Bold } from "@expo-google-fonts/scada";
import { BalsamiqSans_400Regular, BalsamiqSans_700Bold } from "@expo-google-fonts/balsamiq-sans";
import * as SplashScreen from 'expo-splash-screen';

// Translation imports
import { useTranslation } from "react-i18next";
import "./src/components/Translations/IMLocalize"; //gets either cached language or phone's locale language

// navigation stuff
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from 'react-native-screens';
enableScreens();

// import 'react-native-reanimated';

// Different Screens thus far
import LoginScreenEmail from "./src/features/Login/LoginScreenEmail"
import RegisterScreen from "./src/features/Login/RegisterScreen";
import MainScreen from "./src/components/Main";

// Redux Imports
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

//ReorderHandler import. Wrapping here at root node https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//Platform import to detect and log current iOS/Android version
import { Platform, UIManager } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//Trying to implement DraggableFlatList. See App.tsx in https://snack.expo.dev/@computerjazz/draggable-flatlist-examples
/* if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
} */

// Stack navigators works as adding stacks, I don't believe this functions with back buttons, but it works for the login screen
const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

//LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["Setting a timer"]); //to ignore all setTimeout warnings (firebase uses long-running timers)

function Home() {
  return <MainScreen />;
}

export default function App() {
  //const [appIsReady, setAppIsReady] = useState(false);

  // Loading fonts
  let [fontsLoaded, error] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold,
    Scada_400Regular,
    Scada_700Bold,
  });

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       await new Promise(resolve => setTimeout(resolve, 3000)); //artificial timeout
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true); // Tell the application to render
  //     }
  //   }
  //   prepare();
  // }, []);

  //copy pasted from: https://docs.expo.dev/versions/latest/sdk/splash-screen/
  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (error) {
    return <Text>Error loading fonts: {error.message}</Text>;
  }

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  //detecting and logging iOS/Android version information
  console.log("Current Phone:", Platform.OS, Platform.Version); //NOTE: Android will return API version, NOT OS version. Please refer to https://en.wikipedia.org/wiki/Android_version_history#Overview for correct version mapping.

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                name="LoginEmail"
                component={LoginScreenEmail}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={RegisterScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="HomePage"
                component={Home}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
