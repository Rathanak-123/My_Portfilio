import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    period: "2022 - 2026",
    title: "Bachelor of Information Technology",
    institution: "Build Bright University, Cambodia",
    description: "GPA: 3.5/4.0",
    type: "degree"
  },
  {
    period: "2022",
    title: "Grade 12 Diploma",
    institution: "Anlong Vil High School",
    description: "Graduated",
    type: "degree"
  }
];

const trainingData = [
  {
    period: "2022 - 2026",
    title: "Student (Level 6)",
    institution: "COERR Language School Skill Center",
    type: "course"
  },
  {
    period: "July 2025",
    title: "Python Course",
    institution: "with Student of SAHMYOOK University",
    type: "course"
  },
  {
    period: "April - June 2022",
    title: "Computer Basics (Word, Excel, Powerpoint)",
    institution: "MasterInformation",
    type: "course"
  }
];

const Education = () => {
  return (
    <section id="education" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education & Training</h2>
        
        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              key={`edu-${index}`} 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-date">{item.period}</div>
                <h3>{item.title}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
          
          {trainingData.map((item, index) => (
            <motion.div 
              key={`train-${index}`} 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (educationData.length + index) * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-date">{item.period}</div>
                <h3>{item.title}</h3>
                <h4>{item.institution}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
