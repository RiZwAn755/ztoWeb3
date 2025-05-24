import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../Components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(data.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Try again later.');
    }
  };

  return (
    <>
        <Navbar/>
        <div className="contact-wrapper">
        <div className="contact-container">
            <div className="contact-left">
            <img src="/ContactUs.jpg" alt="Contact Us" />
            </div>

            <div className="contact-right">
            <h2>Contact Us</h2>
            <p>Some contact information on how to reach out</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                />

                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                />

                <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                />

                <button type="submit" className="send-btn">Send Message</button>
            </form>
            </div>
        </div>
        </div>
    </>
  );
};

export default Contact;
