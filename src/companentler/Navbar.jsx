import React, { useState, useContext, useEffect } from 'react';
import '../style/Navbar.css';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { translations, currentLanguage, onLanguageChange } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const handleLogoClick = () => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      // ensure scroll to top after navigation
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigation function that handles both page navigation and section scrolling
  const handleNavigation = (sectionId) => {
    closeMenu();
    
    // Special handling for mobile-projects
    if (sectionId === 'mobile-projects') {
      if (location.pathname !== '/mobile-projects') {
        navigate('/mobile-projects');
      }
      return;
    }
    
    // Special handling for real-projects
    if (sectionId === 'real-projects') {
      if (location.pathname !== '/real-projects') {
        navigate('/real-projects');
      }
      return;
    }
    
    // If we're not on the home page, navigate there with hash
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll zamanı menyunu avtomatik bağlamaq
  useEffect(() => {
    const handleScroll = () => {
      if (isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isActive]);

  return (
    <header className="header">
      <button onClick={handleLogoClick} className="logo" data-aos="fade-right" data-aos-delay="100">
        <span>Nasir Rasulzada</span>
      </button>

      <ul className={`nav-links ${isActive ? 'active' : ''}`} data-aos="fade-down" data-aos-delay="300">
        <li>
          <button onClick={() => handleNavigation('about')} className="nav-link">
            {translations.about}
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('experience')} className="nav-link">
            {translations.experience}
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('skills')} className="nav-link">
            {translations.skills}
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('projects')} className="nav-link">
            {currentLanguage === 'az' ? 'Layihələr' : 'Projects'}
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('contact')} className="nav-link">
            {translations.contact}
          </button>
        </li>
      </ul>

      <div className="header-right">
        <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />

        {/* Controlled checkbox toggle for mobile/tablet menu (hidden on desktop) */}
        <input
          type="checkbox"
          id="nav-checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <label htmlFor="nav-checkbox" className="toggle" data-aos="fade-left" data-aos-delay="500">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>

        <button className="visit-btn" data-aos="fade-left" data-aos-delay="700">
          <a href="https://github.com/nesirresulzade">{translations.visitGitHub}</a>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
