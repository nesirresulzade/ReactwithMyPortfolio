import React from 'react';
import Mypp from '../image/mypp.jpeg'
import '../style/about.css'
function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <img src={Mypp} alt="My profile" />

          <div className="info-box">

            <div className="text">
              <h3>Hi, I'm</h3>
              <h1>Nasir Rasulzada</h1>
              <span>Frontend Developer</span>
            </div>

            <div className="btn-group">
              <div className="btn">Download CV</div>
              <div className="btn">Contact</div>
            </div>

            <div className="socials">
              <a href="https://github.com/nesirresulzade/partfolio">
                <i className="bi bi-github"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
