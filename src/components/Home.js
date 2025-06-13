import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Contact from './Contact';


function Home() {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentPublication, setCurrentPublication] = useState(0);

  const testimonials = [
    { text: "Africa Prize for Engineering Innovation", name: "Royal Academy of Engineering", id: 1 },
    { text: "Land Restoration Champion 2023", name: "Africa Prize Alumni", id: 2 },
    { text: "Bruh Innovation Award", name: "Bahirdar University", id: 3 },
  ];

  const publications = [
    { image: "publication1.png", text: "PANALIST: Spain - Africa green Entrepreneurship 2024 canaria Spain" },
    { image: "publication2.png", text: "PANALIST: BIC Africa Annual Gathering 2023 Narobi kenya" },
    { image: "publication3.png", text: "SPEAKER: Ethiopia innovation Hub Gathering 2023" },
    { image: "publication4.png", text: "SPEAKER: Pahal international research journal" },
    { image: "publication5.png", text: "SPEAKER: Woman in Tech summit" },
    { image: "publication6.png", text: "SPEAKER: Digital Transformation aimed at African women." },
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrev = () => {
    setCurrentPublication((prev) => (prev - 1 + publications.length) % publications.length);
  };

  const handleNext = () => {
    setCurrentPublication((prev) => (prev + 1) % publications.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_05uvmhm',
      'template_0q7hkqp',
      formData,
      'HdNnBaXdB6uRny-Oq'
    )
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error.text);
        setStatus('Failed to send message. Try again later.');
      });
  };

  return (
    <div className="page home">
      <h2>Afomia Andualem</h2>

      <div className="profile-section">
        <img src="pp.png" alt="Afomia Andualem" className="profile-img" />
        <div className="profile-text">
          <h3>Afomia Andualem</h3>
          <p>
            Afomia Andualem is a distinguished electrical engineer and entrepreneur with a passion for sustainable development. She holds a BSc in Electrical Engineering and a BA in Management, complemented by advanced studies at the Technical University of Munich.
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
            <img src="africaPrize.png" alt="Award" className="card-img" />
            <h4>Award</h4>
            <p>Africa Prize for engineering innovation from Royal Academy of Engineering</p>
          </div>
          <div className="card">
            <img src="bigAfrica.png" alt="Project" className="card-img" />
            <h4>Media coverage</h4>
            <p>Top 20 Female Entrepreneurs in Africa BIC Africa</p>
          </div>
          <div className="card">
            <img src="nationalTV.png" alt="Recognition" className="card-img" />
            <h4>Features</h4>
            <p>Featured on Ethiopian National TV and other outlets for entrepreneurship and sustainability</p>
          </div>
        </div>
      </div>

      {/* Publications Section */}
      <div className="section-spacing latest-engagement">
        <h3>Publications & Presentations</h3>
        <div className="engagement-carousel">
          {publications.map((item, index) => (
            <div
              key={index}
              className={`engagement-item ${index === currentPublication ? "active" : "hidden"}`}
            >
              <div
                className="engagement-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="engagement-text">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
          <button className="arrow left" onClick={handlePrev}>&#10094;</button>
          <button className="arrow right" onClick={handleNext}>&#10095;</button>
        </div>
      </div>

      {/* New Section Inserted Here */}
      <div className="section-spacing community-engagements">
        <h3>Upcoming Events</h3>
        <div className="grid">
          <div className="card">
            <img src="upcoming1.png" alt="Event" className="card-img" />
            <h4>Webinar</h4>
            <p>“Raising Finance for Startups: From Pitching to Closing the Deal” Webinar 

 📅 Date: Sunday June 15, 2025
 Time: 6pm EAT , 5pm CAT, 3PM Abidjan (GMT) </p>
          </div>
          <div className="card">
            <img src="upcoming2.png" alt="Event" className="card-img" />
            <h4>Inspiring Progress with Bill Gates</h4>
            <p>🗓 Date: Monday, June 2, 2025
⏰ Time: 10:00 AM EAT (Join early to save your virtual seat!)
🕒 Program Duration: 70 minutes</p>
          </div>
        </div>
      </div>

       {/* Testimonials Section */}
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

      {/* Contact Form Section */}
      <Contact />
      
      {/* <div className="home-contact-form section-spacing">
        <h3>Contact Me</h3>
        <div className="contact-container">
          <div className="contact-form">
            <h3>Send a Message</h3>
            <p>Feel free to reach out for collaborations or inquiries.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
              <button type="submit">Send</button>
            </form>
            {status && <p className="status">{status}</p>}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
