import React, { useContext } from 'react';
import '../style/loading.css';
import { LanguageContext } from '../App';

function Loading() {
  const { currentLanguage } = useContext(LanguageContext);

  const loadingText = {
    az: {
      title: 'Dil dəyişdirilir...',
      subtitle: 'Zəhmət olmasa gözləyin'
    },
    en: {
      title: 'Changing language...',
      subtitle: 'Please wait'
    }
  };

  const currentText = loadingText[currentLanguage];

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-text">
          <h3>{currentText.title}</h3>
          <p>{currentText.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
