import React, { useState, useContext, useEffect, useCallback } from 'react';
import '../style/Navbar.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { translations, currentLanguage, onLanguageChange } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigation = (sectionId) => {
    closeMenu();
    
    if (sectionId === 'mobile-projects' || sectionId === 'real-projects') {
      const targetPath = `/${sectionId}`;
      if (location.pathname !== targetPath) {
        navigate(targetPath);
      }
      return;
    }
    
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isActive]);

  const navItems = [
    { id: 'about', label: translations.about },
    { id: 'experience', label: translations.experience },
    { id: 'skills', label: translations.skills },
    { id: 'projects', label: translations.projects },
    { id: 'contact', label: translations.contact },
  ];

  return (
    <header className="header">
      <Link 
        to="/" 
        onClick={handleLogoClick} 
        className="logo" 
        aria-label="Nasir Rasulzada - Home"
      >
        <span>Nasir Rasulzada</span>
      </Link>

      <nav aria-label="Main Navigation">
        <ul className={`nav-links ${isActive ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleNavigation(item.id)} 
                className="nav-link"
                aria-label={`Scroll to ${item.label}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-right">
        <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />

        <button 
          className="toggle" 
          onClick={toggleMenu}
          aria-expanded={isActive}
          aria-controls="nav-links"
          aria-label="Toggle navigation menu"
        >
          <div className={`bars ${isActive ? 'active' : ''}`} id="bar1"></div>
          <div className={`bars ${isActive ? 'active' : ''}`} id="bar2"></div>
          <div className={`bars ${isActive ? 'active' : ''}`} id="bar3"></div>
        </button>

        <a 
          href="https://github.com/nesirresulzade" 
          className="visit-btn" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={translations.visitGitHub}
        >
          {translations.visitGitHub}
        </a>
      </div>
    </header>
  );
}

export default Navbar;
