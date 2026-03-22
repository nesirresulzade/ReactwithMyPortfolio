import React, { useContext, useCallback } from 'react';
import '../style/footer.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

function Footer() {
    const { translations } = useContext(LanguageContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = useCallback((sectionId) => {
        if (sectionId === 'mobile-projects' || sectionId === 'real-projects') {
            const targetPath = `/${sectionId}`;
            if (location.pathname !== targetPath) {
                navigate(targetPath);
            }
            return;
        }
        
        if (location.pathname !== '/') {
            navigate(`/#${sectionId}`);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location, navigate]);

    const footerLinks = [
        { id: 'about', label: translations.about },
        { id: 'experience', label: translations.experience },
        { id: 'skills', label: translations.skills },
        { id: 'projects', label: translations.projects },
        { id: 'contact', label: translations.contact },
    ];

    return (
        <footer className="footer" aria-label="Footer Navigation">
            <nav>
                <ul className="footer-links">
                    {footerLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => handleNavigation(link.id)}
                                className="footer-link-btn"
                                aria-label={`Scroll to ${link.label}`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <p className="copyright">
                {translations.copyright}
            </p>
        </footer>
    );
}

export default React.memo(Footer);
