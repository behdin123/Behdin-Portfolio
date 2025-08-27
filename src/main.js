import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueLazyload from 'vue-lazyload';
import I18NextVue from 'i18next-vue';
import i18next from 'i18next'; // Import i18next
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import dk from './locales/dk.json';
import de from './locales/de.json';

const app = createApp(App);
app.use(router);

// Initialize i18next with language detection
i18next
  .use(LanguageDetector) // Add the language detector
  .init({
    fallbackLng: 'dk', // Fallback language if detection fails
    detection: {
      order: ['localStorage', 'navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      cookieMinutes: 160,
      caches: ['localStorage'],
    },
    resources: {
      en: {
        translation: en
      },
      dk: {
        translation: dk
      },
      de: {
        translation: de
      },
    },
    interpolation: {
      escapeValue: false
    }
  });

// Use i18next-vue plugin
app.use(I18NextVue, { i18next });


app.use(VueLazyload, {
    preLoad: 1.3,
    error: 'path-to-error-image.jpg',
    loading: 'path-to-loading-image.gif',
    attempt: 1
  });

app.mount('#app');                               