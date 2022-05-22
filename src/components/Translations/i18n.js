import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import kk from './kk.json';
import ru from './ru.json';

import * as Localization from 'expo-localization';
import i18njs from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.

// Set the locale once at the beginning of your app.
i18njs.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18njs.fallbacks = true;

i18n.use(initReactI18next).init({

    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: en,
        kk: kk,
        ru: ru,
    },
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;