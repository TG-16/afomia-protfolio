import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <h1>Afomia Andualem</h1>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/engagement" onClick={() => setIsOpen(false)}>Engagement</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;