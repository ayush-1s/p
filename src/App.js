import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
