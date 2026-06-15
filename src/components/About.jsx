import React, { useContext, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import '../style/about.css';
import { LanguageContext } from '../context/LanguageContext';
import Button from './Button';
import { useTypewriter } from '../hooks/useTypewriter';

const floatingElements = [
  { icon: 'bi-code-slash', color: '#6c63ff', top: '10%', left: '-15%', delay: 0 },
  { icon: 'bi-braces', color: '#00d4ff', top: '60%', left: '-20%', delay: 1 },
  { icon: 'bi-layers', color: '#a855f7', top: '20%', left: '105%', delay: 0.5 },
  { icon: 'bi-lightning-charge', color: '#ec4899', top: '75%', left: '95%', delay: 1.5 },
];

function About() {
  const { translations, currentLanguage } = useContext(LanguageContext);
  
  const { displayedText: subtitleText, isComplete: subtitleComplete } = useTypewriter(
    translations.aboutSubtitle,
    100,
    800
  );

  const handleDownloadCV = useCallback(() => {
    const cvPath = '/Nasir_Rasulzadeh_CV.pdf';
    fetch(cvPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          const link = document.createElement('a');
          link.href = cvPath;
          link.download = 'Nasir Rasulzadeh.pdf';
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error('CV file not found');
          alert(translations.cvFileNotFound);
        }
      })
      .catch(error => {
        console.error('CV download error:', error);
        alert(translations.cvDownloadError);
      });
  }, [translations]);

  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const greeting = useMemo(() => {
    return currentLanguage === 'az' ? 'Salam, mən' : "Hi, I'm";
  }, [currentLanguage]);

  return (
    <section id="about" className="about" aria-labelledby="about-name">
      <div className="about-container">
        <div className="about-visual-wrapper">
          {/* Main Code Visual */}
          <motion.div 
            className="main-code-card"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ y: -10, rotateY: 5, rotateX: -5 }}
            style={{ perspective: 1000 }}
          >
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="file-name">developer.js</span>
            </div>
            <pre className="code-content">
              <code>
                <span className="purple">const</span> <span className="blue">developer</span> = {"{"} <br />
                &nbsp;&nbsp;name: <span className="orange">'Nasir Rasulzade'</span>,<br />
                &nbsp;&nbsp;role: <span className="orange">'Frontend Developer'</span>,<br />
                &nbsp;&nbsp;specialization: <span className="orange">'React & Modern Web Apps'</span>,<br />
                &nbsp;&nbsp;skills: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">'HTML'</span>, <span className="orange">'CSS'</span>, <span className="orange">'JS'</span>, <span className="orange">'React'</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">'React Native'</span>, <span className="orange">'Bootstrap'</span>, <span className="orange">'Tailwind'</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;learning: <span className="orange">'Advanced React & Next.js'</span>,<br />
                &nbsp;&nbsp;experience: <span className="orange">'1+ Years'</span>,<br />
                &nbsp;&nbsp;status: <span className="orange">'Open to Work'</span>,<br />
                &nbsp;&nbsp;passion: <span className="orange">'Building interactive UI'</span><br />
                {"}"};
              </code>
            </pre>


            
            <div className="card-glow"></div>
          </motion.div>

          {/* Floating Icons */}
          {floatingElements.map((el, index) => (
            <motion.div
              key={index}
              className="floating-icon"
              style={{ 
                top: el.top, 
                left: el.left,
                color: el.color,
                fontSize: '2.5rem',
                position: 'absolute',
                zIndex: 2,
                filter: `drop-shadow(0 0 15px ${el.color}66)`
              }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: el.delay,
                ease: "easeInOut" 
              }}
            >
              <i className={`bi ${el.icon}`}></i>
            </motion.div>
          ))}
        </div>

        <div className="info-box">
          <motion.div 
            className="text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3>{greeting}</h3>
            <h1 id="about-name">Nasir Rasulzada</h1>
            <span className="animated-subtitle" aria-live="polite">
              {subtitleText}
              {!subtitleComplete && <span className="typing-cursor" aria-hidden="true">|</span>}
            </span>
          </motion.div>

          <motion.div 
            className="btn-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button 
              label={translations.downloadCV}
              onClick={handleDownloadCV}
              size="md"
              variant="filled"
              color="dark"
              aria-label={translations.downloadCV}
            />
            <Button 
              label={translations.contact}
              onClick={handleContactClick}
              size="md"
              variant="filled"
              color="dark"
              aria-label={`Scroll to ${translations.contact}`}
            />
          </motion.div>

          <div className="socials">
            <a href="https://github.com/nesirresulzade" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nasir-rasulzada-28a6b7392/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default React.memo(About);


