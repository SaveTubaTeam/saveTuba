import { Text, View, Button } from "react-native";
import React, { Component } from "react";
import { Modal } from "react-native-paper";

// import { Button } from "react-native-paper";

import { bindActionCreators } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  fetchAchievements,
  addAchievement,
  closeAchievementModal,
} from "../../../redux/actions/index";

const Amodal = ({ achievementModal }) => {
  const dispatch = useDispatch();

  if (!achievementModal["isOpen"]) {
    return <></>;
  } else {
    return (
      <View
        style={{
          backgroundColor: "red",
          width: 200,
          height: 500,
          flex: 1,
          margin: 10,
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            flex: 1,
            backgroundColor: "blue",
            width: "50%",
            height: "50%",
            padding: 0,
          }}
          title="Pres sme"
          onPress={() => {
            dispatch(closeAchievementModal("Hello"));
          }}
        >
          <Text>Hello</Text>
        </Button>
      </View>
    );
  }
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  achievements: store.userAchievements.achievements,
  achievementModal: store.modals,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchAchievements, addAchievement, closeAchievementModal },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Amodal);
