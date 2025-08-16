import React from 'react'
import '../style/footer.css';
import { Link } from 'react-scroll';

function Footer() {
    return (
        <footer>
            <ul data-aos="fade-up" data-aos-delay="200">
                <li>
                    <Link
                        to="section1"
                        smooth={true}
                        duration={500}
                    >
                        <a href="#">About</a>
                    </Link>
                </li>

                <li>
                    <Link
                        to="section2"
                        smooth={true}
                        duration={500}
                    >
                        <a href="#">Experience</a>
                    </Link>
                </li>

                <li>
                    <Link
                        to="section3"
                        smooth={true}
                        duration={500}
                    >
                        <a href="#">Projects</a>
                    </Link>
                </li>

                <li>
                    <Link
                        to="section4"
                        smooth={true}
                        duration={500}
                    >
                        <a href="#">Contact</a>
                    </Link>
                </li>
            </ul>

            <p className="copyright" data-aos="fade-up" data-aos-delay="400">&copy; All Rights Reserved | Nasir Rasulzada</p>
        </footer>
    )
}

export default Footer
