import { createContext, useContext, useMemo, useState } from 'react';
import { DEFAULT_LANGUAGE } from '../data/languages.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return window.localStorage.getItem('prayers.language') || DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });

  const changeLanguage = (code) => {
    setLanguage(code);
    try {
      window.localStorage.setItem('prayers.language', code);
    } catch {
      /* ignore storage failures (private browsing, etc.) */
    }
  };

  const value = useMemo(() => ({ language, setLanguage: changeLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

// Small helper: pick text for the current language, always falling back to
// English if a translation is ever missing for a given key.
export function pick(field, lang) {
  if (!field) return '';
  return field[lang] ?? field.en ?? '';
}
