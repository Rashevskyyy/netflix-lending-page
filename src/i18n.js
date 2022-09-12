import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import UA_DICTIONARY from './locales/ua/translation.json';
import EN_DICTIONARY from './locales/en/translation.json';
import RU_DICTIONARY from './locales/ru/translation.json';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ua',
        whitelist: ["ua", 'ru', 'en'],
        detection: {
            order: ['localStorage', 'cookie'],
            caches: ['localStorage', 'cookie'],
        },
        resources: {
            ua: { translation: UA_DICTIONARY },
            en: { translation: EN_DICTIONARY },
            ru: { translation: RU_DICTIONARY },
        },
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
