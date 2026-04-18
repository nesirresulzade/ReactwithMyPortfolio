import React, { useContext, useCallback, useMemo, useState, useEffect } from 'react';
import '../style/about.css';
import { LanguageContext } from '../context/LanguageContext';
import Button from './Button';
import { useTypewriter } from '../hooks/useTypewriter';

const images = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80&fmt=webp",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=600&q=80&fmt=webp",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80&fmt=webp",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80&fmt=webp"
];
function About() {
  const { translations, currentLanguage } = useContext(LanguageContext);
  
  const { displayedText: subtitleText, isComplete: subtitleComplete } = useTypewriter(
    translations.aboutSubtitle,
    100,
    800
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, []);

  const greeting = useMemo(() => {
    return currentLanguage === 'az' ? 'Salam, mən' : "Hi, I'm";
  }, [currentLanguage]);

  return (
    <section id="about" className="about" aria-labelledby="about-name">
      <div className="about-container">
        <div>
          <div className="about-photo-card floating-image-effect">
            {images.map((src, index) => (
              <img 
                key={index}
                src={src} 
                alt={`Frontend Developer Theme ${index + 1}`} 
                className={`about-photo-img ${index === currentImageIndex ? 'active' : ''}`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                width="360"
                height="360"
              />
            ))}
          </div>
        </div>
        <div className="info-box">
          <div className="text">
            <h3>
              {greeting}
            </h3>
            <h1 id="about-name">Nasir Rasulzada</h1>
            <span className="animated-subtitle" aria-live="polite">
              {subtitleText}
              {!subtitleComplete && <span className="typing-cursor" aria-hidden="true">|</span>}
            </span>
          </div>

          <div className="btn-group">
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
          </div>

          <div className="socials">
            <a 
              href="https://github.com/nesirresulzade/partfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View this project on GitHub"
            >
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/nasir-rasulzada-28a6b7392/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="bi bi-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(About);
