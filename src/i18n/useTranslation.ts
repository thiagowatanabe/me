import { useTranslation as useI18n } from 'react-i18next';
import { translations } from './translations';
import { Language } from './types';

export function useTranslation() {
  const { i18n } = useI18n();
  const lang = i18n.language as Language;

  const t = translations[lang] ?? translations.en;

  return { t };
}
