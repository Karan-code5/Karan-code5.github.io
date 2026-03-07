import React from 'react';
import { Database } from 'lucide-react';

const Projects = ({ projects }) => (
  <section id="intelligence">
    <h2><Database /> Security Intelligence</h2>
    <div className="grid-2">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-title">&gt; {project.title}</div>
          <p style={{fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem'}}>
            {project.description}
          </p>
          <div className="tech-stack">
            {project.tech.split(',').map(t => <span key={t} className="skill-tag">{t.trim()}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;