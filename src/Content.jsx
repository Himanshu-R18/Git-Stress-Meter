import React from "react";
import { useNavigate } from "react-router-dom";


function Content(){

  const navigate = useNavigate();

  return(
    <div className="content-container">
      <div className="content-title1">
        <p className="title1">Mood & Stress Tester</p>
      </div>
      <div className="content-title2">
        <p className="title2">Test your current mood and stress level.</p>
      </div>
      <div className="content-title3">
        <p className="title3">The main purpose of this test is to promote self-awareness and mental well-being by offering personalized suggestions, relaxation techniques, or exercises to reduce stress. It can be especially useful for students, professionals, and anyone dealing with daily pressure, as it helps them take proactive steps toward maintaining a balanced and healthy mindset.</p>
      </div>
      <div className="content-textbtn">
        <button className="test-btn" onClick={() => navigate('/Questionnaire')}>
          Start Test
        </button>
      </div>
    </div>
  );

}

export default Content