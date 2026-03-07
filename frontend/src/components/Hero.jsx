import React from 'react';
import profilePhoto from '../assets/profile.jpg';

const Hero = ({ profile }) => (
  <section id="identity" className="hero-container">
    <div className="hero-content">
      <div className="status-tag">STATUS: OPERATIONAL // SECURITY_LEVEL: ENGINEER</div>
      <h1 className="big-heading">{profile.name}</h1>
      <h2 className="sub-heading">Security Engineer | EDR & XDR Specialist</h2>
      <div className="terminal-box">
        <p className="primary-text">&gt; Initializing mission_statement...</p>
        <p className="bio">
          Developing robust endpoint security solutions (AppControl) and managing 
          advanced threat detection systems across multiple platforms. 
          Expertise in SIEM analytics and system-level agent architecture.
        </p>
        <p className="primary-text">&gt; Location: AHMEDABAD // CURRENT_UNIT: INFOPERCEPT</p>
      </div>
    </div>
    <div className="profile-frame">
      <div className="profile-image-container">
        <img 
          src={profilePhoto || profile.profileImage} 
          alt={profile.name} 
          className="profile-photo" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            display: 'block'
          }}
          onError={(e) => { 
            console.error("VITE_ASSET_LOAD_FAILED: Attempting fallback to", profile.profileImage);
            e.target.src = profile.profileImage;
          }} 
        />
        <div className="scanner-line"></div>
      </div>
    </div>
  </section>
);

export default Hero;