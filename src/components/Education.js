import React from "react";
import "../styles/Education.css";

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      university: "Shri Mata Vaishno Devi University",
      cgpa: "CGPA: 8.55",
      year: "2025"
    },
    {
      degree: "PCM with Computer Science",
      university: "Kendriya Vidyalaya",
      percentage: "Percentage: 89%",
      year: "2020"
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <p><strong>University:</strong> {edu.university}</p>
            <p><strong>Details:</strong> {edu.cgpa || edu.percentage}</p>
            <p><strong>Year:</strong> {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
