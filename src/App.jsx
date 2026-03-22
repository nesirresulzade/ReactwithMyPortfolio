import React, { useState, useEffect, Suspense, lazy, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideNavigator from './components/SideNavigator';
import { LanguageContext } from './context/LanguageContext';
import { translations } from './translations/translations';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const RecentPro = lazy(() => import('./components/RecentPro'));
const Contact = lazy(() => import('./components/Contact'));
const MobileProjects = lazy(() => import('./components/MobileProjects'));
const RealProjects = lazy(() => import('./components/RealProjects'));

const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner"></div>
  </div>
);

function HashHandler() {
  const location = useLocation();

  useEffect(() => {
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
    const timeout = 3000;
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
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };

    rafId = requestAnimationFrame(tryScroll);
    return () => { mounted = false; if (rafId) cancelAnimationFrame(rafId); };
  }, [location]);

  return null;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <SideNavigator />
    </>
  );
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'az') ? savedLanguage : 'en';
  });

  const handleLanguageChange = useCallback((language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

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
          <Layout>
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<SectionLoader />}>
                  <Element name='section1' id="about"><About /></Element>
                  <Element name='section2' id="experience"><Experience /></Element>
                  <Element name='section3' id="skills"><Skills /></Element>
                  <Element name='section4' id="projects"><RecentPro /></Element>
                  <Element name='section5' id="contact"><Contact /></Element>
                </Suspense>
              } />
              <Route path="/mobile-projects" element={
                <Suspense fallback={<SectionLoader />}>
                   <MobileProjects />
                </Suspense>
              } />
              <Route path="/real-projects" element={
                <Suspense fallback={<SectionLoader />}>
                  <RealProjects />
                </Suspense>
              } />
            </Routes>
          </Layout>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
