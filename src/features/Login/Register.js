import React, { Component, useState } from "react";

import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";

import firebase from "firebase/app";
// import RNfirebase from '@react-native-firebase';
import { Firestore, setDoc, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../../firebase";

import { renderToString } from "react-dom/server";


import { Translation } from "react-i18next";
import { t } from "i18next";
import { achievements } from "../../../redux/reducers/user-achievements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { useDispatch } from "react-redux";

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
  color: green;
  textDecorationColor: green;
`;

const ImageBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;  
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
  // align-content: center;
const ButtonContainer = styled.View`
  width: 50%;
  align-self: center;
`;
const InputContainer = styled.View`
  width: 70%;
  margin-top: 30px;
  align-self: center;
`;

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
      achievements: [],
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
      achievements,
    } = this.state;
    // achievements[0] = "/achievements/first-time-signing-up";
    // achievements[1] = "/achievements/achevnemntn1";
    // achievements[2] = "/achievements/achevnemntn2";
    // achievements[3] = "/achievements/achevnemntn13";
    // achievements[4] = "/achievements/achevnemntn114";


    db.collection("classroom")
      .doc(classCode)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          classroom = snapshot.data()["students"];
          auth
            .createUserWithEmailAndPassword(email, password) // Creates the user
            .then((result) => {
              setDoc(doc(db, "users", auth.currentUser.uid), {
                email,
                first_name: firstName,
                last_name: lastName,
                class_code: classCode,
                username: username,
                currentScore: 0,
                friendCount: 0,
                level: 0,
                teacher: isTeacher,
                // Maps in the Firebase database, need initial values
                badges: {
                  RegistrationBadge: true,
                },
                friends: {
                  initialized: true,
                },
              });

              // setting sign up badge to true
              setDoc(doc(db, "user-achievements", auth.currentUser.uid), {
                achievements: achievements,
              });

              // Adding the students id to the "Classroom" collection in the database
              updateDoc(doc(db, "classroom", classCode), {
                students: arrayUnion(auth.currentUser.uid),
              });
            })
            .catch((err) => {
              alert(err);
            });
        } else {
          alert(
            "Invalid Classroom, either code is incorrect or class doesn't exist"
          );
        }
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
      <Container behavior="padding">
        <ImageBg source={require("../../../assets/homepagebackground.png")}>
          <TitleText color="secondary" size="title">
            {t("common:makeanewaccount")}
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
            <Input
              placeholder={classcode}
              onChangeText={(classCode) => this.setState({ classCode })}
            />
          </InputContainer>

          <ButtonContainer>
            <Button
              onPress={() => {
                this.onSignUp();
                // this.props.addAchievement("first-time-signing-up");
              }}
            >
              <TitleText color="secondary" size="body">
                {t("common:signup")}
              </TitleText>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Button
              onPress={() => {
                this.props.navigation.navigate("RegisterTeacher");
              }}
            >
              <TitleText color="secondary" size="body">
                {t("common:teachersignup")}
              </TitleText>
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <BackButton
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <TitleText color="primary" size="body">
                {t("common:back")}
              </TitleText>
            </BackButton>
          </ButtonContainer>
        </ImageBg>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  achievementModal: store.modals,
});


export default connect(mapStateToProps, null)(Register);

