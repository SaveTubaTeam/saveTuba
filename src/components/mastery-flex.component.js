import { useNavigation } from "@react-navigation/native";
import { TitleText } from "./title-text.component";
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from "react-i18next";
import React from 'react';
import {
    // Mastery,
    // Adventure,
    // Header,
    ImageBg,
} from "./Grades/grades.styles";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});


export const MasteryFlex = ({
    lessonData,
    selectedChapter,
    selectedLesson,
    navigation
}) => {
    const nav = useNavigation();
    const { t } = useTranslation();

    if (typeof lessonData !== "undefined") {
        return (
            <View
                style={[
                    styles.container,
                    {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: 'row',
                    },
                ]}>
                <TouchableOpacity
                    style={{
                        width: "49%",
                        height: 150,
                        margin: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                    onPress={() => nav.navigate("Mastery")}
                >
                    <ImageBg
                        style={{
                            borderRadius: 20,
                        }}
                        source={require("../../assets/mastery.png")}
                    >
                        <TitleText weight="bold" size="h5" color="quaternary">
                            {t("common:mastery")}
                        </TitleText>
                    </ImageBg>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: "49%",
                        height: 150,
                        margin: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                    onPress={() => nav.navigate("Mastery 2")}
                >
                    <ImageBg
                        style={{
                            borderRadius: 20,
                        }}
                        source={require("../../assets/mastery.png")}
                    >
                        <TitleText weight="bold" size="h5" color="quaternary">
                            {t("common:mastery2")}
                        </TitleText>
                    </ImageBg>
                </TouchableOpacity>


            </View>
        );
    } else {
        return (
            <View
                style={[
                    styles.container,
                    {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: 'row',
                    },
                ]}>
                <TouchableOpacity
                    style={{
                        width: "93%",
                        height: 150,
                        margin: 10,
                        borderRadius: 20,
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                    onPress={() => nav.navigate("Mastery")}
                >
                    <ImageBg
                        style={{
                            borderRadius: 20,
                        }}
                        source={require("../../assets/mastery.png")}
                    >
                        <TitleText weight="bold" size="h5" color="quaternary">
                            {t("common:mastery")}
                        </TitleText>
                    </ImageBg>
                </TouchableOpacity>
            </View>
        );
    }
};


// export default Flex;