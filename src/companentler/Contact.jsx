import React, { useContext, useState, useEffect } from 'react';
import '../style/contact.css'
import { LanguageContext } from '../App';
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

  // EmailJS CDN-dən yüklə
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // EmailJS-i başlat
      if (window.emailjs) {
        window.emailjs.init('2j13NfEIZItUHwGv4');
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS istifadə edərək mail göndər
      if (window.emailjs) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        };

        // EmailJS send funksiyası
        await window.emailjs.send(
          'service_z64ubru', // Service ID
          'template_we8j4gk', // Template ID
          templateParams
        );

        // Uğurlu göndərilmə
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // 3 saniyə sonra status-u təmizlə
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        // EmailJS yüklənməyibsə, mailto link istifadə et
        const mailtoLink = `mailto:your-email@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Ad: ${formData.name}\nEmail: ${formData.email}\n\nMesaj:\n${formData.message}`)}`;
        window.open(mailtoLink, '_blank');
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 3000);
      }
      
    } catch (error) {
      console.error('Mail göndərilmə xətası:', error);
      setSubmitStatus('error');
      
      // 3 saniyə sonra status-u təmizlə
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="input-box">
        <h2 className="section-title" data-aos="fade-down">{translations.contactTitle}</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input" data-aos="fade-up" data-aos-delay="200">
            <input 
              type="text" 
              name="name"
              placeholder={translations.namePlaceholder || "Adınız"} 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <i className="bi bi-person"></i>
          </div>

          <div className="input" data-aos="fade-up" data-aos-delay="250">
            <input 
              type="email" 
              name="email"
              placeholder={translations.emailPlaceholder} 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <i className="bi bi-envelope-at"></i>
          </div>

          <div className="input" data-aos="fade-up" data-aos-delay="300">
            <input 
              type="text" 
              name="subject"
              placeholder={translations.subjectPlaceholder || "Mövzu"} 
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <i className="bi bi-chat-text"></i>
          </div>

          <div className="input" data-aos="fade-up" data-aos-delay="350">
            <textarea 
              name="message"
              placeholder={translations.messagePlaceholder || "Mesajınız"} 
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
            ></textarea>
            <i className="bi bi-chat-dots"></i>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <Button 
              type="submit"
              label={isSubmitting ? 'Göndərilir...' : translations.sendMessage}
              variant="filled"
              color="dark"
              size="sm"
              disabled={isSubmitting}
              style={{
                '--btn-bg': 'linear-gradient(45deg, #007bff, #0056b3)',
                '--btn-hover-bg': 'linear-gradient(45deg, #0056b3, #004299)',
                '--btn-color': '#fff',
                '--btn-border-color': 'transparent',
                '--btn-radius': '9999px',
                '--btn-padding-y': '0.55rem',
                '--btn-padding-x': '1.3rem',
                '--btn-font-size': '16px',
              }}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="success-message" data-aos="fade-up">
              Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message" data-aos="fade-up">
              Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
