
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import kk from './kk.json';
import ru from './ru.json';

//PLEASE REFER TO IMLocalize.js 
//this file is never accessed directly anywhere after export. We instead refer to the global i18n variable imported directly from the package. So it seems that the only place where we access i18n is within IMLocalize.js.
//for use() and init() see: https://www.i18next.com/overview/api
i18n.use(initReactI18next).init({
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
})
.then(() => console.log("i18n.js loaded all language files"))
.catch((err) => console.log("Error w/ i18n API: ", err));

export default i18n;