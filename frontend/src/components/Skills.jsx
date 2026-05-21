import React from 'react';
import { Terminal, Shield, Layers, Database, Server, Users } from 'lucide-react';

const categories = [
  {
    key: 'programming',
    label: 'CORE_LANGUAGES',
    icon: <Terminal size={16} />,
    variant: 'sk-cyan',
  },
  {
    key: 'security',
    label: 'SECURITY_OPS',
    icon: <Shield size={16} />,
    variant: 'sk-purple',
  },
  {
    key: 'messaging',
    label: 'MESSAGING_INFRA',
    icon: <Layers size={16} />,
    variant: 'sk-amber',
  },
  {
    key: 'operatingSystems',
    label: 'OS_PLATFORMS',
    icon: <Server size={16} />,
    variant: 'sk-green',
  },
  {
    key: 'platforms',
    label: 'TOOLS_&_PLATFORMS',
    icon: <Database size={16} />,
    variant: 'sk-cyan',
  },
  {
    key: 'softSkills',
    label: 'HUMAN_INTELLIGENCE',
    icon: <Users size={16} />,
    variant: 'sk-red',
  },
];

const Skills = ({ skills, profile }) => (
  <div className="skills-grid">
    {categories.map(({ key, label, icon, variant }, i) => {
      const tags = skills[key] || [];
      if (!tags.length) return null;
      return (
        <div
          key={key}
          className={`skill-cat ${variant} animate-on-scroll`}
          id={`skill-cat-${key}`}
          style={{ transitionDelay: `${i * 0.07}s` }}
        >
          <div className="skill-cat-head">
            <span className="skill-cat-icon" aria-hidden="true">{icon}</span>
            <span className="skill-cat-label">{label}</span>
          </div>
          <div className="skill-tags">
            {tags.map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      );
    })}

    {/* Special interests */}
    {profile.specialInterests?.length > 0 && (
      <div
        className="skill-cat sk-amber animate-on-scroll"
        id="skill-cat-interests"
        style={{ transitionDelay: `${categories.length * 0.07}s` }}
      >
        <div className="skill-cat-head">
          <span className="skill-cat-icon" aria-hidden="true">🎨</span>
          <span className="skill-cat-label">SPECIAL_INTEREST</span>
        </div>
        <div className="skill-tags">
          {profile.specialInterests.map((s) => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default Skills;