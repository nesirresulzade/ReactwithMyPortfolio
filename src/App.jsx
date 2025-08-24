import React, { useState, useEffect, createContext } from 'react';
import Navbar from './companentler/Navbar'
import About from './companentler/About'
import Experience from './companentler/Experience'
import Skills from './companentler/Skills'
import RecentPro from './companentler/RecentPro'
import Contact from './companentler/Contact'
import Footer from './companentler/Footer'
import Loading from './companentler/Loading'
import MobileProjects from './companentler/MobileProjects'
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
  const [currentLanguage, setCurrentLanguage] = useState('az');
  const [isLoading, setIsLoading] = useState(false);

  // Local storage'dan dil seçimini yüklə
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Dil dəyişdikdə local storage'a yadda saxla və səhifəni yenilə
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    console.log('Language changed to:', language); // Debug üçün
    
    // Loading göstər və localStorage-a yadda saxla
    setIsLoading(true);
    localStorage.setItem('isLoading', 'true');
    
    // Qısa bir gecikmədən sonra səhifəni yenilə
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // Səhifə yükləndikdə loading-i yoxla və deaktiv et
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
    
    // Loading state-i yoxla
    const loadingState = localStorage.getItem('isLoading');
    if (loadingState === 'true') {
      // Loading göstər və sonra deaktiv et
      setIsLoading(true);
      
      // Qısa müddət sonra loading-i gizlət və localStorage-dan sil
      setTimeout(() => {
        setIsLoading(false);
        localStorage.removeItem('isLoading');
      }, 1000);
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
          {isLoading && <Loading />}
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
              </>
            } />
            <Route path="/mobile-projects" element={
              <>
                <Navbar />
                <MobileProjects />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  )
}

export default App
