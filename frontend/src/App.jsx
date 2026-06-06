import React from 'react';
import { portfolioData } from './data';
import useScrollAnimation from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import WorkProgress from './components/WorkProgress';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useScrollAnimation();

  const {
    profile,
    stats,
    skills,
    workExperience,
    workProgressPhases,
    notableHighlights,
    projects,
    certifications,
  } = portfolioData;

  return (
    <div>
      <Navbar name={profile.name} />

      <Hero profile={profile} />

      <div className="container">
        <Stats stats={stats} />
      </div>

      <div className="divider" />

      <section id="experience" className="section">
        <div className="container">
          <span className="section-eyebrow">// deployment_history</span>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            From fresher to full contributor across endpoint security, ML, and web development.
          </p>
          <Experience workExperience={workExperience} />
        </div>
      </section>

      <div className="divider" />

      <WorkProgress phases={workProgressPhases} />

      <div className="divider" />

      <section id="skills" className="section">
        <div className="container">
          <span className="section-eyebrow">// technical_arsenal</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Expertise built across 6 domains — each technology applied in a live project context.
          </p>
          <Skills skills={skills} profile={profile} />
        </div>
      </section>

      <div className="divider" />

      <section id="highlights" className="section">
        <div className="container">
          <span className="section-eyebrow">// notable_achievements</span>
          <h2 className="section-title">
            Notable <span className="gradient-text">Highlights</span>
          </h2>
          <p className="section-subtitle">
            Standout contributions that reflect technical depth well beyond intern-level expectations.
          </p>
          <Highlights highlights={notableHighlights} />
        </div>
      </section>

      <div className="divider" />

      <section id="projects" className="section">
        <div className="container">
          <span className="section-eyebrow">// active_missions</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Client-facing and personal builds spanning endpoint security, web, and AI.
          </p>
          <Projects projects={projects} />
        </div>
      </section>

      <div className="divider" />

      <section id="certifications" className="section">
        <div className="container">
          <span className="section-eyebrow">// credentials</span>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Verified credentials across security engineering, AI/ML, and software development.
          </p>
          <Certifications certifications={certifications} />
        </div>
      </section>

      <div className="divider" />

      <section id="contact" className="section contact-section">
        <div className="container">
          <span className="section-eyebrow">// establish_signal</span>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            Open to new opportunities, collaborations, and conversations.
          </p>
          <Contact profile={profile} />
        </div>
      </section>

      <Footer name={profile.name} />
    </div>
  );
};

export default App;