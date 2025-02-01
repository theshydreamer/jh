import React from 'react';
import image from '../assets/jhb.jpg'; // Corrected import statement
import '../styles/Home.css';

function Home() {
  // Handle "Get in Touch" button click
  const handleGetInTouch = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=johnharrybeato@gmail.com', '_blank'); // Open in a new tab
  };

  // Handle "View Resume" button click
  const handleViewResume = () => {
    window.open('/JohnHarryBeato - Resume.pdf', '_blank'); // Open the resume in a new tab
  };

  return (
    <div className="home" id="home">
      <div className="content-container">
        <div className="content-left">
          <h1>Hello, I'm John Harry!</h1>
          <p>Software Developer</p>
          <div className="home-buttons">
            <button onClick={handleGetInTouch}>Get in Touch</button>
            <button onClick={handleViewResume}>View Resume</button>
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com/jhtheshydreamer" target="_blank" rel="noopener noreferrer">
              <button className="icon-link"><i className="fab fa-facebook"></i></button>
            </a>
            <a href="https://github.com/theshydreamer" target="_blank" rel="noopener noreferrer">
              <button className="icon-link"><i className="fab fa-github"></i></button>
            </a>
            <a href="https://www.linkedin.com/in/theshydreamer/" target="_blank" rel="noopener noreferrer">
              <button className="icon-link"><i className="fab fa-linkedin"></i></button>
            </a>
          </div>
        </div>
      </div>
      <div className="content-right">
        <img src={image} alt="John Harry" />
      </div>
    </div>
  );
}

export default Home;
