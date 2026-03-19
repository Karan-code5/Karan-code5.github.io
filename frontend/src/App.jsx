import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the internal backend API
        const response = await axios.get('/api/portfolio');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching portfolio data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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
          </div>
          <div className="side-col">
            <Skills skills={skills} profile={profile} />
          </div>
        </div>

        <div className="intel-row">
          <div className="main-col">
            <Projects projects={projects} />
          </div>
          <div className="side-col">
            <Certifications certifications={certifications} />
          </div>
        </div>

        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} />
    </div>
  );
};

export default App;