import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/safe-area.component";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";

const Body = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled(TouchableOpacity)`
  background-color: #0782f9;
  width: 60%;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 40px;
`;

const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const AccountScreen = () => {
  const navigation = useNavigation();

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
      <Container>
        <Body>Email: {auth.currentUser?.email}</Body>
        <Button onPress={handleSignOut}>
          <ButtonText>Sign out</ButtonText>
        </Button>
      </Container>
    </SafeArea>
  );
};

export default AccountScreen;
