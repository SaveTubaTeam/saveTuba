import { useNavigation } from "@react-navigation/native";
import { TitleText } from "./title-text.component";
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";
import React from 'react';
import { Image } from "expo-image";

export const MasteryFlex = ({ masteryArray }) => {
    //https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery-icon.png?alt=media&token=75691377-12d8-4f35-89ec-c2bd96210712
    //UBGQ{Sja06bZAGj@}naz06bG~jn*0*jt=ua|

    const masteryIconPNG = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery.png?alt=media&token=1ec7f126-e0cd-4dd8-bfe4-165acab89248"
    const masteryIconBlurHash = "UdFG2eEfNG#kt:xZjrWAXAxas;W=RkWVoft7"
    const nav = useNavigation();
    const { t } = useTranslation();

    return (
        <View style={styles.container}>

            {masteryArray.map((mastery, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.contentContainer}
                    onPress={() => nav.navigate(mastery.navigation)}
                >
                    <Image
                        style={styles.image}
                        source={masteryIconPNG}
                        placeholder={masteryIconBlurHash}
                    />
                    {/* Absolute positioning for TitleText */}
                    <View style={styles.overlay}>
                        <TitleText weight="bold" size="h5" color="quaternary">
                            {t(mastery.title)}
                        </TitleText>
                    </View>
                </TouchableOpacity>
            ))}

        </View>
    );
};

const styles = StyleSheet.create({
    flexDirection: 'row',
    container: {
        flex: 1
    },
    contentContainer: {
        position: 'relative',
        width: "110%",
        height: 150,
        margin: 10,
        borderRadius: 20,
        justifyContent: "center",
        overflow: "hidden",
    },
    image: { 
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "100%",
        borderRadius: 20
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});