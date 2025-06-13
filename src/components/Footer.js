import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:afomiandualem@gmail.com">afomiandualem@gmail.com</a></p>
          <p>References available upon request</p>

          {/* Social Media Icons */}
          <div className="social-icons" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="#0A66C2" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#E1306C" />
            </a>
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} color="#1877F2" />
            </a> */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} color="#1DA1F2" />
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/engagement">Engagement</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Afomia Andualem. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
