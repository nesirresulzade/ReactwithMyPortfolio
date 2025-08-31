import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';

function SideNavigator() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const { translations, currentLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Show navigator after scrolling down 200px
      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation functions
  const handleRealProjects = () => {
    navigate('/real-projects');
    window.scrollTo(0, 0);
  };

  const handleMobileProjects = () => {
    navigate('/mobile-projects');
    window.scrollTo(0, 0);
  };

  // Check if current page is active
  const isRealProjectsActive = location.pathname === '/real-projects';
  const isMobileProjectsActive = location.pathname === '/mobile-projects';

  return (
    <div 
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 2000)}
    >
      {/* Main Navigator Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="flex flex-col space-y-4 mr-4">
          {/* Real Projects Button */}
          <button
            onClick={handleRealProjects}
            className={`group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-l-2xl shadow-lg transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-xl ${
              isRealProjectsActive 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white'
            }`}
          >
            {/* Icon */}
            <div className="flex flex-col items-center space-y-1">
              <svg 
                className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                  isRealProjectsActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-xs font-medium hidden sm:block">RP</span>
            </div>
            
            {/* Active Indicator */}
            {isRealProjectsActive && (
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-lg"></div>
            )}
          </button>

          {/* Mobile Projects Button */}
          <button
            onClick={handleMobileProjects}
            className={`group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-l-2xl shadow-lg transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-xl ${
              isMobileProjectsActive 
                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white' 
                : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white'
            }`}
          >
            {/* Icon */}
            <div className="flex flex-col items-center space-y-1">
              <svg 
                className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${
                  isMobileProjectsActive ? 'text-white' : 'text-green-600 group-hover:text-green-700'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium hidden sm:block">MP</span>
            </div>
            
            {/* Active Indicator */}
            {isMobileProjectsActive && (
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-lg"></div>
            )}
          </button>
        </div>

        {/* Tooltip Container */}
        <div className={`absolute right-full mr-4 top-0 transition-all duration-300 ease-out ${
          (isHovered || isTouched) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        } ${isTouched ? 'block' : 'hidden xl:block'}`}>
          <div className="flex flex-col space-y-4">
            {/* Real Projects Tooltip */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border border-gray-200/50 min-w-[120px] md:min-w-[140px]">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs md:text-sm font-medium text-gray-800">
                  {translations.realProjectsTooltip}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1 hidden md:block">
                {translations.realProjectsDesc}
              </p>
            </div>

            {/* Mobile Projects Tooltip */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border border-gray-200/50 min-w-[120px] md:min-w-[140px]">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs md:text-sm font-medium text-gray-800">
                  {translations.mobileProjectsTooltip}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1 hidden md:block">
                {translations.mobileProjectsDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute right-0 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-l-full transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
}

export default SideNavigator;
