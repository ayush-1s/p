import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      name: "Gym Website",
      tech: "React.js, JavaScript, HTML, CSS",
      link: "https://updatedgymwebsites-ayush-sharmas-projects-bf1df430.vercel.app/"
    },
    {
      name: "Real Estate Website",
      tech: "MongoDB, Node.js, React.js, Next.js",
      link: "https://estaterry.netlify.app/"
    },
    {
      name: "E-commerce Recommendation System",
      tech: "Python, Flask, React.js",
      link: "https://github.com/ayush-1s"
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
