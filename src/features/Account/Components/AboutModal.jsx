import React, { useEffect } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import SaigaCarousel from "./SaigaCarousel";
import LottieView from "lottie-react-native";
import { useUpdateIsNewUserMutation } from "../../../../redux/apiSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";

export default function AboutModal({ modalAboutVisible, setModalAboutVisible}) {
   const { t } = useTranslation();
   const user = useSelector(selectCurrentUser);
   const [updateIsNewUser] = useUpdateIsNewUserMutation();

   useEffect(() => {
      if(modalAboutVisible) {
         console.log("About Modal Visible!")
      }
   }, [modalAboutVisible])

   return (
      <Modal animationType="slide" transparent={true} visible={modalAboutVisible}>
         <View style={styles.modalContainer}>
            <Spacer size="large" />

            {/* marked for translation */}
            <BodyText size="h3" weight="bold">
            Hi! I'm Tuba
            </BodyText>

            <Spacer size="large" />

            <BodyText size="subtitle">
            I am an endangered Saiga Antelope native to the Kazakh Steppes.
            </BodyText>

            <SaigaCarousel />

            <BodyText size="subtitle">
            Help me complete activities that improve our environment.
            </BodyText>

            <Spacer size="large" />
            <Spacer size="large" />

            {/* marked for translation */}
            <BodyText size="title" weight="bold">
            Welcome To My World!
            </BodyText>

            <Spacer size="large" />
            <Spacer size="small" />

            <TouchableOpacity
               style={styles.greenButtonModal}
               onPress={ async() => { 
                  setModalAboutVisible(!modalAboutVisible); 
                  await updateIsNewUser({ email: user.email }).unwrap();
               }}
            >
               {/* marked for translation. i want this to say enter */}
               <BodyText size="title" color="secondary">
                  Continue
               </BodyText>
            </TouchableOpacity>

            <Spacer size="large" />

            <Image 
               style={styles.tubaImage}
               source={require("../../../../assets/tuba-low-quality.png")}
               fadeDuration={500}
            />

            <LottieView 
               source={require("../../../../assets/lottie-animations/flowers1-animation.json")}
               autoPlay={true}
               loop={false}
               style={styles.flowerAnimationOne}
            />

            <LottieView 
               source={require("../../../../assets/lottie-animations/flowers2-animation.json")}
               autoPlay={true}
               loop={false}
               style={styles.flowerAnimationTwo}
            />

         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   modalContainer:{
      backgroundColor: "#F5F5DC",
      width: "100%",
      height: "100%",
      padding: 30,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      borderTopWidth: 5,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      borderColor: "#748816",
   },
   greenButtonModal: {
      backgroundColor: "#748816",
      borderRadius: 10,
      borderWidth: 3,
      borderColor: "#CCE882",
      width: "60%",
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
   },
   tubaImage: {
      position: "absolute",
      top: "43%",
      left: "-15%",
      width: "55%",
      height: "40%",
      transform: [{ rotate: "-8deg" }, { scaleX: 0.6 }, { scaleY: 0.6 }]
   },
   flowerAnimationOne: {
      position: "absolute",
      top: "-38%",
      right: "-32%",
      width: "80%",
      height: "80%",
      transform: [{ rotate: "25deg" }, { scaleX: 0.6 }, { scaleY: 0.6 }],
      zIndex: -1,
   },
   flowerAnimationTwo: {
      position: "absolute",
      bottom: "-40%",
      left: "-35%",
      width: "100%",
      height: "100%",
      transform: [{ rotate: "12deg" }, { scaleX: 0.5 }, { scaleY: 0.5 }],
      zIndex: 2,
   }
})