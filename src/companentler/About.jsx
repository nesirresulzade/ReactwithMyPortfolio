import React, { useContext } from 'react';
import Mypp from '../image/mypp.jpeg'
import '../style/about.css'
import { LanguageContext } from '../App';

function About() {
  const { translations, currentLanguage } = useContext(LanguageContext);

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
              <h3 data-aos="fade-left" data-aos-delay="400">
                {currentLanguage === 'az' ? 'Salam, mən' : "Hi, I'm"}
              </h3>
              <h1 data-aos="fade-left" data-aos-delay="600">Nasir Rasulzada</h1>
              <span data-aos="fade-left" data-aos-delay="800">{translations.aboutSubtitle}</span>
            </div>

            <div className="btn-group" data-aos="fade-up" data-aos-delay="1000">
              <div className="btn">{translations.downloadCV}</div>
              <div className="btn">{translations.contact}</div>
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
