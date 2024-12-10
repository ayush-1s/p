import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    "Full Stack Web Development", "C++", "C", "MongoDB", "Node.js",
    "React.js", "Next.js", "Java", "JavaScript", "Python",
    "Git", "GitHub", "Express.js", "JSON", "REST API",
    "Tailwind", "CSS", "HTML", "Backend Development", 
    "Linux", "DSA", "OS"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
