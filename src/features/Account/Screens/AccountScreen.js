import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PersonalCard } from "../Components/personal.component";
import { GeneralCard } from "../Components/general.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer.component";
import { connect } from "react-redux";

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

  return (
    <ImageBg source={require("../../../../assets/basic-bg.png")}>
      <SafeArea>
        <ScrollView>
          <Container>

            <PersonalCard currentUser={currentUser} />

            <Spacer size="large" />

            <GeneralCard />
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
