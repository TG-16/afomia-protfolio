import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { text: "Africa Prize for Engineering Innovation", name: "Royal Academy of Engineering", id: 1 },
    { text: "Land Restoration Champion 2023", name: "Africa Prize Alumni", id: 2 },
    { text: "Bruh Innovation Award", name: "Bahirdar University", id: 3 },
  ];
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleContactMeClick = () => {
    history.push('/contact');
  };

  return (
    <div className="page home">
      <h2>Afomia Andualem</h2>
      
      <div className="profile-section">
        <img src="afomia.png" alt="Afomia Andualem" className="profile-img" />
        <div className="profile-text">
          <h3>Afomia Andualem</h3>
          <p>
            CEO iGreen Entrepreneur. I'm a Mandela Washington Fellow 2024 and hold a BSc in Electrical Engineering and a BA in Management, with enhanced expertise from ISS at Technical University of Munich. I led as Co-Founder and CEO of Agelgil Eco-Packaging since 2021 G.C. My approach emphasizes innovation, environmental conservation, and youth empowerment in green entrepreneurship. Recognized as Land Restoration Champion Africa 2025 and an Africa Prize Alumni (2022), and winner of the Bruh Innovation Award, my journey illustrates the impact of pioneering solutions and collaborative efforts in sustainable development.
          </p>
          <button className="cta-button" onClick={handleContactMeClick}>
            Contact Me
          </button>
        </div>
      </div>

      <div className="section-spacing awards-projects">
        <h3>Awards & Projects</h3>
        <div className="grid">
          <div className="card">
            <img src="afomia.png" alt="Award" className="card-img" />
            <h4>Award</h4>
            <p>Africa Prize for Engineering Innovation, Land Restoration Champion 2023</p>
          </div>
          <div className="card">
            <img src="afomia.png" alt="Project" className="card-img" />
            <h4>Project</h4>
            <p>Agelgil Eco-Packaging</p>
          </div>
          <div className="card">
            <img src="afomia.png" alt="Recognition" className="card-img" />
            <h4>Recognition</h4>
            <p>US Embassy, Bahirdar University</p>
          </div>
        </div>
      </div>

      <div className="section-spacing latest-engagement">
        <h3>Latest Engagement</h3>
        <div className="engagement-item">
          <div className="engagement-image" style={{ backgroundImage: `url(afomia.png)` }}></div>
          <div className="engagement-text">
            <p>Recently mentored at YALI Regional Leadership Center, focusing on sustainable entrepreneurship. Conducted workshops on green innovation and youth empowerment, engaging over 50 participants across Africa.</p>
          </div>
        </div>
      </div>

      <div className="section-spacing testimonials">
        <h3>Testimonials</h3>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
            >
              <div className="testimonial-image" style={{ backgroundImage: `url(afomia.png)` }}></div>
              <div className="testimonial-content">
                <h4>{testimonial.text}</h4>
                <p style={{ fontStyle: 'italic' }}>- {testimonial.name}</p>
              </div>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="home-contact-form section-spacing">
        <h3>Contact Me</h3>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;