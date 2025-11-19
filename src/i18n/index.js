import es from './es.js';
import en from './en.js';

const { createI18n } = window.VueI18n;

// Detectar idioma del navegador o usar inglés por defecto
const browserLang = navigator.language.split('-')[0];
const defaultLocale = ['es', 'en'].includes(browserLang) ? browserLang : 'en';

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
});
