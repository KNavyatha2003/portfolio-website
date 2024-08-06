// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      
      <div className="logo">
      <img src="p.png" />
      </div>
      <nav className="nav-links">
        <Link to="/">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="internships">Certifications</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
