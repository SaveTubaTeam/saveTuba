import {View, Text} from 'react-native';
import React, { Component } from "react";

import styled from "styled-components/native";
import { TitleText } from "../../components/title-text.component";

import firebase from "firebase/app";
import { setDoc, doc } from 'firebase/firestore';

import { auth, db } from "../../../firebase";


export class Register extends Component {

    constructor(props) {
        super(props);
        // badges.set("1", "Time to Save the Tuba!");
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            classCode: '',
            username: '',
            badges: '',
            friends: '',
            friendCount: '',

        };
        
        // Need to do this to add functions that can use the this.state stuff
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        const { email, password, firstName, lastName, classCode, username } = this.state;
        
        auth.createUserWithEmailAndPassword(email, password)
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

    render() {
        return (
            <Container>
            <ImageBg source={require("../../../assets/homepagebackground.png")}>

                <TitleText color="secondary" size="title">Register For Save Tuba</TitleText>
                <Input
                  placeholder="Email"
                  onChangeText={(email) => this.setState({email})}
                />
                <Input 
                  placeholder="Password"
                  secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                />
                <Input 
                  placeholder="Username"
                onChangeText={(username) => this.setState({username})}
                />
                <Input 
                  placeholder="First Name"
                onChangeText={(firstName) => this.setState({firstName})}
                />
                <Input 
                  placeholder="Last Name"
                onChangeText={(lastName) => this.setState({lastName})}

                />
                <Input 
                  placeholder="Class Code"
                    onChangeText={(classCode) => this.setState({classCode})}
                />
                <Button
                    onPress={() => this.onSignUp()}
                >
                  <TitleText color="secondary">Register</TitleText>
                </Button>
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

