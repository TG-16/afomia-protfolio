import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:amex2121@gmail.com">amex2121@gmail.com</a></p>
          <p>References: Amare Kassaw (<a href="mailto:amex2121@gmail.com">amex2121@gmail.com</a>), Prof. Amos Omamo (<a href="mailto:aodhiambo@must.ac.ke">aodhiambo@must.ac.ke</a>)</p>
        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/engagement">Engagement</Link></li>
          </ul>
        </div>
      </div>
      <p>© 2025 Afomia Andualem. All rights reserved.</p>
    </footer>
  );
}

export default Footer;