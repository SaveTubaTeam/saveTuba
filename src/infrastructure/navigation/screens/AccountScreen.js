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
