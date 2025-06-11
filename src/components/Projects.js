import React from 'react';

function Projects() {
  return (
    <div className="page projects">
      <h2>My Projects</h2>
      
      <div className="project-gallery">
        <div className="project-card">
          <img src="afomia.png" alt="Anti-Foam Spray" className="project-img" />
          <h3>Anti-Foam Spray PLC Controller</h3>
          <p>Simulation for Liquor Factory</p>
        </div>
        <div className="project-card">
          <img src="afomia.png" alt="Pesticide Spray" className="project-img" />
          <h3>Automatic Pesticide Spray</h3>
          <p>For Agricultural Use</p>
        </div>
        <div className="project-card">
          <img src="afomia.png" alt="Solar Charger" className="project-img" />
          <h3>Solar-Based Mobile Charger</h3>
          <p>Operated with Token Coin</p>
        </div>
        <div className="project-card">
          <img src="afomia.png" alt="Security System" className="project-img" />
          <h3>Office Security System</h3>
          <p>Arduino Uno-Based</p>
        </div>
        <div className="project-card">
          <img src="afomia.png" alt="Liquid Fertilizer" className="project-img" />
          <h3>Liquid Fertilizer from Lignin</h3>
          <p>Formula Development</p>
        </div>
        <div className="project-card">
          <img src="afomia.png" alt="Tree-Free Paper" className="project-img" />
          <h3>Tree-Free Paper & Pulp</h3>
          <p>Innovative Production (IP)</p>
        </div>
      </div>
      
      <h3 className="section-spacing">Partnership Projects</h3>
      <div className="project-gallery">
        <div className="project-card">
          <img src="afomia.png" alt="Combating NTD" className="project-img" />
          <h3>Combating NTD</h3>
          <p>Awareness and Fortified Foods</p>
        </div>
        <div className="project-card">
          <img src="afomia.png" alt="Women in STEM" className="project-img" />
          <h3>Women in STEM</h3>
          <p>Mentoring in Africa</p>
        </div>
        <div className="project-card">
          <img src="afomia.png" alt="Sub-Saharan Partnership" className="project-img" />
          <h3>Sub-Saharan Partnership</h3>
          <p>Higher Education Collaboration</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;