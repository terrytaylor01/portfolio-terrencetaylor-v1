import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import React from "react";

function App() {
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const contactRef = React.useRef();

  return (
    <main className="flex flex-col md:flex-row bg-[#F9F7F7]">
      <Sidebar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Body
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </main>
  );
}

export default App;
