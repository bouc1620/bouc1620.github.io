import styles from './Hero.module.css';
import { useContext } from 'solid-js';
import { LanguageContext } from '../LanguageProvider/LanguageProvider.jsx';

const Hero = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <ul class={styles.ul}>
      <li class={styles.li}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class={`${styles['icon-before']} ${styles.icon}`}
        >
          <path
            fill="currentColor"
            d="M10 16v-1H3v4c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1zm10-9h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-6 0h-4V5h4z"
          />
        </svg>
        <div>{translations()['job-title']}</div>
      </li>
      <li class={styles.li}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class={`${styles['icon-before']} ${styles.icon}`}
        >
          <path
            fill="currentColor"
            d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
          />
        </svg>
        <div>Sherbrooke (Québec, Canada)</div>
      </li>
      <br />
      <li class={styles.li}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class={`${styles['icon-before']} ${styles.icon}`}
        >
          <path
            fill="currentColor"
            d="M12 15c.81 0 1.5-.3 2.11-.89c.59-.61.89-1.3.89-2.11s-.3-1.5-.89-2.11C13.5 9.3 12.81 9 12 9s-1.5.3-2.11.89C9.3 10.5 9 11.19 9 12s.3 1.5.89 2.11c.61.59 1.3.89 2.11.89m0-13c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12v1.45c0 1-.35 1.85-1 2.55c-.7.67-1.5 1-2.5 1c-1.2 0-2.19-.5-2.94-1.5c-1 1-2.18 1.5-3.56 1.5c-1.37 0-2.55-.5-3.54-1.46C7.5 14.55 7 13.38 7 12c0-1.37.5-2.55 1.46-3.54C9.45 7.5 10.63 7 12 7c1.38 0 2.55.5 3.54 1.46C16.5 9.45 17 10.63 17 12v1.45c0 .41.16.77.46 1.08s.65.47 1.04.47c.42 0 .77-.16 1.07-.47s.43-.67.43-1.08V12c0-2.19-.77-4.07-2.35-5.65S14.19 4 12 4s-4.07.77-5.65 2.35S4 9.81 4 12s.77 4.07 2.35 5.65S9.81 20 12 20h5v2h-5c-2.75 0-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"
          />
        </svg>
        <a href="mailto:charlesboudreault1@gmail.com">
          charlesboudreault1@gmail.com
        </a>
      </li>
      <li class={styles.li}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class={`${styles['icon-before']} ${styles.icon}`}
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          />
        </svg>
        <a
          href="https://www.github.com/bouc1620"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li class={styles.li}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class={`${styles['icon-before']} ${styles.icon}`}
        >
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          />
        </svg>
        <a
          href="https://www.linkedin.com/in/charlesboudreault"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};

export default Hero;
