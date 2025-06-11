import React from 'react';

function About() {
  return (
    <div className="page about">
      <h2>About Afomia</h2>
      <div className="about-content">
        <div className="about-section">
          <img src="afomia.png" alt="Afomia Andualem" className="about-img" />
          <div className="about-text">
            <h3>Professional Background</h3>
            <p>
              Afomia Andualem is a distinguished electrical engineer and entrepreneur with a passion for sustainable development. She holds a BSc in Electrical Engineering and a BA in Management, complemented by advanced studies at the Technical University of Munich.
            </p>
          </div>
        </div>
        <div className="about-section">
          <img src="afomia.png" alt="Afomia's Achievements" className="about-img" />
          <div className="about-text">
            <h3>Leadership & Achievements</h3>
            <p>
              As the CEO of iGreen Entrepreneur and Co-Founder of Agelgil Eco-Packaging, Afomia has demonstrated exceptional leadership in green innovation. Her work has been recognized with prestigious awards including the Africa Prize for Engineering Innovation and Land Restoration Champion.
            </p>
          </div>
        </div>
        <div className="about-section">
          <img src="afomia.png" alt="Afomia's Vision" className="about-img" />
          <div className="about-text">
            <h3>Vision & Mission</h3>
            <p>
              Afomia is committed to driving sustainable solutions that address environmental challenges while creating economic opportunities. Her mission focuses on empowering youth through green entrepreneurship and promoting eco-friendly technologies across Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;