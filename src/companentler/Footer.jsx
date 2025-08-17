import React, { useContext, useEffect } from 'react';
import '../style/footer.css';
import { Link } from 'react-scroll';
import { LanguageContext } from '../App';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    const { translations } = useContext(LanguageContext);

    useEffect(() => {
        // Animasiya hər scroll zamanı işləsin
        AOS.init({ duration: 600, easing: 'ease-in-out', once: false });
        AOS.refresh();
    }, []);

    const footerLinks = [
        { to: 'section1', label: translations.about },
        { to: 'section2', label: translations.experience },
        { to: 'section3', label: translations.skills },
        { to: 'section4', label: translations.projects },
        { to: 'section5', label: translations.contact },
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
                        <Link
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="footer-link"
                        >
                            {link.label}
                        </Link>
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
