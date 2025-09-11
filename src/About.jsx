import React from "react";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-top">
        <div className="vision-img">
          <img src="/vision1.jpg" alt="Our Vision" id="vision"/>
        </div>
        <div className="vision-title">
          <div className="vision-head">
            <h1>Vision</h1>
          </div>
          <div className="vision-content">
            <p>“To create a healthier and happier society by helping individuals manage their mood and stress effectively through technology-driven solutions.”</p>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <div className="mission-img">
          <img src="/mission2.jpg" alt="Our Mission" id="mission"/>
        </div>
        <div className="mission-title">
          <ul className="about-list">
            <h1>Mission</h1>
            <li>To provide users with an easy-to-use platform that tracks mood and stress levels.</li>
            <li>To suggest personalized exercises, relaxation tips, and activities for stress relief.</li>
            <li>To promote mental well-being by making stress management accessible to everyone.</li>
            <li>To encourage healthy lifestyle habits and reduce the risk of stress-related health issues.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default About;
