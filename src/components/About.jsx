import React from 'react';
import '../styles/About.css';

function About () {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="personal-info-container">
          <h2>Personal Info</h2>
          <p>Name: John Harry D. Beato</p>
          <p>Email: johnharrybeato@gmail.com</p>
          <p>Location: Pasig City, Philippines</p>
          <p>Contact Number: +639162805635</p>
        </div>
        <div className="education-container">
          <h2>Education</h2>
          <p>School: Eastern Samar State University</p>
          <p>Degree: Bachelor of Science in Computer Engineering</p>
          <p>Major: System and Network Administration</p>
        </div>
        <div className="experience-container">
          <h2>Work Experiences</h2>
          <p>Position: Intern Developer</p>
          <p>Company: City Population Office</p>
          <p>Date: May 2023 - August 2023</p>
        </div>
      </div>
    </div>
  );
}

export default About;