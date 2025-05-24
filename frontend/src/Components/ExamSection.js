import React from 'react';
import './ExamSection.css';

const categories = [
  { title: 'Primary Exam', color: '#E1F0FA', image: '/Exams_1.jpg' },
  { title: 'Competitive Exam', color: '#C8E0E7', image: '/Exams_1.jpg' },
  { title: 'BOARD EXAMS', color: '#B7E1DC', image: '/Exams_1.jpg' },
];

const subjects = [
  { name: 'Math', desc: 'Sky was cloudless and of a deep dark blue spectacle before us was indeed.', icon: '/Red_Atom.png' },
  { name: 'English', desc: 'Even the all-powerful Pointing has no control...', icon: '/Red_Atom.png' },
  { name: 'Science', desc: 'One day however a small line of blind text.', icon: '/Red_Atom.png' },
  { name: 'Physics', desc: 'A small line of blind text by the name.', icon: '/Red_Atom.png' },
  { name: 'General Knowledge', desc: 'Decided to leave for the World of Grammar.', icon: '/Red_Atom.png' },
];

const ExamSection = () => {
  return (
    <section className="exam-section">
      <div className="active-users">NUMBER OF ACTIVE USERS RIGHT NOW – 3000+</div>

      <div className="exam-categories">
        {categories.map((cat, i) => (
          <div key={i} className="exam-card" style={{ backgroundColor: cat.color }}>
            <img src={cat.image} alt={cat.title} />
            <h4>{cat.title}</h4>
          </div>
        ))}
      </div>

      <div className="exam-explore">
        <div className="explore-heading">
          <h2>Explore Our Exam to <br />get Mentored</h2>
          <button className="explore-btn">EXPLORE ALL</button>
        </div>

        <div className="subject-grid">
          {subjects.map((sub, idx) => (
            <div key={idx} className="subject-card">
              <img src={sub.icon} alt={sub.name} />
              <h4>{sub.name}</h4>
              <p>{sub.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamSection;
