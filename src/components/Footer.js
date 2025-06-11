import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:afomiandualem@gmail.com">afomiandualem@gmail.com</a></p>
          <p>References available upon request</p>
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