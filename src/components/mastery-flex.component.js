import React from 'react';
// import { t } from "i18next";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from 'react-native';
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from 'react-native';
import {
    // Mastery,
    // Adventure,
    // Header,
    ImageBg,
} from "./Grades/grades.styles";
import { TitleText } from "./title-text.component";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});


export const MasteryFlex = ({
    data
  }) => {
    const nav = useNavigation();
    const { t } = useTranslation();

    // console.log("In mastery-flex");
    // selectedGrade, selectedChapter, selectedLesson, navigation
    const selectedChapter = data[1];
    const selectedLesson = data[2];
    const lessonData = data[0].chapters[selectedChapter].lessons[selectedLesson];
    // console.log(lessonData["mastery_2"]);
    // if (typeof lessonData["mastery_2"] === "undefined") { 
    //     console.log("UNDEFINED");
    // } else{
    //     console.log("DEFINED");
    // }

    if (typeof lessonData["mastery_2"] !== "undefined") {
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