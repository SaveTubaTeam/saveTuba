import { Text, View, Button, Modal, Image } from "react-native";
import React, { Component, useState, useEffect } from "react";
import styled from "styled-components/native";

// import { Button } from "react-native-paper";
import { BadgeImages } from "../Grades/minigames/Handlers/BadgeHandler";

//import { bindActionCreators } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  fetchAchievements,
  addAchievement,
  closeAchievementModal,
} from "../../../redux/actions/index";
import { BodyText } from "../body-text.component";

//   04/09/24 --> As of the time of writing, pop-up achievement modals using the 2022 team's redux store logic never worked.
//I believe the original intention of this file was to write logic to render a pop-up modal whenever and whereever an achievement
//is gained. If an achievement is gained, addAchievement() is called which updates the user-achievement store.
//Then the updated store generates a re-render (presumably of the entire app??) which is why the Amodal component
//wraps the ENTIRE SaveTuba component in Main.js. This logic is a) highly susceptible to bugs b) incompatible with modern redux toolkit patterns.
//Thus we no longer use the old user store logic anywhere.


//creating the modal component which will sit inside of the Amodal component, rendered visible
//inside of Amodal iff achievementModal has property ['isOpen'].
const Modko = ({ visible, achievementModal }) => {
  const dispatch = useDispatch();
  // const [classModal, setClassModal] = useState(false);
  const info = achievementModal["info"];
  const title = achievementModal["achievement"];
  const badge = BadgeImages[title];

  // console.log(classScreenShown);

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View
        style={{
          marginVertical: 170,
          marginHorizontal: 50,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          borderRadius: 20,
          padding: 5,
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          elevation: 5,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>Achievement Unlocked!</Text>

          <Image
            source={badge}
            style={{
              flex: 1,
              width: 250,
              resizeMode: "contain",
            }}
          />
          <BodyText size="mid" color="quaternary">
            {info}
          </BodyText>
          <Button
            style={{
              flex: 1,
              marginTop: 20,
              backgroundColor: "blue",
              width: "50%",
              height: "50%",
              padding: 0,
            }}
            title="Close"
            onPress={() => {
              dispatch(closeAchievementModal(title));
            }}
          >
            <Text>Hello</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

//main component for this file.
const Amodal = ({ achievementModal, children }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // setVisible(() => achievementModal);
    if (
      achievementModal != undefined &&
      achievementModal["isOpen"] != undefined
    ) {
      setVisible(() => achievementModal["isOpen"]);
    } else {
      setVisible(false);
      // console.warn("Setting AchievementModal to closed");
    }
  });
  return (
    <>
      <>{children}</>
      <Modko visible={visible} achievementModal={achievementModal} />
    </>
  );
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

const ModalContainer = styled.View`
  background-color: white;
  width: 60%;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid #cce882;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
