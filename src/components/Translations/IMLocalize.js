import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCacheObject, setCache } from '../../features/Grades/Handlers/Database';

import en from './languages/en';
import ru from './languages/ru';
import kk from './languages/kk';
const LANGUAGES = {
    en,
    ru,
    kk
};

// const LANG_CODES = Object.keys(LANGUAGES);


const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        getCacheObject("user", 'user-language').then((obj) => {
            // console.log("in lang detector");
            if (obj == undefined) {
                callback('ru');

                return;
            } else {
                callback(obj);
            }
        });
    },
    init: () => { },
    cacheUserLanguage: language => {
        setCache('user-language', language);
    }
};

i18n
    // detect language
    .use(LANGUAGE_DETECTOR)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // set options
    .init({
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    });

