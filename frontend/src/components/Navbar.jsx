import React, { useState, useEffect } from 'react';

const Navbar = ({ name }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
      <div className="container">
        <div className="nav-inner">
          <a href="#identity" className="nav-logo" id="nav-logo">
            {name}
          </a>

          <ul className="nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#progress">Progress</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#highlights">Highlights</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="nav-cta" id="nav-contact-btn">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;