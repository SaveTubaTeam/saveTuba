import React, {useState} from "react";
import { View, Text, TextInput, Modal } from "react-native";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { TestImages } from "../../../features/Levels/IMAGES";
import {Shadow} from 'react-native-shadow-2';


import { useNavigation } from "@react-navigation/native";

import { TitleText } from "../../title-text.component";
import { BodyText } from "../../body-text.component";
// Firebase and redux imports for later use
import { connect } from "react-redux";

import { ImageBg } from "../../Levels/levels.styles";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const HEADER_BLUE = "#0EABD9";
const HEADER_BLUE_SHADOW = "#12A5D1";

const HEADER_SIDE_BLUE = "#51CAEE";
const HEADER_SIDE_BLUE_SHADOW = "#51CAEE";

const FinishedModal = ({isVisible}) => {
  console.log("Please!!: " + isVisible);
  const [modalVisible, setModalVisible] = useState(() => {
    if (isVisible) {
      console.log("HERE");
      return true;
    } else {
      return false;
    }
    
  });
  console.log("bruh fuck u: " + modalVisible);
  return (
    <Modal 
      animationType="slide"
      visible={modalVisible}
      transparent={modalVisible}
      onRequestClose={() => useNavigation().navigate("Level", {level: 1})}

      style={{
        flex: 1,
        backgroundColor: "white",
      }}>
      
      <Button style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
      }}
        onPress={() => setModalVisible(!modalVisible)}
      >

      </Button>
    </Modal>
  );

};

const ImagePrompt = ({questions}) => {
  // const navigation = useNavigation();
  const [currentPrompt, setPrompt] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{
      flex: 1,
      // backgroundColor: 'white',
      // questionSet.prompts[currentPrompt].image
      alignItems: 'center'
    }}>
      <View style={{
        width: "80%",
        backgroundColor: "white",
        marginTop: 20,
        marginBottom: 10,
        height: 300,
        borderRadius: 30,
        shadowColor: "black",
        shadowOffset: {width: 200, height: 200},
        shadowRadius: 20,
        elevation: 5,
      }}>
      <View style={{
        width: "100%",
        height: 200,
        backgroundColor: "white",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "black",
        shadowOffset: {width: 200, height: 200},
        shadowRadius: 20,
        elevation: 6,
        }}>
          <View style={{

            width: 150,
            height: 150,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
            <ImageBg
              source={questions.prompts[currentPrompt].image}
              resizeMode="cover"
            >
            </ImageBg>
          </View>
          
        </View>
        <View style={{
          marginTop: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          textAlignVertical: 'center'
        }}>
          <TitleText size="subtitle">Что такое имидж? {"\n"}Почему это важно?</TitleText>
        </View>
      </View>

    <View style={{
        width: "90%",
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        height: 250,
        borderRadius: 30,
        shadowColor: "black",
        shadowOffset: {width: 200, height: 200},
        shadowRadius: 20,
        elevation: 5,
      }}>

      <View style={{
        width: "100%",
        height: 240,
        backgroundColor: "white",
        borderRadius: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
        shadowColor: "black",
        shadowOffset: {width: 200, height: 200},
        shadowRadius: 20,
        elevation: 5,
        }}>
        
        <View style={{
          flex: 1,
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 20,
          alignContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
          <TextInput style={{
            flex: 1,
            fontFamily: "Gabriela_400Regular",
            color: "#748816",
            fontSize: 18,
            flexShrink: 1,
          }}
            placeholder="Введите ответ..."
            placeholderTextColor={"#748816"}
            multiline={true}
            
          />
          <Button style={{
            width: "80%",
            height: 40,
            backgroundColor: '#748816',
            alignSelf: 'center',
            borderRadius: 20,
          }}
            onPress={() => {
              // console.log(questions.prompts[currentPrompt]);
              if (currentPrompt < questions.numberOfPrompts - 1) {
                setPrompt(currentPrompt + 1);
              } else {
                setModalVisible(modalVisible => !modalVisible);
                console.log("Yo: " + modalVisible);
                // navigation.navigate("Level", {level: 1});
              }
              // try {
              //   if (questions.prompts[currentPrompt] == undefined) {
              //     console.log("Bro fucking work");
              //     navigation.navigate("Level", {level: 1});
              //   } else {
              //     console.log("Bro fucking work please");
              //     setPrompt(currentPrompt + 1);
              //   }
              // } catch (err) {
              //   navigation.navigate("Level", {level: 1});
              //   console.log("What the fuck stop throwing the stupid fucking error u cunt");
              // }
              
            }}
          >

          </Button>
        </View>
      </View>
    
    </View>
    <FinishedModal
      isVisible={modalVisible}
    />
    </View>
  );
};

const OpenResponseHandler = (props) => {
  const { currentUser, questionSet } = props;
  
  // console.warn(questionSet);
  // console.warn(questionSet.prompts[0]); --- questionSet.prompts[0]
  return (
    <View style={{ flex: 1 }}>
        <ImageBg
          source={require("../../../../assets/promptBackground.jpg")}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
        >
        <View style={{
          flex: 1,
          width: "90%",
        }}>
          <ImagePrompt questions={questionSet}/>
          {/* <ImagePrompt2 questionSet={questionSet}/>  */}
          {/* <View -- currentPrompt.image
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'white',
            }}
          >
          </View> */}
        </View>

        </ImageBg>
    </View>
  );
};


const Header = styled.View`
  width: 100%;
  height: 95%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 0px;
  background-color: #0eabd9;
`;

const HeaderBacker = styled.View`
  width: 100%;
  height: 20%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 0px;
  background-color: #12a5d1;
`;

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(OpenResponseHandler);
