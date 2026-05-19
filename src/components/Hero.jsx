import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/photo/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Hello, I'm</h2>
          <h1>
            <span className="text-gradient">TEOUM</span> RATHANAK
          </h1>
          <p>
            Passionate Full-Stack Web Developer Intern with experience in React, PHP Laravel, Python Django, and Java Spring Boot.
            I build modern, responsive, and dynamic web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glow"></div>
          <img src={profileImg} alt="Teoum Rathanak" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
