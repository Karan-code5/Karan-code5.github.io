import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsAndCerts from './components/SkillsAndCerts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Direct data load for seamless GitHub hosting
    setData(portfolioData);
    setLoading(false);
  }, []);

  if (loading) return <div className="loading">INITIALIZING SYSTEM...</div>;
  if (!data) return <div className="error">SYSTEM ERROR: UNABLE TO LOAD CORE DATA.</div>;

  const { profile, skills, workExperience, projects, certifications } = data;

  return (
    <div className="portfolio-cyber">
      <div className="scanline"></div>
      
      <Navbar name={profile.name} />

      <main className="container">
        <Hero profile={profile} />

        <div className="dashboard-grid">
          <div className="main-col">
            <Experience workExperience={workExperience} />
            <Projects projects={projects} />
          </div>

          <div className="side-col">
            <SkillsAndCerts skills={skills} profile={profile} certifications={certifications} />
          </div>
        </div>

        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} />
    </div>
  );
};

export default App;