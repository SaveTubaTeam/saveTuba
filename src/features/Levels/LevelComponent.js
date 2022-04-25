import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styled from "styled-components/native";
import { theme } from "../../infrastructure/theme";
import { TitleText } from "../../components/title-text.component";
import { BodyText } from "../../components/body-text.component";
import { Card } from "../../components/card.component";
import {Spacer} from "../../components/spacer.component";
import { Alert } from 'native-base';
// import {TestScreen} from "./levelOne/TestScreen";
import JsonData from "./TestData";
import { Axios } from 'axios';

import { useNavigation } from "@react-navigation/native";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { connect } from "react-redux";


function getLinkToScreen(selectedItem, navigation) {
  // const navigation = useNavigation();
  if (selectedItem.map(obj => obj.title) == 'Crossword') {
      navigation.navigate('Crossword', {
        data: 'test will u work now plz... im sorry for being stupid'
      });
  } else if (selectedItem.map(obj => obj.title) == "Multiple Choice") {
    navigation.navigate("MultipleChoice", {
      data: "./TestData.json"
    });
  }
}

function LevelComponent(props) {
  
  const [selectedItem, setSelectedItem] = useState([{title: null, description: null, nextScreen: null, key: null  }]);
  const { currentUser, navigation, route } = props;
  const data = route.params.datalink
  console.warn(data);
  const DATA = require("./TestData");


  const handleOnSelectedItem = (title, nextScreen, key, description) => {
    setSelectedItem([{title: title, nextScreen: nextScreen, key: key, description: description}]);
  };
  const handeOnCloseModal = () => {
    setSelectedItem(null);
  };
  const renderItem = ({ item, navigation }) => {
    // if (item.key == selectedItem) {
      return (
        <View>
        <Item title={item.title} description={item.description}/>
      </View>
      );
  };

  function RenderModal (props) {
    const { selectedItem, onClose } = props;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(()=> {
      return selectedItem[0].description != null;
    });
    // selectedItem.map(obj => key =obj.key ); // sets the key because I kept getting warnings about it
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          onClose;
        }}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedItem.map(obj => 
            // eslint-disable-next-line react/jsx-key
            <View>
              <TitleText size="h4">{obj.title}</TitleText>
              <TitleText size="body">{obj.description}</TitleText>
            </View>
            
            )}
            <Button
              onPress={() => {
                onClose;
                setModalVisible(!modalVisible);
                getLinkToScreen(selectedItem, navigation );
              }}
            >
              <BodyText color="secondary">Start</BodyText>
            </Button>
            <Button
              onPress={() => {
                onClose;
                setModalVisible(!modalVisible);
              } }
            >
              <BodyText color="secondary">Back</BodyText>
            </Button>
          </View>
        </View>
      </Modal>
    );
  };

  const Item = ({title, nextScreen, key, description, item, navigation }) => (
    <TouchableOpacity style={{
      backgroundColor: "#748816",
      paddingTop: 58,
      paddingBottom: 0,
      height: 80,
      width: 150,
      paddingRight: 1,
      paddingLeft: 5,
      margin: 5,
      borderRadius: 5,
    }} 
      onPress={() => (
        handleOnSelectedItem(title, nextScreen, key, description)
      )}
    >
      <TitleText size="body" color="secondary">{title}</TitleText>
    </TouchableOpacity>
  );

  return (
    <Container>
      
      <TitleText size="title" color="secondary">Enviroment</TitleText>
      <TitleText size="body" color="secondary">and</TitleText>
      <TitleText size="title" color="secondary">Sustainability</TitleText>
      <View style={styles.container} >
        
        <TouchableOpacity style={styles.wideButton} >
          <TitleText color="secondary">Summary</TitleText>
        </TouchableOpacity>
        <Spacer size="large"/>
        <TitleText color="primary" size="body">Adventures</TitleText>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.key}
          key={item => item.key}
          style={{padding: 0, paddingLeft: 10, paddingRight: 10}}
        />
        <RenderModal isVisible={selectedItem} selectedItem={selectedItem} onClose={handeOnCloseModal} navigation={navigation} key={selectedItem.key}/>
        <TouchableOpacity style={styles.wideButton} >
          <TitleText color="secondary">Adventures</TitleText>
        </TouchableOpacity>
      </View>
      <Spacer size="large"/>
    </Container>
  );
};



const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
  });

export default connect(mapStateToProps, null)(LevelComponent); 

const styles = StyleSheet.create({
  wideButton : {
    backgroundColor: "#748816",
    height: 80,
    width: 310,
    borderRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  container : {
    paddingTop: 20, 
    borderRadius: 20, 
    backgroundColor: "#F6FEDB", 
    padding: 0,
    alignItems: 'center',
    height: '60%',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: '80%',
    height: '50%',
    paddingTop: '20%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  width: 50%;
  align-items: center;
`;

const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[2]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;

const ImageBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: ${(props) => props.theme.space[5]};
  padding-horizontal: 20px;

`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

// const DATA  = [
//   {
//     title: "Crossword",
//     nextScreen: "./levelOne/testScreen",
//     description: "A crossword game... duh?",
//     key: "testkey",
//     data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",

//   },
//   {
//     title: "Puzzle",
//     nextScreen: "blank",
//     description: "A puzzle",
//     key: "testkey2",
//     data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",
//   },
//   {
//     title: "Matching",
//     nextScreen: "blank",
//     description: "Match it",
//     key: "testkey3",
//     data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",


//   },
//   {
//     title: "Multiple Choice",
//     nextScreen: "blank",
//     description: "Take a guess",
//     key: "testkey4",
//     data: "No data -- would contain link to json of lesson's crossword -- would be set as reference to crossword game to interpret",

//   },
// ];