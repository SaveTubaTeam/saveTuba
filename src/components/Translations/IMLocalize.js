import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCacheObject, setCache } from '../../features/Grades/Handlers/Database';

//Platform import to detect ios or android
import { Platform, NativeModules } from 'react-native';

//TODO: implement device locale detection logic to set default https://stackoverflow.com/questions/33468746/whats-the-best-way-to-get-device-locale-in-react-native-ios/35493069#35493069
//using Platform.select(): https://reactnative.dev/docs/platform-specific-code
// iOS:
/* const locale = NativeModules.SettingsManager.settings.AppleLocale ||
               NativeModules.SettingsManager.settings.AppleLanguages[0] */ // ex. "en_US" see: https://saimana.com/list-of-country-locale-code/

// Android:
//const locale = NativeModules.I18nManager.localeIdentifier // ex. "en_US"

import en from './languages/en';
import ru from './languages/ru';
import kk from './languages/kk';

//***IMLocalize.js is imported into App.js to retrieve the cached language code or set a default before the stack is rendered. Bad file name, I know.

//Cases: 
//1) on first app load, getCacheObject will retrieve undefined key so we revert to default kk
//2) If a language is selected by the user, we set the cache w/ the selected language code. If a language is not selected by the user, we set the cache w/ default.
//3) On subsequent app loads, there will exist a cache with the key 'user-language'. We retrieve the cached language code.
const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: async(callback) => {
        await getCacheObject('user-language').then((obj) => {
            // console.log("in lang detector");
            if (obj == undefined) {
                callback('kk');
                console.log("IMLocalize.js: 'user-language' cache value undefined, using default kk");
            } else { //case 3
                callback(obj); 
                console.log("IMLocalize.js: 'user-language' cache object found, using:", obj);
            }
        }).catch(() => { //case 1
            callback('kk');
            console.log("IMLocalize.js: 'user-language' cache key nonexistent, using default kk");
        });
    },
    init: () => { },

    //case 2:
    //Hypothesis: setCache() is called immediately after any i18n language Promise is resolved
    //the variable "language" is the current language: either en, kk, or ru.
    cacheUserLanguage: async(language) => {
        await setCache('user-language', language);
        //console.log("IMLocalize.js: 'user-language' cache set to:", language);
    }
};

//we can detect changeLanguage() here all the way from LanguageSelector.js
i18n
    // detect language by passing in our object event listener defined above.
    .use(LANGUAGE_DETECTOR)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // set options
    .init({
        resources: {
            en: en,
            kk: kk,
            ru: ru,
        },
        //boilerplate from the api docs
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    });

