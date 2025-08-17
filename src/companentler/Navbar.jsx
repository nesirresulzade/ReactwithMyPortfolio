import React, { useState, useContext, useEffect } from 'react';
import '../style/Navbar.css';
import { Link } from 'react-scroll';
import { LanguageContext } from '../App';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { translations, currentLanguage, onLanguageChange } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Scroll zamanı menyunu avtomatik bağlamaq
  useEffect(() => {
    const handleScroll = () => {
      if (isActive) setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isActive]);

  return (
    <header className="header">
      <a href="#" className="logo" data-aos="fade-right" data-aos-delay="100">
        <span>Nasir Rasulzada</span>
      </a>

      <ul className={`nav-links ${isActive ? 'active' : ''}`} data-aos="fade-down" data-aos-delay="300">
        <li>
          <Link to="section1" smooth={true} duration={500} className="nav-link">
            {translations.about}
          </Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={500} className="nav-link">
            {translations.experience}
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500} className="nav-link">
            {translations.skills}
          </Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500} className="nav-link">
            {translations.projects}
          </Link>
        </li>
        <li>
          <Link to="section5" smooth={true} duration={500} className="nav-link">
            {translations.contact}
          </Link>
        </li>
      </ul>

      <div className="header-right">
        <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
        <i className="bi bi-list" id="menu-icon" onClick={toggleMenu} data-aos="fade-left" data-aos-delay="500"></i>
        <button className="visit-btn" data-aos="fade-left" data-aos-delay="700">
          <a href="https://github.com/nesirresulzade/partfolio">{translations.visitGitHub}</a>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
