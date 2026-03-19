import React from 'react';
import { Zap, Terminal, Cpu, Lock, Database, Users, Shield } from 'lucide-react';

const Skills = ({ skills, profile }) => (
  <section id="arsenal" className="arsenal-section">
    <h2><Zap /> Technical Arsenal</h2>
    
    <div className="arsenal-box">
      <h3><Terminal size={14} /> CORE_LANGUAGES</h3>
      <div className="skill-list">
        {skills.programming.map(s => <span key={s} className="skill-tag">{s}</span>)}
      </div>
    </div>

    <div className="arsenal-box" style={{marginTop: '1.5rem'}}>
      <h3><Shield size={14} /> SECURITY_OPERATIONS</h3>
      <div className="skill-list">
        {skills.securityOperations && skills.securityOperations.map(s => (
          <span key={s} className="skill-tag" style={{borderColor: '#3b82f6', color: '#3b82f6'}}>
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="arsenal-box" style={{marginTop: '1.5rem'}}>
      <h3><Database size={14} /> DATA_SYSTEMS</h3>
      <div className="skill-list">
        {skills.databases && skills.databases.map(s => <span key={s} className="skill-tag">{s}</span>)}
      </div>
    </div>

    <div className="arsenal-box" style={{marginTop: '1.5rem'}}>
      <h3><Cpu size={14} /> PLATFORMS_&_OPS</h3>
      <div className="skill-list">
        {skills.platforms.map(s => <span key={s} className="skill-tag">{s}</span>)}
        {skills.operatingSystems.map(s => <span key={s} className="skill-tag">{s}</span>)}
      </div>
    </div>

    <div className="arsenal-box" style={{marginTop: '1.5rem'}}>
      <h3><Users size={14} /> HUMAN_INTELLIGENCE</h3>
      <div className="skill-list">
        {skills.softSkills && skills.softSkills.map(s => (
          <span key={s} className="skill-tag" style={{opacity: 0.8}}>{s}</span>
        ))}
      </div>
    </div>

    <div className="arsenal-box" style={{marginTop: '1.5rem'}}>
      <h3><Lock size={14} /> SPECIAL_INTEREST</h3>
      <div className="skill-list">
        {profile.specialInterests && profile.specialInterests.map(interest => (
          <span key={interest} className="skill-tag">
            {interest}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;