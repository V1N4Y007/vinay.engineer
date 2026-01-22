import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(response => response.json())
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching portfolio data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!portfolioData) {
    return <div className="error">Failed to load portfolio data</div>;
  }

  return (
    <div className="App">
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Experience data={portfolioData.experience} />
      <Skills data={portfolioData.skills} />
      <Certifications data={portfolioData.certifications} />
      <Education data={portfolioData.education} />
      <Contact data={portfolioData.contact} />
    </div>
  );
}

export default App;