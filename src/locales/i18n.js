import I18n from 'i18n-js';

// Import all locales
import en from './en.json';
import hi from './hi.json';
import ml from './ml.json';
import bn from './bn.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  hi,
  ml,
  bn,
};

// I18n.locale = 'en';
// The method we'll use instead of a regular string
export function lang(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
