import React, { useState } from 'react';
import './Resources.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const grades = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Sample Papers"];
const subjects = ["Physics", "Chemistry", "Maths", "English"];

const Resources = () => {
  const [activeGrade, setActiveGrade] = useState(null);
  const [activeSubject, setActiveSubject] = useState({});

  const toggleGrade = (grade) => {
    if (activeGrade === grade) {
      setActiveGrade(null);
    } else {
      setActiveGrade(grade);
    }
  };

  const toggleSubject = (grade, subject) => {
    setActiveSubject((prev) => ({
      ...prev,
      [grade]: prev[grade] === subject ? null : subject
    }));
  };

  return (
    <>
        <Navbar />
        <div className="resources-wrapper">
        <h1 className="resources-title">Resources</h1>

        <div className="resources-grid">
            {grades.map((grade, index) => (
            <div key={grade} className={`resource-card color${index % 5}`}>
                <div className="grade-title" onClick={() => toggleGrade(grade)}>
                {grade}
                <span>{activeGrade === grade ? "-" : "+"}</span>
                </div>

                {activeGrade === grade && (
                <div className="subject-dropdown animate-expand">
                    {subjects.map((subject) => (
                    <div key={subject}>
                        <div 
                        className="subject-title" 
                        onClick={() => toggleSubject(grade, subject)}
                        >
                        {subject} 
                        <span>{activeSubject[grade] === subject ? "-" : "+"}</span>
                        </div>

                        {activeSubject[grade] === subject && (
                        <div className="subtopics-list">
                            <p>Explore {subject} topics here!</p>
                        </div>
                        )}
                    </div>
                    ))}
                </div>
                )}
            </div>
            ))}
        </div>
        </div>
        <Footer/>
    </>
  );
};

export default Resources;
