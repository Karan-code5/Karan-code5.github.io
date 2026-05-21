import React from 'react';

const statsData = [
  { key: 'months',  label: 'Project Duration' },
  { key: 'domains', label: 'Technology Domains' },
  { key: 'tasks',   label: 'Deliverables Completed' },
  { key: 'projects',label: 'Parallel Contributions' },
];

const Stats = ({ stats }) => (
  <div className="stats-section animate-on-scroll">
    <div className="stats-grid">
      {statsData.map(({ key, label }, i) => (
        <div key={key} className={`stat-card fade-up d${i + 1}`} id={`stat-${key}`}>
          <div className="stat-num">{stats[key]}</div>
          <div className="stat-desc">{label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Stats;
