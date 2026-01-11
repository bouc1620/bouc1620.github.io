import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import LanguageProvider from '../LanguageProvider/LanguageProvider.jsx';
import Projects from '../Projects/Projects.jsx';

const App = () => {
  return (
    <LanguageProvider client:load>
      <Header />
      <Hero />
      <Projects />
    </LanguageProvider>
  );
};

export default App;
