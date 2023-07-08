import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as encoding from "text-encoding";
import { LogBox } from "react-native";
import setMap from "./src/features/Grades/Components/imagesComponent";

// Theme stuff
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
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

// Translation imports
import { useTranslation } from "react-i18next";
import "./src/components/Translations/IMLocalize";

// navigation stuff - temporarily will be in App.js
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Different Screens thus far
import LoginScreen from "./src/features/Login/LoginScreen";
import Register from "./src/features/Login/Register";
import RegisterTeacher from "./src/features/Login/RegisterTeacher";
import MainScreen from "./src/components/Main";

// Redux Imports
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

// const store = configureStore({reducer: rootReducer, middleware: applyMiddleware(thunk)});

// Stack navigators works as adding stacks, I don't believe this functions with back buttons, but it works for the login screen
const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["Setting a timer"]);

function Home() {
  // setMap();
  return <MainScreen />;
}

export default function App() {


  // Loading fonts
  const [balsamiqSansLoaded] = useBalsamiqSans({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold,
  });

  const [scadaLoaded] = useScada({
    Scada_400Regular,
    Scada_700Bold,
  });

  if (!balsamiqSansLoaded || !scadaLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* Put provider here */}
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
                name="RegisterTeacher"
                component={RegisterTeacher}
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
    </>
  );
}
