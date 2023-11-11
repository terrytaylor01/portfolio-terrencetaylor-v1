import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function MainBody({
  aboutRef,
  projectsRef,
  contactRef,
  setIsDark,
}) {
  function darkModeHandler() {
    setIsDark((prev) => {
      return !prev;
    });
  }
  return (
    <main className="flex w-full flex-col items-center gap-24 px-8 pb-12 pt-12 md:pl-24 md:pr-24 lg:pb-0 lg:pl-12 lg:pt-52">
      <button
        onClick={darkModeHandler}
        className="absolute right-0 top-20 w-20 p-5 drop-shadow-md md:top-0"
        aria-label="Dark Mode Toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-none"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
            strokeWidth="2"
            className="stroke-white dark:stroke-black"
          ></path>
        </svg>
      </button>
      <span className="scroll-m-[15vh] md:scroll-m-0" ref={aboutRef}>
        <About />
      </span>
      <span className="scroll-m-[12vh] md:scroll-m-[5vh]" ref={projectsRef}>
        <Projects />
      </span>
      <span className="scroll-m-[12vh] md:scroll-m-0" ref={contactRef}>
        <Contact />
      </span>
      <span className="absolute bottom-0 right-0 ml-auto flex h-12 items-center justify-center text-sm text-black transition-colors dark:text-white md:bottom-5 md:right-5 lg:w-[20%]">
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
