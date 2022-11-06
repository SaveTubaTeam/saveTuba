import React, { Component } from "react";
import styled from "styled-components/native";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../../../firebase";
import { PersonalCard } from "../Components/personal.component";
import { GeneralCard } from "../Components/general.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { connect } from "react-redux";

import SignOut from "../Components/signouut.component";

const Button = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  width: 60%;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function AccountScreen() {
  const navigation = useNavigation();
  const currentUser = auth.currentUser; // UPDATE NEEDED: USE REDUX


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeArea>
      <ScrollView>
        <Container>
          <PersonalCard currentUser={currentUser} />

          <Spacer size="large" />

          <GeneralCard />
          <SignOut navigation={navigation}/>
            
       
        </Container>
      </ScrollView>
    </SafeArea>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(AccountScreen);
