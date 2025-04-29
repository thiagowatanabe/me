// src/utils/getLocalizedText.ts
import { Language } from '../i18n/types';

export function getLocalizedText<T extends Record<Language, string>>(obj: T, lang: string): string {
  if (lang === 'pt' || lang === 'en') {
    return obj[lang];
  }
  return obj['en']; // fallback padrão
}