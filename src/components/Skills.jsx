import React from 'react';
import '../styles/Skills.css';
import '../styles/Footer.css';

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills-content">
        <div className="skills-container">
          <h2>Programming Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="skills-container">
          <h2>Web Technologies</h2>
          <ul>
            <li>HTML and CSS</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className="skills-container">
          <h2>Database & Cloud Services</h2>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Amazon Web Services (AWS) </li>
          </ul>
        </div>
        <div className="skills-container">
          <h2>Iot Devices</h2>
          <ul>
            <li>Raspberry Pi</li>
            <li>Arduino</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          <i className="fa-solid fa-copyright"></i> 2025 Jh
        </p>
      </footer>
    </div>
  );
}

export default Skills;
