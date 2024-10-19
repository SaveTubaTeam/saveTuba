import React, { useEffect } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Image, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import SaigaCarousel from "./SaigaCarousel";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { apiSlice } from "../../../../redux/apiSlice";
import { db } from "../../../../firebase";

export default function AboutModal({ modalAboutVisible, setModalAboutVisible}) {
   const { t } = useTranslation();
   const user = useSelector(selectCurrentUser);
   const dispatch = useDispatch();

   useEffect(() => {
      if(modalAboutVisible) {
         console.log("About Modal Visible!")
      }
   }, [modalAboutVisible]);

   async function handleClose() {
      setModalAboutVisible(false); 
      console.log("Closing About Modal . . .");
      await db.collection('users').doc(user.email).update({ isNewUser: false });
      //re: https://redux-toolkit.js.org/rtk-query/api/created-api/api-slice-utils#invalidatetags
      dispatch(apiSlice.util.invalidateTags(["User"])); //manually force a refetch of now stale cache
   }

   // let marginTop;
   // Platform.OS === 'ios' ? marginTop = 30 : marginTop = 0;

   return (
      <Modal animationType="slide" transparent={true} visible={modalAboutVisible}>
         <View style={[styles.modalContainer, { marginTop: 50 }]}>
            {/* marked for translation */}
            <BodyText size="h3" weight="bold">
            {t("about:hi")}
            </BodyText>

            <Spacer size="medium" />

            <BodyText size="subtitle">
            {t("about:whoami")}
            </BodyText>

            <SaigaCarousel />

            <View style={styles.belowPictureContainer}>
            <BodyText size="subtitle">
            {t("about:helpme")}
            </BodyText>

            {/* marked for translation */}
            <BodyText size="title" weight="bold">
            {t("about:welcome")}
            </BodyText>

            <TouchableOpacity
               style={styles.greenButtonModal}
               onPress={async() => { await handleClose(); }}
            >
               {/* marked for translation */}
               <BodyText size="title" color="secondary">
                  {t("about:continue")}
               </BodyText>
            </TouchableOpacity>

            <Spacer size="large" />
            </View>

            <Image 
               style={styles.tubaImage}
               source={require("../../../../assets/tuba-low-quality.png")}
               fadeDuration={500}
               overflow="visible"
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
      ...StyleSheet.absoluteFillObject,
      paddingTop: 30,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      borderTopWidth: 5,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      borderColor: "#748816",
      justifyContent: "center",
   },
   greenButtonModal: {
      backgroundColor: "#748816",
      borderRadius: 10,
      borderWidth: 3,
      borderColor: "#CCE882",
      width: "60%",
      marginTop: 15,
      paddingTop: 5,
      paddingBottom: 5,
   },
   belowPictureContainer: {
      flex: 1,
      width: "100%", 
      justifyContent: "center", 
      alignItems: "center", 
      bottom: "-37%"
   },
   tubaImage: {
      position: "relative",
      bottom: "20%",
      right: "45%",
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
   },
   flowerAnimationTwo: {
      position: "absolute",
      bottom: "-40%",
      left: "-35%",
      width: "100%",
      height: "100%",
      transform: [{ rotate: "12deg" }, { scaleX: 0.5 }, { scaleY: 0.5 }],
      zIndex: -1,
   }
})