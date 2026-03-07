import React from 'react';

const Footer = ({ name }) => (
  <footer>
    <p>SYSTEM_v1.0 // ENGINEER: {name ? name.toUpperCase().replace(' ', '_') : 'UNKNOWN'} // ENCRYPTED_TRANSMISSION_ONLY</p>
  </footer>
);

export default Footer;