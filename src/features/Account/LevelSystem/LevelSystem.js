import React, { Component, useEffect } from "react";
import { theme } from "../../../infrastructure/theme";
import { View, Modal, Pressable, TouchableOpacity, Text } from "react-native";

import { Spacer } from "../../../components/spacer.component";

import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { SafeArea } from "../../../components/safe-area.component";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../../../redux/actions";
import { addExperienceToUser } from "../../../../redux/actions";

import styled from "styled-components/native"; 

import { auth, db } from "../../../../firebase";
import { getDoc, doc } from "firebase/firestore";



class LevelSystem extends Component {

  componentDidMount() {
    const {route, navigation, currentUser, dispatch } = this.props;
    const { score } = route.params;
    const XP_PER_POINT = 15;

    this.props.addExperienceToUser(score*XP_PER_POINT, currentUser);
    
  }

  render() {

    const {route, navigation, currentUser, dispatch } = this.props;
    const { score, prompt } = route.params;
    const XP_PER_POINT = 15;

    // addExperienceToUser(45, currentUser);
  

    return (
      <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
        <Container2 style={{ backgroundColor: "white" }}>
          <TitleText>
              {prompt}{"\n"} You gained {score * XP_PER_POINT} xp!
          </TitleText>
          <Spacer size="large" />
          <Pressable onPress={() => navigation.navigate("Lesson")}>
            <BodyText color="primary">Назад</BodyText>
          </Pressable>
        </Container2>
      </SafeArea>
    );
  }
}

function LevelSystem_ ({route, navigation, currentUser}) {
    const { score } = route.params;
    const XP_PER_POINT = 45;
 
    db.collection("users")
      .doc(auth.currentUser.uid)
      .update({
        currentScore: 40,
      }).then(() => {
      });
    return (
        <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
          <Container2 style={{ backgroundColor: "white" }}>
            <TitleText>
                Поздравляем! Вы завершили свою первую сортировочную контрольный
                опрос! {"\n"} You gained {score * XP_PER_POINT} xp!
            </TitleText>
            <Spacer size="large" />
            <Pressable onPress={() => navigation.navigate("Lesson")}>
              <BodyText color="primary">Назад</BodyText>
            </Pressable>
          </Container2>
      </SafeArea>
    );
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({addExperienceToUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LevelSystem);

const Container2 = styled.View`
  width: 90%;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;