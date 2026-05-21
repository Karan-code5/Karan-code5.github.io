import React from 'react';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';

const Contact = ({ profile }) => (
  <div className="contact-grid">
    <a
      href={`mailto:${profile.email}`}
      className="contact-card animate-on-scroll"
      id="contact-email"
    >
      <div className="contact-icon" aria-hidden="true">
        <Mail size={22} />
      </div>
      <div className="contact-info">
        <div className="contact-label">Email</div>
        <div className="contact-value">{profile.email}</div>
      </div>
      <ArrowRight size={18} className="contact-arrow" aria-hidden="true" />
    </a>

    <a
      href={`tel:${profile.phone}`}
      className="contact-card animate-on-scroll d1"
      id="contact-phone"
    >
      <div className="contact-icon" aria-hidden="true">
        <Phone size={22} />
      </div>
      <div className="contact-info">
        <div className="contact-label">Phone</div>
        <div className="contact-value">{profile.phone}</div>
      </div>
      <ArrowRight size={18} className="contact-arrow" aria-hidden="true" />
    </a>

    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card animate-on-scroll d2"
      id="contact-linkedin"
    >
      <div className="contact-icon" aria-hidden="true">
        <Linkedin size={22} />
      </div>
      <div className="contact-info">
        <div className="contact-label">LinkedIn</div>
        <div className="contact-value">View Profile</div>
      </div>
      <ArrowRight size={18} className="contact-arrow" aria-hidden="true" />
    </a>
  </div>
);

export default Contact;