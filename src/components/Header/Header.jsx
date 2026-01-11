import styles from './Header.module.css';
import { useContext } from 'solid-js';
import { LanguageContext } from '../LanguageProvider/LanguageProvider.jsx';

const Header = () => {
  const { locale, setLanguage } = useContext(LanguageContext);

  return (
    <section class={styles.section}>
      <h1>Charles Boudreault</h1>
      <div>
        <button
          class={`${styles['choice-left']} ${styles.choice}`}
          classList={{ [styles.active]: locale() === 'en' }}
          onClick={() => setLanguage('en')}
        >
          En
        </button>
        <button
          class={`${styles['choice-right']} ${styles.choice}`}
          classList={{ [styles.active]: locale() === 'fr' }}
          onClick={() => setLanguage('fr')}
        >
          Fr
        </button>
      </div>
    </section>
  );
};

export default Header;
