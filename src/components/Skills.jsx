import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code2, Database as DbIcon, GitBranch } from 'lucide-react';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaPhp, FaLaravel, 
  FaPython, FaJava, FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiJavascript, SiDjango, SiSpringboot, SiMysql, SiPostgresql 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillsData = [
  {
    category: "Front End",
    icon: <Layout className="category-icon" />,
    skills: [
      { name: "React.js", icon: <FaReact style={{ color: '#61dafb' }} /> },
      { name: "HTML", icon: <FaHtml5 style={{ color: '#e34f26' }} /> },
      { name: "CSS", icon: <FaCss3Alt style={{ color: '#1572b6' }} /> },
      { name: "JavaScript", icon: <SiJavascript style={{ color: '#f7df1e' }} /> }
    ]
  },
  {
    category: "Back End",
    icon: <Code2 className="category-icon" />,
    skills: [
      { name: "PHP", icon: <FaPhp style={{ color: '#777bb4' }} /> },
      { name: "Laravel", icon: <FaLaravel style={{ color: '#ff2d20' }} /> },
      { name: "Python", icon: <FaPython style={{ color: '#3776ab' }} /> },
      { name: "Django", icon: <SiDjango style={{ color: '#092e20' }} /> },
      { name: "Java", icon: <FaJava style={{ color: '#007396' }} /> },
      { name: "Spring Boot", icon: <SiSpringboot style={{ color: '#6db33f' }} /> }
    ]
  },
  {
    category: "Database",
    icon: <DbIcon className="category-icon" />,
    skills: [
      { name: "MySQL", icon: <SiMysql style={{ color: '#4479a1' }} /> },
      { name: "MySQL Workbench", icon: <SiMysql style={{ color: '#00758f' }} /> },
      { name: "SQL Server", icon: <FaDatabase style={{ color: '#cc292b' }} /> },
      { name: "PostgreSQL", icon: <SiPostgresql style={{ color: '#4169e1' }} /> }
    ]
  },
  {
    category: "Version Control & Other",
    icon: <GitBranch className="category-icon" />,
    skills: [
      { name: "Git", icon: <FaGitAlt style={{ color: '#f05032' }} /> },
      { name: "GitHub", icon: <FaGithub style={{ color: 'var(--text-main)' }} /> },
      { name: "REST API", icon: <TbApi style={{ color: '#00bcd4' }} /> },
      { name: "CRUD", icon: <FaDatabase style={{ color: '#9c27b0' }} /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillsData.map((item, index) => (
            <motion.div 
              key={index} 
              className="glass-card skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.4rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem' }}>
                {item.icon} {item.category}
              </h3>
              <div className="skill-list" style={{ marginTop: '1.5rem' }}>
                {item.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
