import React, { useState, useEffect, createContext } from 'react';
import Navbar from './companentler/Navbar'
import About from './companentler/About'
import Experience from './companentler/Experience'
import Skills from './companentler/Skills'
import RecentPro from './companentler/RecentPro'
import Contact from './companentler/Contact'
import Footer from './companentler/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Element } from 'react-scroll';
import { translations } from './translations/translations';

// Language Context
export const LanguageContext = createContext();

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('az');

  // Local storage'dan dil seçimini yüklə
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Dil dəyişdikdə local storage'a yadda saxla
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    console.log('Language changed to:', language); // Debug üçün
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
          <Navbar />

          <Element name='section1'><About /></Element>
          <Element name='section2'><Experience /></Element>
          <Element name='section3'><Skills /></Element>
          <Element name='section4'><RecentPro /></Element>
          <Element name='section5'><Contact /></Element>

          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  )
}

export default App
