import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styled from "styled-components/native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LevelComponent from "./LevelComponent";

import { connect } from 'react-redux';

import SummaryScreen from "./levelOne/lessonOne/Screens/Summary/summary";
import { AdventureImages } from './IMAGES';

const Stack = createNativeStackNavigator();

// want to import data here?
import { LevelOneTest, LevelTwoTest } from "./TestLevel";



function TestScreen({navigation, route}) {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} />
      
    </View>
  );
}

function MultipleChoice({navigation, route}) {
  // const { data } = route.params.data;
  // console.log(data);
  // console.warn(require(data));
  return (
    <View>
      <Button onPress={() => navigation.goBack()} />
      <Text>Multiple Choice Screen </Text>
    </View>
  );
}

function LevelNav(props) {  // 
  const { currentUser } = props;
  const Level = LevelTwoTest;
  const level = 2;

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Level'>
          <Stack.Screen 
              name = "Level"
              component={LevelComponent}
              options={{
                headerTintColor: "#748816",
                headerTitleStyle: {
                  fontFamily: "Raleway_400Regular",
                },
                headerBackTitleStyle: {
                  fontFamily: "Raleway_400Regular",
                },
              }}
              initialParams={{level: level}}
            />
            <Stack.Screen 
              name = "Crossword"
              options={{ headerShown: true }}
              component={TestScreen}
            >
              
              {/* {() => <TestScreen message={"Here is an example of data being passed through -- fuck u arlan"}/>} */}
            </Stack.Screen>
            <Stack.Screen 
                name = "MultipleChoice"
                component={MultipleChoice}
                options={{headerShown: true}}
              >
            </Stack.Screen>
            <Stack.Screen 
                name = {Level.summaryComponent.route}
                component={Level.summaryComponent.component}
                options={{headerShown: true}}
              >
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
});

export default connect(mapStateToProps, null)(LevelNav);
const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  width: 50%;
  align-items: center;
`;
const DATA  = [
  {
    title: "Crossword",
    nextScreen: "./levelOne/testScreen",
    description: "A crossword game... duh?",
    key: "testkey",
    data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",

  },
  {
    title: "Puzzle",
    nextScreen: "blank",
    description: "A puzzle",
    key: "testkey2",
    data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",
  },
  {
    title: "Matching",
    nextScreen: "blank",
    description: "Match it",
    key: "testkey3",
    data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",


  },
  {
    title: "Multiple Choice",
    nextScreen: "blank",
    description: "Take a guess",
    key: "testkey4",
    data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",

  },
];

