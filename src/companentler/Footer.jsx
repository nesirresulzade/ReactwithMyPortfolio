import React from 'react'
import '../style/footer.css';
import { Link } from 'react-scroll';

function Footer() {
    return (
        <footer>

            <ul>
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

            <p className="copyright">&copy; All Rights Reserved | Nasir Rasulzada</p>
        </footer>
    )
}

export default Footer
