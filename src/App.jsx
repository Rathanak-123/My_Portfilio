import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo">
            <span className="text-gradient">TR</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Teoum Rathanak. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
