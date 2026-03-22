import React, { useContext, useState, useEffect, useCallback } from 'react';
import '../style/contact.css';
import { LanguageContext } from '../context/LanguageContext';
import Button from './Button';

function Contact() {
  const { translations } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init('2j13NfEIZItUHwGv4');
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      if (window.emailjs) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        };

        await window.emailjs.send(
          'service_z64ubru',
          'template_we8j4gk',
          templateParams
        );

        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const mailtoLink = `mailto:nasir.resulzade@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Ad: ${formData.name}\nEmail: ${formData.email}\n\nMesaj:\n${formData.message}`)}`;
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
      }
      
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Mail output error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="input-box">
        <h2 id="contact-title" className="section-title" data-aos="fade-down">
          {translations.contactTitle}
        </h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group" data-aos="fade-up" data-aos-delay="200">
            <label htmlFor="name" className="sr-only">{translations.name}</label>
            <div className="input-wrapper">
              <input 
                id="name"
                type="text" 
                name="name"
                placeholder={translations.namePlaceholder} 
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
              <i className="bi bi-person" aria-hidden="true"></i>
            </div>
          </div>

          <div className="input-group" data-aos="fade-up" data-aos-delay="250">
            <label htmlFor="email" className="sr-only">{translations.email}</label>
            <div className="input-wrapper">
              <input 
                id="email"
                type="email" 
                name="email"
                placeholder={translations.emailPlaceholder} 
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
              <i className="bi bi-envelope-at" aria-hidden="true"></i>
            </div>
          </div>

          <div className="input-group" data-aos="fade-up" data-aos-delay="300">
            <label htmlFor="subject" className="sr-only">{translations.subject}</label>
            <div className="input-wrapper">
              <input 
                id="subject"
                type="text" 
                name="subject"
                placeholder={translations.subjectPlaceholder} 
                value={formData.subject}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
              <i className="bi bi-chat-text" aria-hidden="true"></i>
            </div>
          </div>

          <div className="input-group" data-aos="fade-up" data-aos-delay="350">
            <label htmlFor="message" className="sr-only">{translations.message}</label>
            <div className="input-wrapper">
              <textarea 
                id="message"
                name="message"
                placeholder={translations.messagePlaceholder} 
                value={formData.message}
                onChange={handleInputChange}
                required
                aria-required="true"
                rows="4"
              ></textarea>
              <i className="bi bi-chat-dots" aria-hidden="true"></i>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <Button 
              type="submit"
              label={isSubmitting ? translations.sending : translations.sendMessage}
              variant="filled"
              color="dark"
              size="md"
              disabled={isSubmitting}
              className="contact-submit-btn"
            />
          </div>

          {submitStatus === 'success' && (
            <div role="status" className="success-message" data-aos="fade-up">
              {translations.successMessage}
            </div>
          )}

          {submitStatus === 'error' && (
            <div role="alert" className="error-message" data-aos="fade-up">
              {translations.errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
