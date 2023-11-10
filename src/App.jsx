import React from "react";
import BlurredBackground from "./components/BlurredBackground";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="font-urbanist relative font-light">
      <BlurredBackground />
      <div className="relative z-10 flex lg:flex-row flex-col">
        <Navbar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
