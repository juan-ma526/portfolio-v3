import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './locales/es.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)       // detecta idioma del browser
  .use(initReactI18next)
  .init({
    resources: { es: { translation: es }, en: { translation: en } },
    fallbackLng: 'es',         // si no detecta nada, usa español
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'], // primero guarda la preferencia del user, luego el browser
      caches: ['localStorage'],             // recuerda la elección del user
    },
  });

export default i18n;