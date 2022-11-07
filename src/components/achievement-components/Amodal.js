import { Text, View, Button, Modal, Image } from "react-native";
import React, { Component, useState, useEffect } from "react";
import styled from "styled-components/native";

// import { Button } from "react-native-paper";
import { BadgeImages } from "../Grades/minigames/Handlers/BadgeHandler";

import { bindActionCreators } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  fetchAchievements,
  addAchievement,
  closeAchievementModal,
} from "../../../redux/actions/index";
import { BodyText } from "../body-text.component";

const Modko = ({ visible, achievementModal }) => {
  const dispatch = useDispatch();
  // console.log("Achievement Earned =");
  // console.warn(achievementModal["info"]);

  let info = achievementModal["info"];
  let title = achievementModal["achievement"];
  let badge = BadgeImages[title];

  // console.warn(achievementModal);
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
    }
  });
  return (
    <>
      <>{children}</>
      <Modko visible={visible} achievementModal={achievementModal} />
    </>
  );

  // if (!achievementModal["isOpen"]) {
  //   return (
  //     <>
  //       <>{children}</>
  //       <Modko visible={false} />
  //     </>
  //   );
  // } else {
  //   return (
  //     <View
  //       style={{
  //         backgroundColor: "red",
  //         width: 200,
  //         height: 500,
  //         flex: 1,
  //         margin: 10,
  //         justifyContent: "center",
  //       }}
  //     >
  //       <Button
  //         style={{
  //           flex: 1,
  //           backgroundColor: "blue",
  //           width: "50%",
  //           height: "50%",
  //           padding: 0,
  //         }}
  //         title="Pres sme"
  //         onPress={() => {
  //           dispatch(closeAchievementModal("Hello"));
  //         }}
  //       >
  //         <Text>Hello</Text>
  //       </Button>
  //     </View>
  //   );
  // }
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
