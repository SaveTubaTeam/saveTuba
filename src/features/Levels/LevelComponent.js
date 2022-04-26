import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
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
import { AdventureImages } from './IMAGES';



import { connect } from "react-redux";

import {
  Container,
  Summary,
  Mastery,
  Row,
  Adventure,
  ImageBg,
} from "../../components/Levels/levels.styles";

import { LevelOneTest, LevelTwoTest } from "./TestLevel";



const testVariable = React.lazy(() => import('./TestData.json'));

function getLinkToScreen(selectedItem, navigation) {
  if (selectedItem.map(obj => obj.title) == 'Crossword') {
      navigation.navigate('Crossword', {
        data: selectedItem.map(obj => obj.image)
      });
  } else if (selectedItem.map(obj => obj.title) == "Multiple Choice") {
    navigation.navigate("MultipleChoice", {
      data: "./TestData.json"
    });
  }
}

function LevelComponent(props) {
  const [selectedItem, setSelectedItem] = useState([{title: null, description: null, key: null  }]);
  const { currentUser, navigation, route } = props;

  const {level} = route.params;
  const [selectedLevel, setSelectedLevel] = useState(null);

  useEffect(() => {
    switch (level) {
      case 1: 
        setSelectedLevel(LevelOneTest);
        break;
      case 2:
        setSelectedLevel(LevelTwoTest);
        break;
      default: 
        setSelectedLevel(null);
        break;
    }
  }, []);

  const handleOnSelectedItem = (title, key, description) => {
    setSelectedItem([{title: title, key: key, description: description}]);
  };
  const handeOnCloseModal = () => {
    setSelectedItem(null);
  };
  const renderItem = ({ item, navigation }) => {
    // if (item.key == selectedItem) {
      const title = item.title;
      const description = item.description;
      const key = item.key;
      

      return (
        <View style={{
          height: 80,
          width: 120,
          margin: 5,
          alignContent: 'center',
          alignItems: 'center',
        }}>
          <Adventure
            style={{
              width: '100%',
              height: '100%',
            }} 
            onPress={() => (
              handleOnSelectedItem(title, key, description)
            )}
          >
          <ImageBg
            source={item.image}
            imageStyle={{ borderRadius: 16 }}
            resizeMode="cover"
          >
            <TitleText size='body' color='secondary' >{item.title}</TitleText>
          </ImageBg>
            {/* <GetBackgroundImage imageName={item.title} >
              <TitleText color='secondary' >Test Please Work</TitleText>
            </GetBackgroundImage> */}
          </Adventure>
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

  // HORRIFIC FIX TO selectedLEVEL being NULL AT START
  if (selectedLevel == null) {
    return (
      <View>

      </View>
    );
  }

  return (
    <Container>
      <TitleText size="h4" color="primary">{selectedLevel.title}</TitleText>
      <Spacer size='small'/>
      <BodyText>
        {selectedLevel.summary}
      </BodyText>
      <Summary onPress={() => navigation.navigate(selectedLevel.summaryComponent.route)}>
        <BodyText weight="bold" color="secondary">
          Full Summary
        </BodyText>
      </Summary>

      <Spacer size="small"/>
      <FlatList
        data={selectedLevel.minigames}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.key}
        key={item => item.key}
        style={{padding: 0, paddingLeft: 0, paddingRight: 0}}
      />
      
      <Mastery>
        <BodyText weight="bold" size="title" color="secondary">
          Mastery
        </BodyText>
      </Mastery>
 
      
      <View style={{ width: "70%" }}>
        <Image
          style={{ width: "100%", height: undefined, aspectRatio: 3 / 2 }}
          source={require("../../../assets/tourist.png")}
        />
      </View>

      <RenderModal isVisible={selectedItem} selectedItem={selectedItem} onClose={handeOnCloseModal} navigation={navigation} key={selectedItem.key}/>

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