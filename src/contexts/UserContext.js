import { Text, View } from "react-native";
import React, { Component, createContext } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
    render() {
        return (
            <View>
                <Text>UserContext</Text>
            </View>
        );
    }
}

// export defualt UserContextProvider;