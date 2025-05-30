import React from "react";
// import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "./AccountScreen";
import { auth } from "../../firebase";

const Stack = createNativeStackNavigator();

const AccountNav = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountNav;
