import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../../../../firebase';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {


  return (
    <View style={{alignContent: 'center', alignItems: 'center'}}>
      <Text>
        Hello
      </Text>
    </View>
  );
};

export default HomeScreen;
