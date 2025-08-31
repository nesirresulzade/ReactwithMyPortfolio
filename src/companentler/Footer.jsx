import React, { useContext, useEffect } from 'react';
import '../style/footer.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    const { translations } = useContext(LanguageContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    // Navigation function that handles both page navigation and section scrolling
    const handleNavigation = (sectionId) => {
        // Special handling for mobile-projects
        if (sectionId === 'mobile-projects') {
            if (location.pathname !== '/mobile-projects') {
                navigate('/mobile-projects');
            }
            return;
        }
        
        // Special handling for real-projects
        if (sectionId === 'real-projects') {
            if (location.pathname !== '/real-projects') {
                navigate('/real-projects');
            }
            return;
        }
        
        // If we're not on the home page, navigate there with hash
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
        } else {
            // If we're already on home page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const footerLinks = [
        { to: 'about', label: translations.about },
        { to: 'experience', label: translations.experience },
        { to: 'skills', label: translations.skills },
        { to: 'projects', label: translations.projects },
        { to: 'contact', label: translations.contact },
    ];

    return (
        <footer>
            <ul>
                {footerLinks.map((link, index) => (
                    <li
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation(link.to);
                            }}
                            className="footer-link"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p
                className="copyright"
                data-aos="fade-up"
                data-aos-delay={footerLinks.length * 150}
            >
                {translations.copyright}
            </p>
        </footer>
    );
}

export default Footer;
