import React, { useContext } from 'react'
import '../style/footer.css';
import { Link } from 'react-scroll';
import { LanguageContext } from '../App';

function Footer() {
    const { translations } = useContext(LanguageContext);

    return (
        <footer>
            <ul data-aos="fade-up" data-aos-delay="200">
                <li>
                    <Link
                        to="section1"
                        smooth={true}
                        duration={500}
                        className="footer-link"
                    >
                        {translations.about}
                    </Link>
                </li>

                <li>
                    <Link
                        to="section2"
                        smooth={true}
                        duration={500}
                        className="footer-link"
                    >
                        {translations.experience}
                    </Link>
                </li>

                <li>
                    <Link
                        to="section3"
                        smooth={true}
                        duration={500}
                        className="footer-link"
                    >
                        {translations.skills}
                    </Link>
                </li>

                <li>
                    <Link
                        to="section4"
                        smooth={true}
                        duration={500}
                        className="footer-link"
                    >
                        {translations.projects}
                    </Link>
                </li>

                <li>
                    <Link
                        to="section5"
                        smooth={true}
                        duration={500}
                        className="footer-link"
                    >
                        {translations.contact}
                    </Link>
                </li>
            </ul>
            <p className="copyright" data-aos="fade-up" data-aos-delay="400">{translations.copyright}</p>
        </footer>
    )
}

export default Footer
