import React from 'react';
import { Activity } from 'lucide-react';

const Experience = ({ workExperience }) => (
  <section id="deployment">
    <h2><Activity /> Deployment History</h2>
    {workExperience.map((exp, index) => (
      <div key={index} className="experience-item">
        <div className="exp-header">
          <h3>{exp.role}</h3>
          <p className="highlight">{exp.company}</p>
          <span className="duration">{exp.duration}</span>
        </div>
        <ul className="exp-highlights">
          {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;