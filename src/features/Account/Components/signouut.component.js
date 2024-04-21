import React, {Component } from "react";
import { TouchableOpacity, View } from "react-native";
//import { connect } from "react-redux";
import { auth } from "../../../../firebase";
import styled from "styled-components/native";
//import { signOutUser } from "../../../../redux/actions";
import { signOutUser, selectCurrentUser } from "../../../../redux/slices/userSlice";
//import { bindActionCreators } from "redux";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';

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
/* 
const LoadingScreen = () => {
    return (
        <View backgroundColor>

        </View>
    )
} */

const SignOut = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    //const user = useSelector(selectCurrentUser);

        const handleSignOut = () => {
            auth.signOut() //firebase auth api
                .then(() => { //successful signout
                    navigation.navigate("LoginEmail"); //navigating back to Login page in navigation stack

                    //dispatch(signOutUser()); //setting userSlice's user to null
                })
                .catch((error) => {
                    alert("SignOut Failed");
                    console.log(error.message);
                });
        };

        return (
            <Button onPress={handleSignOut}>
                <ButtonText>Sign Out</ButtonText>
            </Button>
        );
}
/* 
const MapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({signOutUser }, dispatch);

 */
export default SignOut;



