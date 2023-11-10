import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Body({ aboutRef, projectsRef, contactRef }) {
  return (
    <div className="w-full">
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
