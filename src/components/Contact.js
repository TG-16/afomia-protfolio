import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:amex2121@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setStatus('Message sent! Check your email client.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page contact">
      <h2>Contact Me Page</h2>
      <div className="header"></div>
      <div className="contact-form">
        <h3>Contact Me</h3>
        <p>
          Feel free to reach out for collaborations or inquiries. <br />
          Email: afomiaandualem@gmail.com <br />
          References: Amare Kassaw (afomiaandualem@gmail.com)
        </p>
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
      <div className="contact-image"></div>
    </div>
  );
}

export default Contact;