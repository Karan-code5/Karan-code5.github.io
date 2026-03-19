import React from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications = ({ certifications }) => (
  <section id="certification">
    <h2><ExternalLink size={18} /> Credentials</h2>
    <div className="cert-grid">
      {certifications.map((c, i) => (
        <div key={i} className="cert-card">
          <span className="cert-tag">[CERT_VERIFIED]</span>
          <p className="cert-name">{c}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;