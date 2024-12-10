import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Java Developer",
      company: "WebxCreation",
      duration: "Current | Remote",
      description: "Built RESTful APIs using Java and Spring Boot. Improved database performance with Hibernate, cutting response times by 30%. Integrated React.js frontends and optimized microservices for scalability and reliability."
    },
    {
      role: "Web Development Intern",
      company: "SpeedLabs",
      duration: "Jun - Aug 2024 | Noida",
      description: "Developed web applications using React.js, Next.js, Node.js, and MongoDB. Designed RESTful APIs and collaborated with cross-functional teams."
    },
    {
      role: "Cyber Security Intern",
      company: "Talent Server",
      duration: "Feb - May 2024 | Noida",
      description: "Studied email spoofing techniques and learned ethical hacking methods using Metasploit and other security tools."
    },
    {
      role: "Backend Developer Intern",
      company: "BridgeLabz",
      duration: "May - Aug 2023 | Noida",
      description: "Developed backend services with Node.js, Express, and MongoDB. Worked on RESTful APIs and integrated frontend and backend systems."
    }
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role} at {exp.company}</h3>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
