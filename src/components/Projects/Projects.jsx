import styles from './Projects.module.css';
import projects from '../../i18n/projects.json';
import { useContext } from 'solid-js';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';

const getDescription = (project, locale) =>
  locale() === 'fr' ? project.description.fr : project.description.en;

const getKeywords = (project, locale) =>
  locale() === 'fr' ? project.keywords.fr : project.keywords.en;

const Projects = () => {
  const { locale, translations } = useContext(LanguageContext);

  return (
    <>
      <h1 class={styles.title}>{translations()['my-projects']}</h1>
      <section class={styles.section}>
        {projects.map((project) => (
          <article class={styles.article}>
            <div class={styles.body}>
              <h2>{project.name}</h2>
              {project.stars > 0 ? (
                <div class={styles.stars}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class={`${styles['icon-before']} ${styles.star}`}
                  >
                    <path
                      fill="currentColor"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
                    />
                  </svg>
                  <div>{project.stars}</div>
                </div>
              ) : (
                ''
              )}
              <div class={styles.description}>
                {getDescription(project, locale)}
              </div>
              {getKeywords(project, locale) === 0 ? (
                ''
              ) : (
                <ul class={styles.keywords}>
                  {getKeywords(project, locale).map((keyword) => (
                    <li>{keyword}</li>
                  ))}
                </ul>
              )}
            </div>
            <hr class={styles.hr} />
            <div class={styles.links}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                class={`${styles.button} ${styles.source}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class={`${styles['icon-before']} ${styles.github}`}
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
                <div>{translations()['view-on-github']}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class={`${styles['icon-after']} ${styles.arrow}`}
                >
                  <path
                    fill="currentColor"
                    d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                  />
                </svg>
              </a>
              {!project.webpage ? (
                ''
              ) : (
                <a
                  href={project.webpage}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={`${styles.button} ${styles.webpage}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class={`${styles['icon-before']} ${styles.link}`}
                  >
                    <path
                      fill="currentColor"
                      d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.98 2.98 0 0 0 0-4.24a2.98 2.98 0 0 0-4.24 0l-3.53 3.53a2.98 2.98 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.98 2.98 0 0 0 0 4.24a2.98 2.98 0 0 0 4.24 0l3.53-3.53a2.98 2.98 0 0 0 0-4.24a.973.973 0 0 1 0-1.42"
                    />
                  </svg>
                  <div>{translations()['visit-website']}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class={`${styles['icon-after']} ${styles.arrow}`}
                  >
                    <path
                      fill="currentColor"
                      d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                    />
                  </svg>
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Projects;
