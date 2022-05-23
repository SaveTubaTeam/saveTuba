import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import styled from "styled-components/native";
import { FlatList } from 'react-native';
import { TestImages } from '../../../features/Levels/IMAGES';

// import { SafeArea } from "../../../components/safe-area.component";
import { SafeArea } from '../../safe-area.component';

// Firebase and redux imports for later use
import { connect } from "react-redux";

import { ImageBg } from '../../Levels/levels.styles';
import { Raleway_200ExtraLight } from '@expo-google-fonts/raleway';
import { Button } from 'react-native-paper';




const HEADER_BLUE                   = "#0EABD9";
const HEADER_BLUE_SHADOW            = "#12A5D1";

const HEADER_SIDE_BLUE              = "#51CAEE";
const HEADER_SIDE_BLUE_SHADOW       = "#51CAEE";

const renderPrompts = ({item}) => {
  // console.warn(item);
  // const [text, onChangeText] = useState("Useless Text");
  return (
    <View
        style={{
          height: 80,
          width: "100%",
          margin: 5,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
    <View style={{flex: 1, width: "100%", height: "100%", flexDirection: "row", paddingRight: 20}}>
      <View style={{
        width: "50%",
        padding: 10,
      }}>
      <TextInput style={{flex: 1}}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Введите ответ..."
        multiline={true}
      >

      </TextInput>
      </View>
        <ImageBg
          source={item.image }
          imageStyle={{ borderRadius: 20 }}
          resizeMode="stretch"
        />
    </View>
    </View>
  );
};

const OpenResponseHandler = (props) => {
  const { currentUser, questionSet, navigation } = props;
  // console.warn(navigation);
 
 
  return (
    <View style={{flex: 1}}>
      <Prompt>
        <HeaderBacker>
            <Header>
                <Text>
                Что такое имидж?{'\n'}Почему это важно?{'\n'}{'\n'}Ответ: Солнечная панель{'\n'}Производит чистую энергию
                </Text>
                <Text>
                </Text>
                <View style={{
                  flex: 1,
                  paddingLeft: 20,
                  paddingRight: 10,
                  paddingTop: 5, 
                  paddingBottom: 5, 
                  width: 25,
                  height: 100,
                }}>
                  <ImageBg
                    source={TestImages.solar_panel_1 }
                    imageStyle={{ borderRadius: 20 }}
                    resizeMode="cover"
                  />
                </View>
                
            </Header>
        </HeaderBacker>

        <FlatList
          data={questionSet.prompts}
          renderItem={renderPrompts}
          numColumns={1}
          keyExtractor={(item) => item.key}
          key={(item) => item.key}
        >
        </FlatList>
        <View style={{alignContent: 'center', alignItems: 'center'}}>
          <Button mode="contained" style={{width: "80%", backgroundColor: "#748816"}} onPress={
            () => navigation.goBack()
          }>
              <Text>Войти</Text>
          </Button>
        </View>
        
        <View style={{height: 100}} />
      </Prompt>
    </View>
  );
};

const Prompt = styled.View`
    flex: 1;
    border-radius: 30px;
    background-color: #F6FEDB;
    margin: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

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
    background-color: #0EABD9;
`;

const HeaderBacker = styled.View`
    width: 100%;
    height: 20%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 0px;
    background-color: #12A5D1;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
  });
  
export default connect(mapStateToProps, null)(OpenResponseHandler);

