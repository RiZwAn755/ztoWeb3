import React from 'react';
import './About.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
        <Navbar />
        <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <div className="about-content">
            <p className="about-intro">
            Welcome to <span className="highlight">EduExam</span> — Your trusted partner for quality online exams.
            We are committed to empowering students from every corner of India, especially rural and village areas.
            </p>

            <div className="about-section">
            <h2>🌟 Our Mission</h2>
            <p>
                To provide accessible, affordable, and high-quality examination opportunities
                to students everywhere, bridging the gap between rural and urban education systems.
            </p>
            </div>

            <div className="about-section">
            <h2>🎯 What We Offer</h2>
            <ul className="about-list">
                <li><strong>Standardized Quality Exams:</strong> Carefully curated by top educators.</li>
                <li><strong>24/7 Student Support:</strong> We are here for every doubt, every time.</li>
                <li><strong>Attractive Rewards & Scholarships:</strong> Motivating students to aim higher.</li>
                <li><strong>Nationwide Competitive Platform:</strong> Compete with best minds across the country.</li>
                <li><strong>Inclusive Growth:</strong> Special support and features for village and rural students.</li>
            </ul>
            </div>

            <div className="about-section">
            <h2>🏆 Why Choose EduExam?</h2>
            <p>
                We believe talent is everywhere, opportunity should be too.
                Our platform ensures that every student — regardless of background — gets an equal, fair, and rewarding chance to shine.
            </p>
            </div>

            <div className="about-footer">
            Together, let's break barriers and build dreams! 🚀
            </div>
        </div>
        </div>
        <Footer />
    </>
  );
};

export default About;
