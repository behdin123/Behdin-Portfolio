import { ref } from 'vue';
import i18next from 'i18next';

// Reaktiv sprogkode ('dk' | 'en' | 'de') der følger i18next
export const lang = ref((i18next.language || 'dk').split('-')[0]);

i18next.on('languageChanged', (l) => {
  lang.value = (l || 'dk').split('-')[0];
});

// Vælg oversættelse fra et objekt { dk, en, de } med dansk som fallback
export function pick(obj) {
  if (!obj) return '';
  return obj[lang.value] ?? obj.dk ?? '';
}
