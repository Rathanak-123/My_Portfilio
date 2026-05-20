import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import adminImg from '../assets/photo/AdminPicture.jpg';
import customerImg from '../assets/photo/Customer Picture.jpg';

const projectsData = [
  {
    title: "Event & Ticketing - Admin Dashboard",
    description: "A robust admin platform for organizers to create events, manage ticket categories and inventory, track booking reports, and handle user check-ins. Integrated with Google Auth for secure access and MySQL Workbench for database modeling.",
    image: adminImg,
    isPlaceholder: false,
    tags: ["Python", "Django", "MySQL", "Google Auth"],
    github: "#",
    live: "#"
  },
  {
    title: "Event Portal & KHQR Booking",
    description: "A customer-facing application allowing users to browse events, book tickets, and pay instantly via KHQR (Bakong integration) to receive a secure E-ticket. Built with React.js and styled with Material UI.",
    image: customerImg,
    isPlaceholder: false,
    tags: ["React.js", "Material UI", "KHQR Payment", "Bakong"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="glass-card project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-image" style={{ overflow: 'hidden' }}>
                {project.isPlaceholder ? (
                  <span>{project.image}</span>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    className="project-img-hover" 
                  />
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="skill-list" style={{ marginBottom: '1.5rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag" style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <Code size={18} /> Code
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
