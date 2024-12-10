import React from "react";
import profilePic from "../assets/ayush.jpeg";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="wave-container">
        <div className="wave"></div>
      </div>
      <img src={profilePic} alt="Ayush Sharma" className="profile-pic" />
      <h1>Ayush Sharma</h1>
      <p>Full Stack Developer | Java Enthusiast</p>
      <div className="contact-info">
        <p>Contact: <a href="tel:+918178853623">+91 8178853623</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ayush-sharma-980167233/" target="_blank" rel="noopener noreferrer">Ayush Sharma</a></p>
      </div>
    </header>
  );
}

export default Header;

