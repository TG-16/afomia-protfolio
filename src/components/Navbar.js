import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          ☰
        </button>
        <Link to="/" className="nav-title" onClick={() => setIsOpen(false)}>Afomia Andualem</Link>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {/* <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li> */}
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/engagement" onClick={() => setIsOpen(false)}>Engagement</Link></li>
        <li><Link to="/Media" onClick={() => setIsOpen(false)}>Media & Coverage</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;