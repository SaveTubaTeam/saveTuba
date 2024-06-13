import { useNavigation } from "@react-navigation/native";
import { TitleText } from "./title-text.component";
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    // Mastery,
    // Adventure,
    // Header,
    ImageBg,
} from "./Grades/grades.styles";
import { Image } from "expo-image";

const styles = StyleSheet.create({
    flexDirection: 'row',
    container: {
        flex: 1
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


export const MasteryFlex = ({ masteryArray, navigation }) => {
    const masteryIconPNG = "https://firebasestorage.googleapis.com/v0/b/savetuba-5e519.appspot.com/o/assets%2Fmastery.png?alt=media&token=ad62687c-a8ae-4936-82ae-cc71f6343c79"
    const masteryIconBlurHash = "UdFG2eEfNG#kt:xZjrWAXAxas;W=RkWVoft7"

    const nav = useNavigation();
    const { t } = useTranslation();
    const imageMap = useSelector(state => state.imageMap.imageData);

    return (
        <View style={styles.container}>
            {masteryArray.map((mastery, index) => (
                <TouchableOpacity
                key={index}
                style={{
                    position: 'relative',
                    width: "110%",
                    height: 150,
                    margin: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    overflow: "hidden",
                }}
                onPress={() => nav.navigate(mastery.navigation)}
                >
                    <Image
                        style={styles.image}
                        source={masteryIconPNG}
                        placeholder={masteryIconBlurHash}
                    >
                    </Image>
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