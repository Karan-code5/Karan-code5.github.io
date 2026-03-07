import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Contact = ({ profile }) => (
  <section id="contact">
    <div className="section-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
      <h2>Establish Signal</h2>
      <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>DIRECT_COMMUNICATION_LINE_ESTABLISHED</p>
    </div>

    <div className="signal-grid">
      <a href={`mailto:${profile.email}`} className="signal-card">
        <div className="signal-icon"><Mail size={24} /></div>
        <div className="signal-info">
          <span className="signal-label">SECURE_EMAIL</span>
          <span className="signal-value">{profile.email}</span>
        </div>
        <ExternalLink size={14} className="signal-arrow" />
      </a>

      <a href={`tel:${profile.phone}`} className="signal-card">
        <div className="signal-icon"><Phone size={24} /></div>
        <div className="signal-info">
          <span className="signal-label">ENCRYPTED_VOICE</span>
          <span className="signal-value">{profile.phone}</span>
        </div>
        <ExternalLink size={14} className="signal-arrow" />
      </a>

      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="signal-card">
        <div className="signal-icon"><Linkedin size={24} /></div>
        <div className="signal-info">
          <span className="signal-label">PROFESSIONAL_NET</span>
          <span className="signal-value">LINKEDIN_PROFILE</span>
        </div>
        <ExternalLink size={14} className="signal-arrow" />
      </a>
    </div>
  </section>
);

export default Contact;