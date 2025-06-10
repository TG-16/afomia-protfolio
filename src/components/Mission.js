import React from "react";
import "../styles/Mission.css";

function Mission() {
  return (
    <section id="mission" className="mission-section">
      <h2>Mission & Vision</h2>
      <div className="mission-cards">
        <div className="card">
          <h3>Mission</h3>
          <p>To empower African youth and women through green innovation and mentorship.</p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>A sustainable Africa led by inclusive, eco-conscious leaders and innovators.</p>
        </div>
        <div className="card">
          <h3>Values</h3>
          <p>Leadership, Sustainability, Equality, Innovation, Collaboration</p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
