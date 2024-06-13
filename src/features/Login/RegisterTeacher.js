import React, { Component } from "react";

import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";
import { setDoc, doc } from "firebase/firestore";

import { renderToString } from "react-dom/server";
import { auth, db } from "../../../firebase";
import { Translation } from "react-i18next";
import { t } from "i18next";

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;
const BackButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border: ${(props) => props.theme.space[1]} solid
    ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.space[4]};
  bottom: 0;
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
`;

const ButtonContainer = styled.View`
  width: 60%;
  align-self: center;
`;
const InputContainer = styled.View`
  width: 80%;
  align-self: center;
`;

export class RegisterTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            username: "",
            badges: "",
            friends: "",
            friendCount: "",
        };
    }

    onSignUp() {
        const {
          email,
          password,
          firstName,
          lastName,
          username,
        } = this.state;
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((result) => {
            setDoc(doc(db, "users", auth.currentUser.uid), {
              email,
              first_name: firstName,
              last_name: lastName,
              username: username,
              friendCount: 0,
              friends: {
                initialized: true,
              },
            });
            console.log(result);
          })
          .catch((err) => {
            alert(err);
          });
      }

      email() {
        return <Translation>{(t) => t("common:email")}</Translation>;
      }
      password() {
        return <Translation>{(t) => t("common:password")}</Translation>;
      }
      username() {
        return <Translation>{(t) => t("common:username")}</Translation>;
      }
      firstname() {
        return <Translation>{(t) => t("common:firstname")}</Translation>;
      }
      lastname() {
        return <Translation>{(t) => t("common:lastname")}</Translation>;
      }

    render() {
        // const navigation = useNavigation();
        const email = renderToString(this.email());
        const password = renderToString(this.password());
        const username = renderToString(this.username());
        const firstname = renderToString(this.firstname());
        const lastname = renderToString(this.lastname());

        return (
            <Container>
            <ImageBg source={require("../../../assets/registerScreenBg.png")}>
              <TitleText color="secondary" size="title">
                Зарегистрируйтесь, чтобы сохранить Tuba
                {/* Register For Save Tuba */}
              </TitleText>
    
              <InputContainer>
                <Input
                  placeholder={email}
                  onChangeText={(email) => this.setState({ email })}
                />
                <Input
                  placeholder={password}
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })}
                />
                <Input
                  placeholder={username}
                  onChangeText={(username) => this.setState({ username })}
                />
                <Input
                  placeholder={firstname}
                  onChangeText={(firstName) => this.setState({ firstName })}
                />
                <Input
                  placeholder={lastname}
                  onChangeText={(lastName) => this.setState({ lastName })}
                />
              </InputContainer>
    
              <ButtonContainer>
                <Button onPress={() => this.onSignUp()}>
                  <TitleText color="secondary" size="body">
                    {t("common:signup")}
                  </TitleText>
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <BackButton
                  onPress={() => {
                    this.props.navigation.navigate("Register");
                  }}
                >
                  <TitleText color="primary" size="body">
                    {t("common:back")}
                  </TitleText>
                </BackButton>
              </ButtonContainer>
            </ImageBg>
          </Container> 
        )
    }
}

export default RegisterTeacher;
