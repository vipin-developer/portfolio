import React from "react";
import "./Skills.css";

function Skills(props) {
  return (
    <div className="skills skills-main">
      <h2 className="skill-text">Skills</h2>
      {/* <h2>
        I like to take responsibility to craft aesthetic user experience using
        modern frontend architecture.
      </h2> */}

      <h3>Technical skills</h3>
      <h2>
        React.JS, Angular, Vue.js, JavaScript, TypeScript, Node.js, MongoDb,
        React- native, Ionic
      </h2>
      <h3>Soft skills</h3>
      <h2>
        Leadership, Problem Solving, Clear/Effective communication, Emotional
        Intelligence, Organization, Delegation, Decision making. Interpersonal
        skills, Oral and written communication, Teamwork.
      </h2>
      <h3>Awards</h3>
      <h2>Two years Code-O-Shuffle coding competition winner in college.</h2>
      <h3>Languages</h3>
      <h2>English, Hindi.</h2>
    </div>
  );
}

export default Skills;
