import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform featuring product listings, shopping cart, user authentication, and secure checkout. Built with modern web technologies.",
    image: "E-Commerce Project",
    tags: ["React", "Laravel", "MySQL"],
    github: "#",
    live: "#"
  },
  {
    title: "Event Management System",
    description: "A comprehensive system to create, manage, and register for events. Includes dashboards for both organizers and attendees.",
    image: "Event Management",
    tags: ["Django", "Python", "PostgreSQL"],
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
              <div className="project-image">
                {project.image}
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
