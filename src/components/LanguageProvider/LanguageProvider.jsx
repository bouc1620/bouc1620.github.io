import { createSignal, createContext } from 'solid-js';
import en from '../../i18n/en.json';
import fr from '../../i18n/fr.json';

export const LanguageContext = createContext();

export default function LanguageProvider(props) {
  const [locale, setLanguage] = createSignal(props.defaultLocale ?? 'en');
  const translations = () => (locale() === 'fr' ? fr : en);

  return (
    <LanguageContext.Provider value={{ locale, translations, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
