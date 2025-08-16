import React from 'react';
import '../style/contact.css'
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="input-box">
        <h2 className="section-title" data-aos="fade-down">Contact Me</h2>

        <div className="input" data-aos="fade-up" data-aos-delay="200">
          <input type="text" placeholder="example@gmail.com" />
          <i className="bi bi-envelope-at"></i>
        </div>

        <button className="btn" data-aos="fade-up" data-aos-delay="400">Submit</button>
      </div>
    </section>
  );
}

export default Contact;
