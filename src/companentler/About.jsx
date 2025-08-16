import React from 'react';
import Mypp from '../image/mypp.jpeg'
import '../style/about.css'
function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <img 
            src={Mypp} 
            alt="My profile" 
            data-aos="fade-right"
            data-aos-delay="200"
          />

          <div className="info-box">
            <div className="text">
              <h3 data-aos="fade-left" data-aos-delay="400">Hi, I'm</h3>
              <h1 data-aos="fade-left" data-aos-delay="600">Nasir Rasulzada</h1>
              <span data-aos="fade-left" data-aos-delay="800">Frontend Developer</span>
            </div>

            <div className="btn-group" data-aos="fade-up" data-aos-delay="1000">
              <div className="btn">Download CV</div>
              <div className="btn">Contact</div>
            </div>

            <div className="socials" data-aos="fade-up" data-aos-delay="1200">
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
