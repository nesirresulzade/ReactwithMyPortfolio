import React, { useState, useEffect, createContext, useRef } from 'react';
import Navbar from './companentler/Navbar'
import About from './companentler/About'
import Experience from './companentler/Experience'
import Skills from './companentler/Skills'
import RecentPro from './companentler/RecentPro'
import Contact from './companentler/Contact'
import Footer from './companentler/Footer'

import MobileProjects from './companentler/MobileProjects'
import RealProjects from './companentler/RealProjects'
import SideNavigator from './companentler/SideNavigator'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Element } from 'react-scroll';
import { translations } from './translations/translations';

// Language Context
export const LanguageContext = createContext();

// Component to handle hash-based navigation and initial scroll to About
function HashHandler() {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the # symbol
      
      // Wait a bit for the page to render, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else if (location.pathname === '/' && isInitialMount.current) {
      // If no hash and we're on home page, scroll to About section on initial load/refresh
      setTimeout(() => {
        const aboutElement = document.getElementById('about');
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      isInitialMount.current = false;
    }
    
    // Reset flag when pathname changes
    if (location.pathname !== '/') {
      isInitialMount.current = true;
    }
  }, [location]);

  return null;
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load language selection from local storage only if it exists
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'az')) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Set default language to English if no valid saved language
      setCurrentLanguage('en');
      localStorage.setItem('language', 'en');
    }
  }, []);

  // Save language to local storage when changed
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    console.log('Language changed to:', language); // Debug purpose
  };

  const currentTranslations = translations[currentLanguage];

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      translations: currentTranslations, 
      onLanguageChange: handleLanguageChange 
    }}>
      <Router>
        <div className="app">
          <HashHandler />
          
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Element name='section1'><About /></Element>
                <Element name='section2'><Experience /></Element>
                <Element name='section3'><Skills /></Element>
                <Element name='section4'><RecentPro /></Element>
                <Element name='section5'><Contact /></Element>
                <Footer />
                <SideNavigator />
              </>
            } />
            <Route path="/mobile-projects" element={
              <>
                <Navbar />
                <MobileProjects />
                <Footer />
                <SideNavigator />
              </>
            } />
            <Route path="/real-projects" element={
              <>
                <Navbar />
                <RealProjects />
                <Footer />
                <SideNavigator />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  )
}

export default App
