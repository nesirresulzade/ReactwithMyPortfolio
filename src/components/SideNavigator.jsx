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
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      tooltip: translations.realProjectsTooltip,
      desc: translations.realProjectsDesc,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      activeClass: 'bg-blue-600/20 text-blue-400 border-blue-500/50',
      inactiveClass: 'bg-white/5 text-gray-400 border-white/10'
    },
    {
      id: 'mobile',
      path: '/mobile-projects',
      tooltip: translations.mobileProjectsTooltip,
      desc: translations.mobileProjectsDesc,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      activeClass: 'bg-purple-600/20 text-purple-400 border-purple-500/50',
      inactiveClass: 'bg-white/5 text-gray-400 border-white/10'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={item.id} className="group relative flex items-center">
                {/* Tooltip */}
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
                  <div className="bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl min-w-[160px]">
                    <div className="font-semibold text-white text-sm mb-1">{item.tooltip}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`relative w-14 h-14 flex items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                    isActive ? item.activeClass : item.inactiveClass
                  } hover:bg-white/10`}
                >
                  {item.icon}
                  {isActive && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -right-1 w-1.5 h-1.5 bg-current rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default React.memo(SideNavigator);

