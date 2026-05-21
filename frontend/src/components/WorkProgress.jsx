import React, { useState } from 'react';

const levelClass = {
  Foundational: 'lvl-foundational',
  Intermediate: 'lvl-intermediate',
  Advanced: 'lvl-advanced',
  Expert: 'lvl-expert',
  Ongoing: 'lvl-ongoing',
};

const WorkProgress = ({ phases }) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = phases[activeTab];

  return (
    <section id="progress" className="section">
      <div className="container">
        <span className="section-eyebrow">// work_progress_report</span>
        <h2 className="section-title">
          Internship <span className="gradient-text">Mission Log</span>
        </h2>
        <p className="section-subtitle">
          12+ months of documented technical contributions — 35+ tasks across 6 security engineering domains.
        </p>

        {/* Category tabs */}
        <div className="progress-tabs" role="tablist" aria-label="Work progress categories">
          {phases.map((cat, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeTab === idx}
              className={`prog-tab${activeTab === idx ? ' active' : ''}`}
              id={`tab-${idx}`}
              onClick={() => setActiveTab(idx)}
              style={
                activeTab === idx
                  ? {
                      borderColor: cat.color + '50',
                      color: cat.color,
                      background: cat.color + '12',
                    }
                  : {}
              }
            >
              {cat.category}
              <span
                className="prog-tab-count"
                style={{
                  background:
                    activeTab === idx ? cat.color + '18' : 'rgba(255,255,255,0.04)',
                  color: activeTab === idx ? cat.color : 'var(--text-3)',
                }}
              >
                {cat.phases.length}
              </span>
            </button>
          ))}
        </div>

        {/* Phase cards for active category */}
        <div
          className="phases-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          key={activeTab}
        >
          {current.phases.map((phase, idx) => (
            <div
              key={idx}
              className="phase-card animate-on-scroll"
              id={`phase-${activeTab}-${idx}`}
              style={{
                borderColor:
                  idx % 3 === 0
                    ? current.color + '20'
                    : 'var(--border)',
              }}
            >
              {/* Color accent bar */}
              <div
                className="phase-bar"
                style={{ background: current.color }}
                aria-hidden="true"
              />

              <div className="phase-name">{phase.name}</div>
              <div className="phase-tech">{phase.tech}</div>
              <div className="phase-outcome">{phase.outcome}</div>

              <span
                className={`lvl-badge ${levelClass[phase.level] || 'lvl-intermediate'}`}
              >
                {phase.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProgress;
