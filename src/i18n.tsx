// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../src/en.json";
import frTranslation from "../src/fr.json";
import roTranslation from "../src/ro.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    ro: { translation: roTranslation },
  },
  lng: "ro", // Default language
  fallbackLng: "en", // Fallback language if the translation key is not found
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
