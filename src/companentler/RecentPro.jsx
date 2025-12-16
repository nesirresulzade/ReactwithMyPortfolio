import React, { useContext, useMemo } from 'react';
import Project1 from '../image/projects-1.png';
import Project2 from '../image/projects-2.png';
import Project3 from '../image/projects-3.png';
import Project4 from '../image/pokemon.png';
import Project5 from '../image/currency.png';
import Project6 from '../image/bookShop.png';
import Project7 from '../image/bigFinalApp.png';
import Project8 from '../image/usePanel.png';
import Project9 from '../image/musicMobilApp.png';
import Project10 from '../image/ReactWithWeather.png';
import Project11 from '../image/brainquizSite.png';
import '../style/recent.css';
import { LanguageContext } from '../App';
import ProjectCard from './ProjectCard';

function RecentPro() {
  const { translations, currentLanguage } = useContext(LanguageContext);

  // Memoize projects array to prevent recreation on every render
  const projects = useMemo(() => [
    {
      id: 1,
      image: Project1,
      title: currentLanguage === 'az' ? 'Hava Proqnozu Tətbiqi' : 'Weather App',
      description:
        currentLanguage === 'az'
          ? 'Real vaxt hava məlumatı təqdim edən müasir hava tətbiqi, gözəl UI dizaynı ilə.'
          : 'A modern weather application that provides real-time weather information with beautiful UI design.',
      liveDemo: 'https://nesirresulzade.github.io/WeatherApp/',
      github: 'https://github.com/nesirresulzade/WeatherApp',
    },
    {
      id: 2,
      image: Project2,
      title: currentLanguage === 'az' ? 'Adam Asma Oyunu' : 'Hangman Game',
      description:
        currentLanguage === 'az'
          ? 'Azərbaycan rayon adları ətrafında mövzulandırılmış klassik hərf təxmin oyunu.'
          : 'Hangman is a classic letter-guessing game themed around the district names of Azerbaijan.',
      liveDemo: 'https://nesirresulzade.github.io/HangMan/',
      github: 'https://github.com/nesirresulzade/HangMan',
    },
    {
      id: 3,
      image: Project3,
      title: currentLanguage === 'az' ? 'Bonus Kart' : 'Bonus Card',
      description:
        currentLanguage === 'az'
          ? 'Müasir interfeys və istifadəçi dostu dizayn ilə rəqəmsal bonus kart sistemi.'
          : 'A digital bonus card system with modern interface and user-friendly design.',
      liveDemo: 'https://nesirresulzade.github.io/BonusCard/',
      github: 'https://github.com/nesirresulzade/BonusCard',
    },
    {
      id: 4,
      image: Project4,
      title: currentLanguage === 'az' ? 'Pokemon Oyunu' : 'Pokemon Game',
      description:
        currentLanguage === 'az'
          ? 'İki personaj seçərək döyüşdürdüyünüz interaktiv Pokemon döyüş oyunu. Daha yaxşı statistikaya (HP, Hücum, Müdafiə, Dəqiqlik) malik personaj döyüşü qazanır. React və müasir web texnologiyaları ilə qurulub.'
          : 'An interactive Pokemon battle game where players select two characters to fight. The character with better stats (HP, Attack, Defense, Accuracy) wins the battle. Built with React and modern web technologies.',
      liveDemo: 'https://pokemon-game-with-react.vercel.app/',
      github: 'https://github.com/nesirresulzade/PokemonGameWithReact',
    },
    {
      id: 5,
      image: Project5,
      title: currentLanguage === 'az' ? 'Valyuta Çevirici' : 'Currency Converter',
      description:
        currentLanguage === 'az'
          ? 'Real vaxt məzənnə istifadə edərək fərqli valyutalar arasında çevirmə imkanı verən valyuta çevirici tətbiq. React və müasir web texnologiyaları ilə qurulub.'
          : 'A currency converter app that allows users to convert between different currencies using real-time exchange rates. Built with React and modern web technologies.',
      liveDemo: 'https://currency-app-with-react.vercel.app/',
      github: 'https://github.com/nesirresulzade/CurrencyAppWithReact',
    },
    {
      id: 6,
      image: Project6,
      title: currentLanguage === 'az' ? 'Kitab Mağazası' : 'Book Shop',
      description:
        currentLanguage === 'az'
          ? 'İstifadəçilərə kitabları baxmaq və satın almaq imkanı verən kitab mağazası tətbiqi. React və müasir web texnologiyaları ilə qurulub.'
          : 'A book shop app that allows users to browse and purchase books. Built with React and modern web technologies.',
      liveDemo: 'https://library-app-swart-eight.vercel.app/',
      github: 'https://github.com/nesirresulzade/LibraryApp',
    },
    {
      id: 7,
      image: Project7,
      title: currentLanguage === 'az' ? 'Böyük Final Tətbiq' : 'Big Final App',
      description:
        currentLanguage === 'az'
          ? 'İstifadəçilərə kitabları baxmaq və satın almaq imkanı verən böyük final tətbiq. React və müasir web texnologiyaları ilə qurulub.'
          : 'A big final app that allows users to browse and purchase books. Built with React and modern web technologies.',
      liveDemo: 'https://big-app-final.vercel.app/',
      github: 'https://github.com/nesirresulzade/BigAPP-Final',
    },
    {
      id: 8,
      image: Project8,
      title: currentLanguage === 'az' ? 'İstifadəçi Paneli' : 'Use Panel',
      description:
        currentLanguage === 'az'
          ? 'İstifadəçilərə kitabları baxmaq və satın almaq imkanı verən istifadəçi paneli tətbiq. React və müasir web texnologiyaları ilə qurulub.'
          : 'A use panel app that allows users to browse and purchase books. Built with React and modern web technologies.',
      liveDemo: 'https://user-register-one.vercel.app',
      github: 'https://github.com/nesirresulzade/UserRegister',
    },
    {
      id: 9,
      image: Project9,
      title: currentLanguage === 'az' ? 'Musiqi Mobil Tətbiq' : 'Music Mobile App',
      description:
        currentLanguage === 'az'
          ? 'İstifadəçilərə kitabları baxmaq və satın almaq imkanı verən musiqi mobil tətbiq. React və müasir web texnologiyaları ilə qurulub.'
          : 'A music mobile app that allows users to browse and purchase books. Built with React and modern web technologies.',
      liveDemo: 'https://music-player-with-react-app.vercel.app/',
      github: 'https://github.com/nesirresulzade/MusicPlayerWithReactApp',
    },
    {
      id: 10,
      image: Project10,
      title: currentLanguage === 'az' ? 'React ilə Hava' : 'React With Weather',
      description:
        currentLanguage === 'az'
          ? 'İstifadəçilərə kitabları baxmaq və satın almaq imkanı verən hava tətbiq. React və müasir web texnologiyaları ilə qurulub.'
          : 'A weather app that allows users to browse and purchase books. Built with React and modern web technologies.',
      liveDemo: 'https://reactwith-weather-app.vercel.app/',
      github: 'https://github.com/nesirresulzade/ReactwithWeatherApp',
    },
    {
      id: 11,
      image: Project11,
      title: 'Brain Quiz',
      description:
        currentLanguage === 'az'
          ? 'Magistraturaya hazırlaşanlar üçün mövzuları istənilən vaxt tez bir şəkildə təkrar etməyə imkan verən interaktiv test platforması.'
          : 'An interactive quiz platform that helps master\'s applicants quickly review topics anytime they want.',
      // Placeholder linklər – sonradan özün yeniləyə bilərsən
      liveDemo: 'https://brain-quiz-two.vercel.app/',
      github: 'https://github.com/nesirresulzade/BrainQuiz',
    },
  ], [currentLanguage]);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title" data-aos="fade-down">
        {translations.projectsTitle}
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            liveDemo={project.liveDemo}
            github={project.github}
            liveLabel={translations.liveDemo}
            githubLabel="GitHub"
            delay={project.id * 200}
          />
        ))}
      </div>
    </section>
  );
}

export default React.memo(RecentPro);
