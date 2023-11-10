import React from "react";

import ghLogo from "../assets/github-logo.png";
import liLogo from "../assets/linkedin-logo.png";

export default function Sidebar({ aboutRef, projectsRef, contactRef }) {
  function scrollToRef(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className="sticky left-0 top-0 hidden  h-screen w-64 flex-col bg-white p-6 font-slab font-light md:flex ">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl leading-normal"> Terrence Taylor</h1>
          <h2 className="pl-2 text-2xl leading-normal">Frontend Developer</h2>
        </div>

        <ul className="mt-16 flex list-disc flex-col gap-3 pl-8 text-2xl ">
          <li>
            <button
              className="transition-all hover:tracking-wider"
              onClick={() => scrollToRef(aboutRef)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="transition-all hover:tracking-wider"
              onClick={() => scrollToRef(projectsRef)}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="transition-all hover:tracking-wider"
              onClick={() => scrollToRef(contactRef)}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="mt-auto flex items-center">
          <a
            className="transition-transform hover:scale-105"
            href="www.linkedin.com/in/terrence-taylor-863ab71a7"
            target="_blank"
          >
            <img src={liLogo} />
          </a>
          <a
            className="transition-transform hover:scale-105"
            href="https://github.com/terrytaylor01"
            target="_blank"
          >
            <img src={ghLogo} />
          </a>
        </div>
      </nav>

      <nav className="flex w-full items-center justify-between gap-4 bg-white p-4 font-slab font-light md:hidden">
        <div className="flex">
          <h1 className="w-24 text-2xl "> Terrence Taylor</h1>
        </div>
        <ul className="flex list-disc  gap-8  text-lg px-4 ">
          <li>
            <button
              className="transition-all hover:tracking-wider"
              onClick={() => scrollToRef(aboutRef)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="transition-all hover:tracking-wider"
              onClick={() => scrollToRef(projectsRef)}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="transition-all hover:tracking-wider"
              onClick={() => scrollToRef(contactRef)}
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="flex scale-75 items-center gap-2">
          <a
            href="www.linkedin.com/in/terrence-taylor-863ab71a7"
            target="_blank"
          >
            <img src={liLogo} />
          </a>
          <a href="https://github.com/terrytaylor01" target="_blank">
            <img src={ghLogo} />
          </a>
        </div>
      </nav>
    </>
  );
}
