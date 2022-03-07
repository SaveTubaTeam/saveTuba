import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const navigation = useNavigation();
    const Back = () => {
        navigation.replace("Home")
    }
    return (
        <View style={styles.container}>
            <Text>Settings Page</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={Back}
            >
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
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