import React, { useContext, useMemo } from 'react';
import '../style/skills.css';
import ReactIcon from '../assets/react.svg';
import ViteIcon from '../assets/vitejs-svgrepo-com.svg';
import FigmaIcon from '../assets/figma-svgrepo-com.svg';
import CSSIcon from '../assets/css-3-svgrepo-com.svg';
import HTMLIcon from '../assets/html-5-svgrepo-com.svg';
import JSIcon from '../assets/js-svgrepo-com.svg';
import { LanguageContext } from '../App';

function Skills() {
  const { translations, currentLanguage } = useContext(LanguageContext);

  // Memoize skillsData to prevent recreation on every render
  const skillsData = useMemo(() => ({
    [translations.coreTechnologies]: [
      { name: "HTML5", icon: HTMLIcon, isSvg: true },
      { name: "CSS3", icon: CSSIcon, isSvg: true },
      { name: "JavaScript (ES6+)", icon: JSIcon, isSvg: true },
      { name: "React.js", icon: ReactIcon, isSvg: true },
      { name: "React Native", icon: ReactIcon, isSvg: true },
      { name: "Responsive Design", icon: "bi bi-phone" },
      { name: "Git", icon: "bi bi-git" },
      { name: "RESTful APIs", icon: "bi bi-code-slash" },
      { name: "Cross-Browser Compatibility", icon: "bi bi-browser-chrome" }
    ],
    [currentLanguage === 'az' ? "Kitabxanalar" : "Libraries"]: [
      { name: "React.js", icon: ReactIcon, isSvg: true },
      { name: "Material UI", icon: "bi bi-palette" },
      { name: "Bootstrap", icon: "bi bi-bootstrap" },
      { name: "Tailwind CSS", icon: "bi bi-wind" }
    ],
    [translations.developmentTools]: [
      { name: "Vite", icon: ViteIcon, isSvg: true },
      { name: "GitHub / GitLab", icon: "bi bi-github" },
      { name: currentLanguage === 'az' ? "Figma ilə işləyə bilir" : "Can work with Figma", icon: FigmaIcon, isSvg: true }
    ]
  }), [translations, currentLanguage]);

  return (
    <>
      <section id="skills" className="skills">
        <h2 className="section-title" data-aos="fade-down">{translations.skillsTitle}</h2>

        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className="skills-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 200}
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                    data-aos="zoom-in"
                    data-aos-delay={categoryIndex * 200 + skillIndex * 100}
                  >
                    {skill.isSvg ? (
                      <img src={skill.icon} alt={skill.name} className="skill-svg-icon" />
                    ) : (
                      <i className={skill.icon}></i>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default React.memo(Skills);
