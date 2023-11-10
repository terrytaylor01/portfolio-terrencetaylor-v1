import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainBody({ aboutRef, projectsRef, contactRef }) {
  return (
    <main className="flex w-full flex-col items-center gap-24 px-8 pb-12 pt-12 md:pl-24 md:pr-24 lg:pb-0 lg:pl-12 lg:pt-52">
      <span ref={aboutRef}>
        <About />
      </span>
      <span ref={projectsRef}>
        <Projects />
      </span>
      <span ref={contactRef}>
        <Contact />
      </span>
      <span className="absolute bottom-0 right-0 ml-auto flex h-12 items-center justify-center text-sm md:bottom-5 md:right-5 lg:w-[20%]">
        <p className="text-right opacity-40">
          This website was designed in Figma and coded by me. Built using
          ReactJs and Tailwind CSS, deployed with Cloudflare Pages.{" "}
          <a
            href="https://github.com/terrytaylor01/portfolio-terrencetaylor-v1"
            target="_blank"
          >
            View the source code here-{">"}
          </a>
        </p>
      </span>
    </main>
  );
}
