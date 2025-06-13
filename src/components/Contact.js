import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_05uvmhm',       // Replace with your EmailJS service ID
    'template_0q7hkqp',      // Replace with your EmailJS template ID
    formData,                // Must match the template keys
    'HdNnBaXdB6uRny-Oq' // Replace with your EmailJS public key
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
    <div className="page contact">
      <h2>Contact Me</h2>
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
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:afomiandualem@gmail.com">afomiandualem@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/afomia-andualem" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} color="#0A66C2" />
                      </a></p>
          <p>Instagram: <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="#E1306C" />
                      </a></p>
          <p>Twitter: <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} color="#1DA1F2" />
                      </a></p>
          {/* <ul>
            <li>Amare Kassaw - <a href="mailto:afomiandualem@gmail.com">afomiandualem@gmail.com</a></li>
            <li>Prof. Amos Omamo - <a href="mailto:aodhiambo@must.ac.ke">aodhiambo@must.ac.ke</a></li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;