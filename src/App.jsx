import React, { useState, useEffect, createContext, Suspense, lazy, useMemo, useCallback } from 'react';
import Navbar from './companentler/Navbar'
import Footer from './companentler/Footer'
import SideNavigator from './companentler/SideNavigator'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Element } from 'react-scroll';
import { translations } from './translations/translations';

// Lazy load components for better performance
const About = lazy(() => import('./companentler/About'));
const Experience = lazy(() => import('./companentler/Experience'));
const Skills = lazy(() => import('./companentler/Skills'));
const RecentPro = lazy(() => import('./companentler/RecentPro'));
const Contact = lazy(() => import('./companentler/Contact'));
const MobileProjects = lazy(() => import('./companentler/MobileProjects'));
const RealProjects = lazy(() => import('./companentler/RealProjects'));

// Loading fallback component
const SectionLoader = () => (
  <div style={{ 
    minHeight: '400px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' 
  }}>
    <div style={{ 
      width: '40px', 
      height: '40px', 
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #5227FF',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
  </div>
);

// Language Context
export const LanguageContext = createContext();

// Component to handle hash-based navigation and scroll-to-top on route change
function HashHandler() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash links more robustly: poll until element exists, then scroll.
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    const id = location.hash.substring(1);
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mounted = true;
    const start = performance.now();
    const timeout = 3000; // give up after 3s
    let rafId = null;

    const tryScroll = () => {
      if (!mounted) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
        return;
      }
      if (performance.now() - start < timeout) {
        rafId = requestAnimationFrame(tryScroll);
      } else {
        // fallback: scroll to top if target never appeared
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };

    // Start on next paint so React can render the target first
    rafId = requestAnimationFrame(tryScroll);

    return () => { mounted = false; if (rafId) cancelAnimationFrame(rafId); };
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

  // Save language to local storage when changed - memoized with useCallback
  const handleLanguageChange = useCallback((language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    // debug log removed for production
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    currentLanguage,
    translations: translations[currentLanguage],
    onLanguageChange: handleLanguageChange
  }), [currentLanguage, handleLanguageChange]);

  return (
    <LanguageContext.Provider value={contextValue}>
      <Router>
        <div className="app">
          <HashHandler />
          
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Suspense fallback={<SectionLoader />}>
                  <Element name='section1'><About /></Element>
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Element name='section2'><Experience /></Element>
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Element name='section3'><Skills /></Element>
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Element name='section4'><RecentPro /></Element>
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Element name='section5'><Contact /></Element>
                </Suspense>
                <Footer />
                <SideNavigator />
              </>
            } />
            <Route path="/mobile-projects" element={
              <>
                <Navbar />
                <Suspense fallback={<SectionLoader />}>
                  <MobileProjects />
                </Suspense>
                <Footer />
                <SideNavigator />
              </>
            } />
            <Route path="/real-projects" element={
              <>
                <Navbar />
                <Suspense fallback={<SectionLoader />}>
                  <RealProjects />
                </Suspense>
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
