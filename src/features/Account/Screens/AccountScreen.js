import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../../../firebase";
import { PersonalCard } from "../Components/personal.component";
import { GeneralCard } from "../Components/general.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
        <ScrollView>
          <Container>

            <PersonalCard currentUser={currentUser} />

            <Spacer size="large" />

            <GeneralCard />
            <Button onPress={handleSignOut}>
              <ButtonText>Sign Out</ButtonText>
            </Button>
          </Container>
        </ScrollView>
      </SafeArea>
    </ImageBg>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
});

export default connect(mapStateToProps, null)(AccountScreen);
