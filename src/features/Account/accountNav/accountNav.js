import React from "react";
import AccountScreen from "../Screens/AccountScreen";
import CameraScreen from "../Screens/CameraScreen";

import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";

const AccountStack = createStackNavigator();

export const AccountNavigator = ({ route, navigation }) => {
    return (
        <AccountStack.Navigator
            headerMode="screen"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <AccountStack.Screen
                options={{
                    header: () => null,
                }}
                name="Account"
                component={AccountScreen}
            />
            <AccountStack.Screen name="Camera" component={CameraScreen} />
        </AccountStack.Navigator>
    );
};