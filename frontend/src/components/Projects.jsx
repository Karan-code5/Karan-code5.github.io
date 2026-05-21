import React from 'react';

const Projects = ({ projects }) => (
  <div className="projects-grid">
    {projects.map((proj, idx) => (
      <article
        key={idx}
        className="project-card animate-on-scroll"
        id={`project-${idx}`}
        style={{ transitionDelay: `${idx * 0.08}s` }}
      >
        <div className="project-idx">
          {String(idx + 1).padStart(2, '0')}
        </div>

        <div>
          <div className="project-title">{proj.title}</div>
          <div className="project-co">
            {proj.company}
          </div>
        </div>

        <p className="project-desc">{proj.description}</p>

        <div className="project-stack">
          {proj.tech.split(', ').map((t) => (
            <span key={t} className="project-tech">{t}</span>
          ))}
        </div>

        <div className="project-features">
          {proj.features.map((f) => (
            <span key={f} className="project-feat">{f}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export default Projects;