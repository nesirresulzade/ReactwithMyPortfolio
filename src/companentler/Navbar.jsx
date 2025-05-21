import React, { useState } from 'react';
import '../style/Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <a href="#" className="logo"><span>Nasir Rasulzada</span></a>

      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
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

      <i className="bi bi-list" id="menu-icon" onClick={toggleMenu}></i>

      <button className="visit-btn">
        <a href="https://github.com/nesirresulzade/partfolio">Visit GitHub</a>
      </button>
    </header>
  );
}

export default Navbar;
