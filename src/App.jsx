import React, { useState, useEffect, createContext } from 'react';
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
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Element } from 'react-scroll';
import { translations } from './translations/translations';

// Language Context
export const LanguageContext = createContext();

// Component to handle hash-based navigation
function HashHandler() {
  const location = useLocation();

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
    }
  }, [location]);

  return null;
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load language selection from local storage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to local storage when changed
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    console.log('Language changed to:', language); // Debug purpose
  };

  // Check loading state when page loads and deactivate
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

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
