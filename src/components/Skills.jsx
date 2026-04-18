import React, { useContext, useMemo } from 'react';
import '../style/skills.css';
import ReactIcon from '../assets/react.svg';
import ViteIcon from '../assets/vitejs-svgrepo-com.svg';
import FigmaIcon from '../assets/figma-svgrepo-com.svg';
import CSSIcon from '../assets/css-3-svgrepo-com.svg';
import HTMLIcon from '../assets/html-5-svgrepo-com.svg';
import JSIcon from '../assets/js-svgrepo-com.svg';
import { LanguageContext } from '../context/LanguageContext';

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
    [translations.libraries]: [
      { name: "React.js", icon: ReactIcon, isSvg: true },
      { name: "Material UI", icon: "bi bi-palette" },
      { name: "Bootstrap", icon: "bi bi-bootstrap" },
      { name: "Tailwind CSS", icon: "bi bi-wind" }
    ],
    [translations.developmentTools]: [
      { name: "Vite", icon: ViteIcon, isSvg: true },
      { name: "GitHub / GitLab", icon: "bi bi-github" },
      { name: translations.canWorkWithFigma, icon: FigmaIcon, isSvg: true }
    ]
  }), [translations]);

  return (
    <>
      <section id="skills" className="skills" aria-labelledby="skills-title">
        <h2 id="skills-title" className="section-title">{translations.skillsTitle}</h2>

        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="skills-category"
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item"
                  >
                    {skill.isSvg ? (
                      <img src={skill.icon} alt="" aria-hidden="true" className="skill-svg-icon" />
                    ) : (
                      <i className={skill.icon} aria-hidden="true"></i>
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
