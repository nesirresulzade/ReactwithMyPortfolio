import React from 'react'
import Project1 from '../image/projects-1.png'
import Project2 from '../image/projects-2.png'
import Project3 from '../image/projects-3.png'
import Project4 from "../image/pokemon.png"
import Project5 from "../image/currency.png"
import Project6 from "../image/bookShop.png"
import Project7 from "../image/bigFinalApp.png"
import Project8 from "../image/usePanel.png"
import Project9 from "../image/musicMobilApp.png"
import Project10 from "../image/ReactWithWeather.png"
import '../style/recent.css'

function RecentPro() {
  // Layihə məlumatları - buraya yeni layihələr əlavə edə bilərsiniz
  const projects = [
    {
      id: 1,
      image: Project1,
      title: "Weather App",
      description: "A modern weather application that provides real-time weather information with beautiful UI design.",
      liveDemo: "https://nesirresulzade.github.io/WeatherApp/",
      github: "https://github.com/nesirresulzade/WeatherApp"
    },
    {
      id: 2,
      image: Project2,
      title: "Hangman Game",
      description: "Hangman is a classic letter-guessing game themed around the district names of Azerbaijan.",
      liveDemo: "https://nesirresulzade.github.io/HangMan/",
      github: "https://github.com/nesirresulzade/HangMan"
    },
    {
      id: 3,
      image: Project3,
      title: "Bonus Card",
      description: "A digital bonus card system with modern interface and user-friendly design.",
      liveDemo: "https://nesirresulzade.github.io/BonusCard/",
      github: "https://github.com/nesirresulzade/BonusCard"
    },
    {
      id: 4,
      image: Project4,
      title: "Pokemon Game",
      description: "An interactive Pokemon battle game where players select two characters to fight. The character with better stats (HP, Attack, Defense, Accuracy) wins the battle. Built with React and modern web technologies.",
      liveDemo: "https://pokemon-game-with-react.vercel.app/",
      github: "https://github.com/nesirresulzade/PokemonGameWithReact"
    },
    {
      id: 5,
      image: Project5,
      title: "Currency Converter",
      description: "A currency converter app that allows users to convert between different currencies using real-time exchange rates. Built with React and modern web technologies.",
      liveDemo: "https://currency-app-with-react.vercel.app/",
      github: "https://github.com/nesirresulzade/CurrencyAppWithReact"
    },
    {
      id: 6,
      image: Project6,
      title: "Book Shop",
      description: "A book shop app that allows users to browse and purchase books. Built with React and modern web technologies.",
      liveDemo: "https://library-app-swart-eight.vercel.app/",
      github: "https://github.com/nesirresulzade/LibraryApp"
    },
    {
      id: 7,
      image: Project7,
      title: "Big Final App",
      description: "A big final app that allows users to browse and purchase books. Built with React and modern web technologies.",
      liveDemo: "https://big-app-final.vercel.app/",
      github: "https://github.com/nesirresulzade/BigAPP-Final"
    },
    {
      id: 8,
      image: Project8,
      title: "Use Panel",
      description: "A use panel app that allows users to browse and purchase books. Built with React and modern web technologies.",
      liveDemo: "https://user-register-one.vercel.app/new-register",
      github: "https://github.com/nesirresulzade/UserRegister"
    },
    {
      id: 9,
      image: Project9,
      title: "Music Mobile App",
      description: "A music mobile app that allows users to browse and purchase books. Built with React and modern web technologies.",
      liveDemo: "https://music-player-with-react-app.vercel.app/",
      github: "https://github.com/nesirresulzade/MusicPlayerWithReactApp"
    },
    {
      id: 10,
      image: Project10,
      title: "React With Weather",
      description: "A weather app that allows users to browse and purchase books. Built with React and modern web technologies.",
      liveDemo: "https://reactwith-weather-app.vercel.app/",
      github: "https://github.com/nesirresulzade/ReactwithWeatherApp"
    },
  ];

  return (
    <>
      <section id="projects" className="projects">
        <h2 className="section-title" data-aos="fade-down">Recent Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" data-aos="fade-up" data-aos-delay={project.id * 200}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="btn-group">
                <div className="btn">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
                <div className="btn">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default RecentPro
