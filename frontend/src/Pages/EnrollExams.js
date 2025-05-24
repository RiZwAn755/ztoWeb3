import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EnrollExams.css';

const EnrollExams = () => {
  const navigate = useNavigate();

  const exams = [
    {
      id: 1,
      title: "Full Stack Web Developer Certification",
      date: "November 15, 2023 • 10:00 AM - 12:00 PM",
      fee: "$120",
      seats: "32/50 seats remaining",
      status: "Open",
      description: "Comprehensive exam covering both front-end and back-end development skills for modern web applications.",
      modules: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript (ES6+)",
        "React.js & Redux",
        "Node.js & Express",
        "Database Integration"
      ]
    },
    {
      id: 2,
      title: "Data Science Professional Exam",
      date: "December 5, 2023 • 2:00 PM - 5:00 PM",
      fee: "$150",
      seats: "45/60 seats remaining",
      status: "Filling Fast",
      description: "Validate your data analysis and machine learning skills with this industry-recognized certification.",
      modules: [
        "Python Programming",
        "Pandas & NumPy",
        "Data Visualization",
        "Machine Learning Basics",
        "Statistical Analysis"
      ]
    }
  ];

  return (
    <div className="enroll-container">
      {/* Header Section */}
      <header className="enroll-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back to Dashboard
        </button>
        <div className="header-content">
          <h1>Exam Enrollment Portal</h1>
          <p>Register for upcoming certification programs</p>
        </div>
      </header>

      {/* Exams List */}
      <div className="exam-list">
        {exams.map((exam) => (
          <div key={exam.id} className="exam-card">
            <div className="card-header">
              <h2>{exam.title}</h2>
              <span className={`status-badge ${exam.status.replace(' ', '-').toLowerCase()}`}>
                {exam.status}
              </span>
            </div>

            <div className="exam-details">
              <div className="detail-row">
                <span className="detail-label">📅 Date & Time</span>
                <span className="detail-value">{exam.date}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">💵 Examination Fee</span>
                <span className="detail-value">{exam.fee}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">👥 Available Seats</span>
                <span className="detail-value">{exam.seats}</span>
              </div>
            </div>

            <div className="exam-description">
              <p>{exam.description}</p>
            </div>

            <div className="modules-section">
              <h3>Exam Modules:</h3>
              <ul className="modules-list">
                {exam.modules.map((module, index) => (
                  <li key={index}>
                    <span className="module-icon">▸</span> {module}
                  </li>
                ))}
              </ul>
            </div>

            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollExams;