import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import neon from 'neon-js'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: neon.decode(require('~/i18n/en.js').default).toObject(true)
      },
      pt: {
        translation: neon.decode(require('~/i18n/pt.js').default).toObject(true)
      }
    },
  });

export default i18n;
