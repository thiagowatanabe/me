import React, { useEffect } from 'react';
import i18n from './i18n';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    i18n.init();
  }, []);

  return <>{children}</>;
};
