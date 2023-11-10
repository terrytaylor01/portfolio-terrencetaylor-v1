import React from "react";
import BlurredBackground from "./components/BlurredBackground";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";

function App() {
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const contactRef = React.useRef();

  return (
    <div className="font-urbanist relative font-light">
      <BlurredBackground />
      <div className="relative z-10 flex flex-col lg:flex-row">
        <Navbar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <MainBody
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </div>
    </div>
  );
}

export default App;
