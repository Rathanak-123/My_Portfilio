import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="glass-card about-text">
            <p>
              Passionate and motivated Full-Stack Web Developer with experience in developing web applications using PHP Laravel, Python Django, Java Spring Boot, React.JS, and modern database systems.
            </p>
            <p>
              Experienced in building real-world projects including Event management systems, and e-commerce platforms. Skilled in both front-end and back-end development, REST API integration, database design, CRUD operations, authentication systems, and responsive web design.
            </p>
            <p>
              Strong understanding of software development concepts and eager to learn new technologies and improve problem-solving skills. A hardworking, fast-learning, and responsible developer seeking an opportunity to gain professional experience and contribute to a development team as a Full-Stack Web Developer Intern.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
