import React from 'react';
import '../style/contact.css'
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="input-box">

        <h2 className="section-title">Contact Me</h2>

        <div className="input">
          <input type="text" placeholder="example@gmail.com" />
          <i className="bi bi-envelope-at"></i>
        </div>

        <button className="btn">Submit</button>
      </div>
    </section>
  );
}

export default Contact;
