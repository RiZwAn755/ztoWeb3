import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="/ZTO_LOG_FINAL.png" alt="Logo" className="logo" />
          <p>© ZTO, Inc. 2025. Avid Learners</p>
        </div>

        <div className="footer-center">
          <div>
            <h4>Community</h4>
            <p>Our Team</p>
            <p>Your Portal</p>
            <p>Live events</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>About us</p>
            <p>Careers</p>
            <p>Contact us</p>
            <p>History</p>
          </div>
        </div>

        <div className="footer-right">
          <button className="btn-register">Register</button>
          <button className="btn-outline">Log In</button>
          <button className="btn-outline">ADMIN</button>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>Follow us:</p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
