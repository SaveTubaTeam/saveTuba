import React, { Component } from "react";

import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";
import { setDoc, doc } from "firebase/firestore";

import { renderToString } from "react-dom/server";
import { auth, db } from "../../../firebase";
import { Translation } from "react-i18next";
import { t } from "i18next";

// import { withNavigation } from '@react-navigation';

export class Register extends Component {
  constructor(props) {
    super(props);
    // const navigation = useNavigation();
    // badges.set("1", "Time to Save the Tuba!");
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      classCode: "",
      username: "",
      badges: "",
      friends: "",
      friendCount: "",
      isTeacher: false,
    };

    // Need to do this to add functions that can use the this.state stuff
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const {
      email,
      password,
      firstName,
      lastName,
      classCode,
      username,
      isTeacher,
    } = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        setDoc(doc(db, "users", auth.currentUser.uid), {
          email,
          first_name: firstName,
          last_name: lastName,
          class_code: classCode,
          username: username,
          currentScore: 0,
          friendCount: 0,
          level: 1,
          teacher: isTeacher,
          // Maps in the Firebase database, need initial values
          badges: {
            RegistrationBadge: true,
          },
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
  classcode() {
    return <Translation>{(t) => t("common:classcode")}</Translation>;
  }

  render() {
    // const navigation = useNavigation();
    const email = renderToString(this.email());
    const password = renderToString(this.password());
    const username = renderToString(this.username());
    const firstname = renderToString(this.firstname());
    const lastname = renderToString(this.lastname());
    const classcode = renderToString(this.classcode());

    return (
      <Container>
        <ImageBg source={require("../../../assets/homepagebackground.png")}>
          <TitleText color="secondary" size="title">
            Зарегистрируйтесь, чтобы сохранить Tuba
            {/* Register For Save Tuba */}
          </TitleText>
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
          <Input
            placeholder={classcode}
            onChangeText={(classCode) => this.setState({ classCode })}
          />
          <Button onPress={() => this.onSignUp()}>
            <TitleText color="secondary">{t("common:signup")}</TitleText>
          </Button>
          <Button
            onPress={() => {
              this.setState((prevState) => ({
                isTeacher: !prevState.isTeacher,
              }));
              this.onSignUp();
            }}
          >
            <TitleText color="secondary">{t("common:teachersignup")}</TitleText>
          </Button>
          <BackButton
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <TitleText color="secondary">{t("common:back")}</TitleText>
          </BackButton>
        </ImageBg>
      </Container>
    );
  }
}

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  margin-top: 10px;
  width: 100%;
  align-items: center;
`;
const BackButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.space[5]};
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

export default Register;
