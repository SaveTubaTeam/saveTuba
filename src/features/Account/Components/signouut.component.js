import React, {Component } from "react";
import { TouchableOpacity, View, Alert } from "react-native";
//import { connect } from "react-redux";
import { auth } from "../../../../firebase";
import styled from "styled-components/native";
//import { signOutUser } from "../../../../redux/actions";
import { signOutUser, selectCurrentUser } from "../../../../redux/slices/userSlice";
//import { bindActionCreators } from "redux";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

const Button = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  width: 60%;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[2]};
  align-items: center;
  margin-top: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const SignOut = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    //const user = useSelector(selectCurrentUser);

    const handleSignOut = async() => {
        try {
            console.log("signing out user:", auth.currentUser.email);
            await auth.signOut(); // Sign out user from Firebase
            dispatch(signOutUser()); // Update user state in Redux store to object w/ 'empty' attribute & status to 'idle'
            navigation.navigate('Login'); // Navigate to login screen
        } catch (error) { // Handle sign-out error
            console.error('Sign out error:', error);
            /* marked for translation */
            Alert.alert('SignOut Failed', "that shouldn't have happened - please contact support");
            navigation.navigate('Login');
        }
    };

        return (
            <Button onPress={handleSignOut}>
                <ButtonText>{t("common:signout")}</ButtonText>
            </Button>
        );
}

export default SignOut;



