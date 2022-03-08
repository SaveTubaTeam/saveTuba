import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { auth } from "../../../../../firebase"
import { SafeArea } from "../../../../components/safe-area.component";
import { useNavigation } from "@react-navigation/native";

const ImageBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.View`
  width: 60%;
`;

const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[2]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;

const ButtonContainer = styled.View`
  width: 60%;
  margin-top: ${(props) => props.theme.sizes[2]};
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 100%;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${(props) =>
    props.text == "primary"
      ? props.theme.colors.text.primary
      : props.theme.colors.text.secondary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const ButtonOutLine = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  margin-top: ${(props) => props.theme.space[1]};
  border: ${(props) => props.theme.space[1]} solid
    ${(props) => props.theme.colors.ui.tertiary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  align-items: center;
`;

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("HomePage");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeArea>
      <Container behavior="padding">
        <ImageBg source={require("../../../../../assets/loginBackground.png")}>
          <InputContainer>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
              secureTextEntry
            />
          </InputContainer>

          <ButtonContainer>
            <Button onPress={handleLogin}>
              <ButtonText text="secondary">Login</ButtonText>
            </Button>

            <ButtonOutLine onPress={handleSignup}>
              <ButtonText text="primary">Register</ButtonText>
            </ButtonOutLine>
          </ButtonContainer>
        </ImageBg>
      </Container>
    </SafeArea>
  );
};

export default LoginScreen;
