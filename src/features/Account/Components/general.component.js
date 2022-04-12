/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components/native";
import { Switch, Button, Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faCircleQuestion, faInfo, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { moderateScale } from 'react-native-size-matters';
import CountryFlag from "react-native-country-flag";


import { TitleText } from "../../../components/title-text.component";
import { BodyText } from "../../../components/body-text.component";
import { Spacer } from "../../../components/spacer.component";
import { Card } from "../../../components/card.component";
import { theme } from "../../../infrastructure/theme";



const AvatarContainer = styled.View`
  align-items: center;
`;

const RowContainer = styled.View`
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});


export const GeneralCard = () => {
    const navigation = useNavigation();
    const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(false);
    const toggleSwitchSE = () => setIsSoundEffectsEnabled(previousState => !previousState);

    const [isRemindersEnabled, setIsRemindersEnabled] = useState(false);
    const toggleSwitchR = () => setIsRemindersEnabled(previousState => !previousState);

    const [modalHelpVisible, setModalHelpVisible] = useState(false);

    return (
        <Card>
            <AvatarContainer>
                <Spacer position="bottom" size="large">
                    <TitleText>General</TitleText>
                </Spacer>
                <Spacer position="bottom" size="medium" />
                <Row>
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        {/* it will change from navigation to just changing feature in database */}
                        <CountryFlag isoCode="us" size={25} />

                    </TouchableOpacity>
                    <Spacer position="right" size="medium" />
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <CountryFlag isoCode="ua" size={25} />

                    </TouchableOpacity>
                    <Spacer position="left" size="medium" />
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <CountryFlag isoCode="ru" size={25} />
                    </TouchableOpacity>
                </Row>
                <Spacer size="large" />
                <Spacer size="large" />

                <Row>
                    <BodyText>Sound Effects</BodyText>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isSoundEffectsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchSE}
                        value={isSoundEffectsEnabled}
                        style={{
                            transform: [{ scaleX: moderateScale(.8, 0.2) }, {
                                scaleY:
                                    moderateScale(.8, 0.2)
                            }]
                        }}

                    />
                </Row>
                <Spacer size="medium" />


                <Row>
                    <BodyText>Reminders</BodyText>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isRemindersEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitchR}
                        value={isRemindersEnabled}
                        // figure out flex in order to make switch more inlign
                        style={{
                            transform: [{ scaleX: moderateScale(.8, 0.2) }, {
                                scaleY:
                                    moderateScale(.8, 0.2)
                            }]
                        }}

                    />

                </Row>
                <Spacer size="medium" />

                <Row>
                    <BodyText>Help</BodyText>
                    <Spacer position="right" size="medium" />
                    <TouchableOpacity onPress={() => setModalHelpVisible(true)}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <FontAwesomeIcon
                            icon={faCircleQuestion}
                            size={16}
                            color={theme.colors.ui.primary}
                        />
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalHelpVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalHelpVisible(!modalHelpVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>RN just ask Artur for help. also this text needs to be imported from a JSON file because rn it is inefficent.</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalHelpVisible(!modalHelpVisible)}
                                >
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                </Row>
                <Spacer size="medium" />

                <Row>
                    <BodyText>About</BodyText>
                    <Spacer position="right" size="medium" />
                    <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
                        {/* This will need to also be a feature in the firebase - language */}
                        <FontAwesomeIcon
                            icon={faCircleInfo}
                            size={16}
                            color={theme.colors.ui.primary}
                        />
                    </TouchableOpacity>
                </Row>
                <Spacer size="medium" />


            </AvatarContainer>
        </Card>
    );

}