import { useNavigation } from "@react-navigation/native";
import { TitleText } from "./title-text.component";
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";
import React from 'react';
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

export const MasteryFlex = ({ masteryArray }) => {
    //mastery-icon.png in our storage bucket under assets/
    const masteryIconPNG = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery-icon.png?alt=media&token=0ac84171-64cf-4a71-9d6b-8b4d9f67ded1"
    const nav = useNavigation();
    const { t } = useTranslation();

    return (
        <View style={styles.container}>

            {masteryArray && masteryArray.map((mastery, index) => {
                let opacity = 0;
                if(mastery.completionStatus === true) {
                    opacity = 1;
                }

                return (
                <TouchableOpacity
                    key={index}
                    style={styles.contentContainer}
                    onPress={() => nav.navigate(mastery.navigation)}
                >
                    <CompletionOverlay opacity={opacity} />
                    <Image
                        style={styles.image}
                        source={masteryIconPNG}
                    />
                    <View style={styles.text}>
                        <TitleText weight="regular" size="h5" color="quaternary">
                            {t(mastery.title)}
                        </TitleText>
                    </View>
                </TouchableOpacity>
                )
            })}

        </View>
    );
};

function CompletionOverlay({ opacity }) {
    return (
      <View style={[styles.overlay, { opacity: opacity }]}>
        <Ionicons name="checkmark-circle" size={40} color="rgba(126, 211, 57, 0.8)" />
      </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        position: 'relative',
        width: "110%",
        height: 150,
        margin: 10,
        padding: 5,
        borderRadius: 20,
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#60BBDD",
        flexDirection: 'row',
    },
    image: { 
        justifyContent: "center",
        aspectRatio: 1,
        left: "-10%",
    },
    text: {
        justifyContent: 'center',
        left: "-10%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, //to fill the parent
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRadius: 20,
        backgroundColor: "rgba(131, 219, 59, 0.2)",
        pointerEvents: 'none',
        zIndex: 2
    }
});