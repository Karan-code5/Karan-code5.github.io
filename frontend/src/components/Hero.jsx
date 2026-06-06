import React from 'react';
import profilePhoto from '../assets/profile.jpg';

const Hero = ({ profile }) => {
  return (
    <section id="identity" className="hero">
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-radial" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Text content */}
          <div className="hero-content">
            <div className="hero-badge" id="hero-status-badge">
              <span className="hero-badge-dot" aria-label="Online" />
              STATUS: OPERATIONAL &nbsp;·&nbsp; {profile.totalExperience} &nbsp;·&nbsp; SECURITY_ENGINEER
            </div>

            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>

            <div className="hero-bio">
              <span className="hero-bio-prefix">&gt;</span>{' '}
              {profile.bio}
            </div>

            <div className="hero-actions">
              <a
                href="#contact"
                className="btn btn-primary"
                id="hero-contact-btn"
              >
                Establish Contact
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="hero-linkedin-btn"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              <div className="hero-photo-glow" aria-hidden="true" />
              <div className="hero-photo-border" aria-hidden="true" />
              <div className="hero-photo-inner">
                <img
                  src={profilePhoto}
                  alt="Karan Panchal - Security Engineer"
                  className="hero-photo"
                  loading="eager"
                  fetchpriority="high"
                  width="320"
                  height="320"
                  onError={(e) => {
                    e.target.src = profile.profileImage;
                  }}
                />
                <div className="hero-scanner" aria-hidden="true" />
              </div>
              {/* Corner accents */}
              <span className="hero-corner hero-corner-tl" aria-hidden="true" />
              <span className="hero-corner hero-corner-tr" aria-hidden="true" />
              <span className="hero-corner hero-corner-bl" aria-hidden="true" />
              <span className="hero-corner hero-corner-br" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;