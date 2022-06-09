import React from "react";

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

import { useTranslation } from "react-i18next";
import "./src/components/Translations/IMLocalize";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

// navigation stuff - temporarily will be in App.js
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Different Screens thus far
import LoginScreen from "./src/features/Login/LoginScreen";

// Registration Screen
import Register from "./src/features/Login/Register";

// Redux Imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

// Import Main Redux Controller
import MainScreen from "./src/components/Main";

const store = createStore(rootReducer, applyMiddleware(thunk));

// Stack navigators works as adding stacks, I don't believe this functions with back buttons, but it works for the login screen
const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["Setting a timer"]);

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
