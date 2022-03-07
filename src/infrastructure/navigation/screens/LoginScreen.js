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
import { auth } from "../../../../firebase";
import { SafeArea } from "../../../components/safe-area.component";
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
  width: 80%;
`;

const Input = styled.TextInput`
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.sizes[0]} ${(props) => props.theme.sizes[1]};
  border-radius: ${(props) => props.theme.sizes[1]};
  margin-top: ${(props) => props.theme.space[2]};
`;

const ButtonContainer = styled.View`
  width: 60%;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.sizes[3]};
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.primary};
  width: 100%;
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[1]};
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text.secondary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const ButtonOutLineText = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const ButtonOutLine = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  margin-top: ${(props) => props.theme.space[1]};
  border-color: ${(props) => props.theme.colors.ui.primary};
  border-width: ${(props) => props.theme.space[1]};
  width: 100%;
  padding: ${(props) => props.theme.space[2]};
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
        <ImageBg source={require("../../../../assets/loginBackground.png")}>
          <InputContainer>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </InputContainer>

          <ButtonContainer>
            <Button onPress={handleLogin}>
              <ButtonText>Login</ButtonText>
            </Button>

            <ButtonOutLine onPress={handleSignup}>
              <ButtonOutLineText>Register</ButtonOutLineText>
            </ButtonOutLine>
          </ButtonContainer>
        </ImageBg>
      </Container>
    </SafeArea>
  );
};

export default LoginScreen;
