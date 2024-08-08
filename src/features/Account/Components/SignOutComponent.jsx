import React, { useState, useEffect } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { auth } from "../../../../firebase";
import styled from "styled-components/native";
import { signOutUser } from "../../../../redux/slices/userSlice";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { StackActions } from "@react-navigation/native";
import { Audio } from 'expo-av';

const SignOut = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../../../../assets/saveTubaSoundEffects/exitGame.wav'));
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
    }
    
    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    async function handleSignOut() {
        await playSound(); // Play the sound before proceeding
        try {
            console.log("signing out user:", auth.currentUser.email);

            if (GoogleSignin.getCurrentUser()) { // null if not signed in with google
                await GoogleSignin.signOut();
            }

            await auth.signOut(); // Sign out user from Firebase
            dispatch(signOutUser()); // reset user state in Redux store to initialState

            // re: https://reactnavigation.org/docs/stack-actions/#replace
            navigation.dispatch(StackActions.replace("Login")); // Navigate to login screen
        } catch (error) { // Handle sign-out error
            console.error('Sign out error:', error);
            /* marked for translation */
            Alert.alert(t("error:signoutfailed"), t("error:contactsupport"));
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
  font-family: ${(props) => props.theme.fonts.body};
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.body};
`;
