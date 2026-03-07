import React from 'react';
import { Shield } from 'lucide-react';

const Navbar = ({ name }) => (
  <nav className="navbar">
    <div className="container nav-content">
      <div className="logo"><Shield size={20} /> {name}</div>
      <div className="nav-links">
        <a href="#deployment">Deployment</a>
        <a href="#arsenal">Arsenal</a>
        <a href="#intelligence">Intelligence</a>
        <a href="#contact">Signal</a>
      </div>
    </div>
  </nav>
);

export default Navbar;