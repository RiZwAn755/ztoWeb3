import React from 'react';
import './Mission.css';

const MissionSection = () => {
  return (
    <section className="mission-container">
      <div className="mission-left">
        <h2>ZTO - Transforms you in your best shape.</h2>
        <p>
          We carefully select students through rigorous screening exams, understand their unique needs, and
          provide top-tier training to help them reach their fullest potential and achieve excellence.
        </p>
      </div>

      <div className="mission-right">
        <div className="mission-card">
          <div className="mission-image-placeholder">
            <img src="/SchoolBag.jpg" alt="School Bag" className="mission-image" />
          </div>
          <div className="mission-content">
            <h4>MISSION ZONAL TALENT OLYMPIAD</h4>
            <p>
              Our mission is to empower students with the skills, knowledge, and confidence they need to succeed.
              Through expert guidance, personalized training, and a results-driven approach, we nurture talent
              and shape future achievers, ensuring they excel in their chosen paths.
            </p>
          </div>
        </div>
      </div>

      <div className="mission-button-wrapper">
        <button className="mission-button">Explore and Register</button>
      </div>
    </section>
  );
};

export default MissionSection;
