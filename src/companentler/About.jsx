import React, { useContext } from 'react';
import Mypp from '../image/updateLogoPhoto.png'
import '../style/about.css'
import { LanguageContext } from '../App';
import Button from './Button';

function About() {
  const { translations, currentLanguage } = useContext(LanguageContext);

  const handleDownloadCV = () => {
    try {
      // CV faylının yolu
      const cvPath = '/Nasir Rasulzadeh.pdf';
      
      // Faylın mövcudluğunu yoxla
      fetch(cvPath, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            // Yeni link elementi yaradır
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'Nasir Rasulzadeh.pdf';
            link.target = '_blank';
            
            // Linki click et və təmizlə
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            console.error('CV faylı tapılmadı');
            alert(translations.cvFileNotFound);
          }
        })
        .catch(error => {
          console.error('CV endirilmə xətası:', error);
          alert(translations.cvDownloadError);
        });
    } catch (error) {
      console.error('Gözlənilməz xəta:', error);
      alert(translations.unexpectedError);
    }
  };

  const handleContactClick = () => {
    // Contact section-ına scroll et
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

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
              <Button 
                label={translations.downloadCV}
                onClick={handleDownloadCV}
                size="sm"
                variant="filled"
                color="dark"
                style={{ '--btn-radius': '9999px', '--btn-font-size': '16px', fontSize: '16px', '--btn-padding-y': '0.5rem', '--btn-padding-x': '1.1rem' }}
              />
              <Button 
                label={translations.contact}
                onClick={handleContactClick}
                size="sm"
                variant="filled"
                color="dark"
                style={{ '--btn-radius': '9999px', '--btn-font-size': '16px', fontSize: '16px', '--btn-padding-y': '0.5rem', '--btn-padding-x': '1.1rem' }}
              />
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
