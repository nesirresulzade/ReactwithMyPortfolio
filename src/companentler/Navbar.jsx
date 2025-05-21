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
        <li><Link to="section1" smooth={true} duration={500}>About</Link></li>
        <li><Link to="section2"  smooth={true} duration={500} >Experience</Link></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <i className="bi bi-list" id="menu-icon" onClick={toggleMenu}></i>

      <button className="visit-btn">
        <a href="https://github.com/nesirresulzade/partfolio">Visit GitHub</a>
      </button>
    </header>
  );
}

export default Navbar;
