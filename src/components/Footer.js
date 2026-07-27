import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>ValsCoder</h3>
              <p>Professional web development and design agency creating digital solutions for modern businesses.</p>
              <div className="social-links">
                <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">SEO Optimization</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: hello@valscode.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: San Francisco, CA</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} ValsCoder. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
