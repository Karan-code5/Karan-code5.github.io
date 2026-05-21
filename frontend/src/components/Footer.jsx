import React from 'react';

const Footer = ({ name }) => (
  <footer className="footer" role="contentinfo">
    <div className="container">
      <div className="footer-logo">{name}</div>
      <p className="footer-copy">
        Designed &amp; built with precision · {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;