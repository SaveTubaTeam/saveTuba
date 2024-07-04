import React, {Component } from "react";
import { TouchableOpacity, View, Alert } from "react-native";
import { auth } from "../../../../firebase";
import styled from "styled-components/native";
import { signOutUser, selectCurrentUser } from "../../../../redux/slices/userSlice";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { StackActions } from "@react-navigation/native";

const SignOut = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    async function handleSignOut(){
        try {
            console.log("signing out user:", auth.currentUser.email);

            if(GoogleSignin.getCurrentUser()) { //null if not signed in with google
                handleGoogleSignOut();
            }

            await auth.signOut(); // Sign out user from Firebase
            dispatch(signOutUser()); // reset user state in Redux store to initialState

            //re: https://reactnavigation.org/docs/stack-actions/#replace
            navigation.dispatch(StackActions.replace("Login")); // Navigate to login screen
        } catch (error) { // Handle sign-out error
            console.error('Sign out error:', error);
            /* marked for translation */
            Alert.alert('SignOut Failed', "that shouldn't have happened - please contact support");
            navigation.navigate('Login');
        }
    };
    
    async function handleGoogleSignOut() {
        try {
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Button onPress={handleSignOut}>
            <ButtonText>{t("common:signout")}</ButtonText>
        </Button>
    );
}

export default SignOut;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  width: 60%;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  align-items: center;
  margin-top: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

