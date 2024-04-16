import React, {Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { auth } from "../../../../firebase";
import styled from "styled-components/native";
import { signOutUser } from "../../../../redux/actions";
import { bindActionCreators } from "redux";

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

const LoadingScreen = () => {
    return (
        <View backgroundColor>

        </View>
    )
}

class SignOut extends Component {
    render() {
        const {currentUser, navigation} = this.props;

        const handleSignOut = () => {
            auth
                .signOut() //firebase auth api
                .then(() => {
                    navigation.navigate("Login"); //navigating back to Login page in navigation stack

                    //needs to be changed to rtk
                    this.props.signOutUser(); //this action resets the user store to an initial state of null
                })
                .catch((error) => alert(error.message));
        };

        return (
            <Button onPress={handleSignOut}>
                <ButtonText>Sign Out</ButtonText>
            </Button>
        );
    }
}

const MapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({signOutUser }, dispatch);


export default connect(MapStateToProps, mapDispatchToProps)(SignOut);



