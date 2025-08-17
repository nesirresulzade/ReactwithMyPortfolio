import React, { useContext } from 'react';
import '../style/contact.css'
import { LanguageContext } from '../App';

function Contact() {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="contact" id="contact">
      <div className="input-box">
        <h2 className="section-title" data-aos="fade-down">{translations.contactTitle}</h2>

        <div className="input" data-aos="fade-up" data-aos-delay="200">
          <input type="text" placeholder={translations.emailPlaceholder} />
          <i className="bi bi-envelope-at"></i>
        </div>

        <button className="btn" data-aos="fade-up" data-aos-delay="400">{translations.sendMessage}</button>
      </div>
    </section>
  );
}

export default Contact;
