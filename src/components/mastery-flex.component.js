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


const styles = StyleSheet.create({
    flexDirection: 'row',
    container: {
        flex: 1
    },
});


export const MasteryFlex = ({ masteryArray, navigation }) => {
    const nav = useNavigation();
    const { t } = useTranslation();
    const imageMap = useSelector(state => state.imageMap.imageData);

    return (
        <View style={styles.container}>
            {masteryArray.map((mastery, index) => (
                <TouchableOpacity
                key={index}
                style={{
                    width: "110%",
                    height: 150,
                    margin: 10,
                    borderRadius: 20,
                    justifyContent: "center",
                    overflow: "hidden",
                }}
                onPress={() => nav.navigate(mastery.navigation)}
                >
                    <ImageBg
                    style={{ borderRadius: 20 }}
                    source={{ uri: imageMap['assets/mastery.png'] }}
                    >
                        <TitleText weight="bold" size="h5" color="quaternary">
                            {t(mastery.title)}
                        </TitleText>
                    </ImageBg>
                </TouchableOpacity>
            ))}
        </View>
    );
};