import React from "react";



import BlurredBackground from "./components/BlurredBackground";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";

export const ThemeContext = React.createContext();

function App() {
  const aboutRef = React.useRef();
  const projectsRef = React.useRef();
  const contactRef = React.useRef();

  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    isDark
      ? (document.body.style.backgroundColor = "#20202b")
      : (document.body.style.backgroundColor = "white");
  }, [isDark]);

  return (
    <>
      <ThemeContext.Provider value={isDark}>
        <div
          className={
            (isDark ? "dark" : "") + " relative font-urbanist font-light "
          }
        >
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
              setIsDark={setIsDark}
            />
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
