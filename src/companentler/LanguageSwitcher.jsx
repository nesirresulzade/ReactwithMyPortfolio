import React from 'react';
import '../style/languageSwitcher.css';

function LanguageSwitcher({ currentLanguage, onLanguageChange }) {
    const handleLanguageChange = (language) => {
        if (language !== currentLanguage) {
            onLanguageChange(language);
        }
    };

    return (
        <div className="language-switcher">
            <button 
                className={`lang-btn ${currentLanguage === 'az' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('az')}
                disabled={currentLanguage === 'az'}
            >
                AZ
            </button>
            <span className="separator">|</span>
            <button 
                className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                disabled={currentLanguage === 'en'}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;
