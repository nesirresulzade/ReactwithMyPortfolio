import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

function SideNavigator() {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = useCallback((path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  const navItems = [
    {
      id: 'real',
      path: '/real-projects',
      label: translations.realProjectsTooltip || 'Real Layihələr',
      desc: translations.realProjectsDesc || 'Professional layihələr',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      badgeGradient: 'bg-gradient-to-r from-blue-600 to-cyan-500',
      activeBorder: 'border-blue-400 ring-2 ring-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.5)]',
      inactiveBorder: 'border-blue-500/50 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]'
    },
    {
      id: 'mobile',
      path: '/mobile-projects',
      label: translations.mobileProjectsTooltip || 'Mobil Tətbiqlər',
      desc: translations.mobileProjectsDesc || 'Mobil tətbiqlər',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      badgeGradient: 'bg-gradient-to-r from-purple-600 to-pink-500',
      activeBorder: 'border-purple-400 ring-2 ring-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.5)]',
      inactiveBorder: 'border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)]'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          aria-label="Quick page navigation"
          className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={item.id} className="group relative flex items-center">
                {/* Tooltip for mobile touch or desktop hover */}
                <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none sm:hidden">
                  <div className="bg-slate-900/95 backdrop-blur-md border border-white/15 rounded-xl px-3 py-1.5 shadow-2xl whitespace-nowrap">
                    <span className="font-medium text-white text-xs">{item.label}</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => handleNavigation(item.path)}
                  aria-label={item.label}
                  whileHover={{ scale: 1.08, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center gap-2.5 p-2 sm:px-4 sm:py-3 rounded-2xl border backdrop-blur-xl bg-slate-950/90 text-white font-medium shadow-2xl transition-all duration-300 ${
                    isActive ? item.activeBorder : item.inactiveBorder
                  }`}
                >
                  {/* Glowing Icon Container */}
                  <div className={`p-2 rounded-xl text-white ${item.badgeGradient} shadow-md flex items-center justify-center shrink-0`}>
                    {item.icon}
                  </div>

                  {/* Label Text & Subtitle - Hidden on mobile (< sm), visible on desktop (>= sm) */}
                  <div className="hidden sm:flex flex-col text-left pr-1">
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-white leading-tight whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-gray-300 font-normal leading-tight whitespace-nowrap hidden lg:inline">
                      {item.desc}
                    </span>
                  </div>

                  {/* Active Indicator Badge */}
                  {isActive && (
                    <span className="relative flex h-2.5 w-2.5 sm:ml-1 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  )}
                </motion.button>
              </div>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default React.memo(SideNavigator);

