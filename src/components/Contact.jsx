import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="glass-card">
            <div className="contact-grid">
              <a href="mailto:teoumrathanak@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <h3>Email</h3>
                <p>teoumrathanak@gmail.com</p>
              </a>
              
              <a href="tel:+855972177874" className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <h3>Phone</h3>
                <p>+855 972177874</p>
              </a>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <h3>Location</h3>
                <p>Battambang, Cambodia</p>
              </div>
              
              <a href="https://github.com/Rathanak-123" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Code size={24} />
                </div>
                <h3>GitHub</h3>
                <p>github.com/Rathanak-123</p>
              </a>
            </div>
            
            <div style={{ marginTop: '3rem', textAlign: 'center', borderTop: '1px solid var(--card-border)', paddingTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Reference</h3>
              <p style={{ color: 'var(--text-muted)' }}><strong>Mr. Samang Chhay</strong></p>
              <p style={{ color: 'var(--text-muted)' }}>Deputy Director of Build Bright University, Battambang Province</p>
              <p style={{ color: 'var(--text-muted)' }}>Email: chhaysamang@bb.bbu.edu.kh | Phone: 098222232</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
