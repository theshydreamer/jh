import React from 'react';
import image from '../assets/ams.png';
import image1 from '../assets/lt.png';
import image2 from '../assets/portfolio.png';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <div className="project-container">
          <h2>Attendance Monitoring System</h2>
          <img src={image} alt="Attendance Monitoring System" />
          <p>Description: An Attendance Monitoring System using RFID is a technology-based solution designed to track and manage the attendance of individuals within a specific environment of our school. It utilizes RFID cards issued to individuals, which are then scanned by RFID readers placed at entry. This system automatically records the presence or absence of individuals, providing accurate attendance data without the need for manual input.</p>
          <p>Programming Languages & Frameworks: JavaScript, Node.js, Express.js, Python</p>
          <p>Databases & Cloud Services: PostgreSQL, Amazon Web Services (AWS) </p>
          <p>Hardware & Techonologies: Raspberry Pi, RFID Card and Scanner, Monitor, Power Supply and Wall Mount Enclosure</p>
        </div>
        <div className="project-container">
          <h2>Legislative Tracker</h2>
          <img src={image1} alt="Legislative Tracker" />
          <p>Description: The Legislative Tracker is a dynamic web application designed to help users monitor the progress of bills, ordinances, and resolutions through the legislative process. This tool offers a comprehensive and user-friendly interface, providing real-time updates and detailed information on legislative activities.</p>
          <p>Programming Languages & Frameworks: React.js, JavaScript, Node.js, Express.js</p>
          <p>Database & Cloud Services: PostgreSQL</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
