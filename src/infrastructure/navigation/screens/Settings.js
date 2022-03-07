import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeArea } from '../../../components/Utility/safe-area.components';
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { auth } from '../../../../firebase';

const SettingsItem = styled(List.Item)`
  padding: 8px;
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

const Settings = () => {
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch(error => alert(error.message));
    };
    const navigation = useNavigation();
    const Back = () => {
        navigation.replace("Home")
    }
    return (
        <View style={styles.container}>
            <AvatarContainer>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Avatar.Icon size={180} icon="head" backgroundColor="#2182BD" />
                </TouchableOpacity>
            </AvatarContainer>
            <TouchableOpacity
                style={styles.button}
                onPress={Back}
            >
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <List.Section>
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={handleSignOut}
                />
            </List.Section>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,

    },
});