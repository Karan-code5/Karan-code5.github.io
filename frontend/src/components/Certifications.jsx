import React from 'react';
import { Award } from 'lucide-react';

const Certifications = ({ certifications }) => (
  <div className="certs-grid">
    {certifications.map((cert, idx) => (
      <div
        key={idx}
        className="cert-card animate-on-scroll"
        id={`cert-${idx}`}
        style={{ transitionDelay: `${idx * 0.08}s` }}
      >
        <div className="cert-icon" aria-hidden="true">
          <Award size={18} />
        </div>
        <div>
          <div className="cert-num">CERT_{String(idx + 1).padStart(2, '0')}</div>
          <div className="cert-name">{cert}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Certifications;