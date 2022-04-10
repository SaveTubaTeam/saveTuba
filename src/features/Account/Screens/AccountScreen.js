import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/safe-area.component";
import { auth } from "../../../../firebase";
import { useNavigation } from "@react-navigation/native";
import { List, Avatar } from "react-native-paper";
// import { Spacer } from "../../../components/spacer.component";
import { theme } from "../../../infrastructure/theme";
import { SettingsInfoCard } from "../Components/settings-info-card.component";
import { Language } from "../Components/settings-info-card.styles";

import { connect } from "react-redux";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const Container = styled.View`
  flex: 1;
  padding: 50px;
  justify-content: center;
  align-items: center;
`;

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

const ImageBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function AccountScreen(props) {
  const navigation = useNavigation();
  const { currentUser } = props;
  // console.log(currentUser);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  
  return (
    <ImageBg source={require("../../../../assets/basic-bg.png")}>
      <SafeArea>
        <Container>
          <SettingsInfoCard currentUser={currentUser}/>
          <Text>Username: {currentUser.username}</Text>
          <Button onPress={handleSignOut}>
            <ButtonText>Sign Out</ButtonText>
          </Button>
        </Container>
      </SafeArea>
    </ImageBg>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
});

export default connect(mapStateToProps, null)(AccountScreen);

// export default AccountScreen;
