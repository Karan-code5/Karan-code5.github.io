import React from 'react';
import { Globe, BookOpen, Cpu, Briefcase, Server } from 'lucide-react';

const iconMap = {
  globe: <Globe size={22} />,
  book: <BookOpen size={22} />,
  cpu: <Cpu size={22} />,
  briefcase: <Briefcase size={22} />,
  server: <Server size={22} />,
};

const Highlights = ({ highlights }) => (
  <div className="highlights-grid">
    {highlights.map((item, idx) => (
      <div
        key={idx}
        className="highlight-card animate-on-scroll"
        id={`highlight-${idx}`}
        style={{ transitionDelay: `${idx * 0.08}s` }}
      >
        <div className="highlight-icon" aria-hidden="true">
          {iconMap[item.icon] || <Cpu size={22} />}
        </div>
        <div className="highlight-body">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Highlights;
