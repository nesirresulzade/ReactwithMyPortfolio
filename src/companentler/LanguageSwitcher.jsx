import React from 'react';
import '../style/languageSwitcher.css';

function LanguageSwitcher({ currentLanguage, onLanguageChange }) {
    return (
        <div className="language-switcher">
            <button 
                className={`lang-btn ${currentLanguage === 'az' ? 'active' : ''}`}
                onClick={() => onLanguageChange('az')}
            >
                AZ
            </button>
            <span className="separator">|</span>
            <button 
                className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => onLanguageChange('en')}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;
