import React, { useState } from 'react';
import '../../../components/Translations/i18n'
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useTranslation } from 'react-i18next';
import CountryFlag from "react-native-country-flag";
import styled from "styled-components/native";
import { Spacer } from '../../../components/spacer.component';
import { theme } from '../../../infrastructure/theme';

const Row = styled.View`
  flex-direction: row;
`;

const Selector = () => {

    const { t, i18n } = useTranslation();

    const [currentLanguage, setLanguage] = useState('en');

    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .catch(err => console.log(err));
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}>
            <Row>
                <Pressable
                    onPress={() => changeLanguage('en')}
                    style={{
                        borderRadius: 8,
                        backgroundColor:
                            currentLanguage === 'en' ? '#748816' : '#C6DC3B',
                        padding: 8,
                    }}>
                    <CountryFlag isoCode="us" size={25} />
                </Pressable>
                <Spacer position="left" size="small" />

                <Pressable
                    onPress={() => changeLanguage('kk')}
                    style={{
                        borderRadius: 8,
                        backgroundColor:
                            currentLanguage === 'kk' ? '#748816' : '#C6DC3B',
                        padding: 8,
                    }}>
                    <CountryFlag isoCode="kz" size={25} />
                </Pressable>
                <Spacer position="right" size="small" />
                <Pressable
                    onPress={() => changeLanguage('ru')}
                    style={{
                        borderRadius: 8,
                        backgroundColor:
                            currentLanguage === 'ru' ? '#748816' : '#C6DC3B',
                        padding: 8,
                    }}>
                    <CountryFlag isoCode="ru" size={25} />
                </Pressable>
            </Row>
        </View >
    );
};

export default Selector;