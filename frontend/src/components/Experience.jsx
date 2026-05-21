import React from 'react';

const Experience = ({ workExperience }) => (
  <div className="timeline" id="timeline">
    {workExperience.map((exp, index) => (
      <div key={index} className="timeline-item animate-on-scroll">
        <div className={`timeline-node ${index === 0 ? 'active' : ''}`} aria-hidden="true" />

        <div className="exp-card">
          <div className="exp-company">{exp.company}</div>
          <div className="exp-role">{exp.role}</div>

          <div className="exp-meta">
            <span className="badge badge-type">{exp.type}</span>
            <span className="badge badge-dur">{exp.duration}</span>
            {index === 0 && (
              <span className="badge badge-green">● ACTIVE</span>
            )}
          </div>

          <ul className="exp-highlights" aria-label="Key contributions">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;