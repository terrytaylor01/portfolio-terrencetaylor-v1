import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainBody() {
  return (
    <main className="flex w-full flex-col items-center gap-24 px-8 pb-12 pt-12 md:pl-24 md:pr-24 lg:pb-0 lg:pl-12 lg:pt-52">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
