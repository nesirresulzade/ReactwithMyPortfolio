import React, { useState, useContext, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../style/Navbar.css';
import { LanguageContext } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { translations, currentLanguage, onLanguageChange } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isActive) setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isActive]);

  const toggleMenu = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const handleNavigation = (sectionId) => {
    setIsActive(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'about', label: translations.about },
    { id: 'experience', label: translations.experience },
    { id: 'skills', label: translations.skills },
    { id: 'projects', label: translations.projects },
    { id: 'contact', label: translations.contact },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <motion.div 
        className="logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        <span>Nasir.dev</span>
      </motion.div>

      <nav>
        <ul className={`nav-links ${isActive ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                onClick={() => handleNavigation(item.id)} 
                className="nav-link"
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="header-right">
        <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
        
        <button 
          className="toggle" 
          onClick={toggleMenu}
          aria-expanded={isActive}
        >
          <div className={`bars ${isActive ? 'active' : ''}`} id="bar1"></div>
          <div className={`bars ${isActive ? 'active' : ''}`} id="bar2"></div>
          <div className={`bars ${isActive ? 'active' : ''}`} id="bar3"></div>
        </button>

        <motion.a 
          href="https://github.com/nesirresulzade" 
          className="visit-btn"
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
      </div>
    </header>
  );
}

export default React.memo(Navbar);

