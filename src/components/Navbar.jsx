import React from "react";

import brandLogo from "../assets/brand-logo.png";
import whiteBrandLogo from "../assets/brand-logo-white.png";
import { ThemeContext } from "../App";

export default function Navbar({ aboutRef, projectsRef, contactRef }) {
  function scrollToRef(ref, blockVar) {
    ref.current.scrollIntoView({ behavior: "smooth", block: blockVar });
  }

  let isDark = React.useContext(ThemeContext);

  return (
    <>
      <div className="sticky left-0 top-0 hidden h-screen w-[10vw] items-center justify-center lg:flex ">
        {/* desktop nav */}
        <nav className="hidden h-[75%] w-fit flex-col items-center justify-between rounded-full bg-white bg-opacity-80 py-3 shadow-lg backdrop-blur-lg dark:bg-[#020214] dark:bg-opacity-80 dark:text-white lg:flex">
          <button
            onClick={() => {
              document.body.scrollTo(0, 0);
            }}
            aria-label="home"
          >
            <img
              className="w-full max-w-[5.5rem] opacity-60 mix-blend-normal dark:opacity-80 dark:mix-blend-plus-lighter dark:brightness-150"
              src={isDark ? whiteBrandLogo : brandLogo}
              alt="Terrence Taylor icon"
            />
          </button>
          <ul className="flex flex-col items-center gap-3 text-base 2xl:text-lg">
            <li>
              <button
                className="transition-all hover:tracking-wider"
                onClick={() => scrollToRef(aboutRef, "center")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="transition-all hover:tracking-wider"
                onClick={() => scrollToRef(projectsRef, "start")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="transition-all hover:tracking-wider"
                onClick={() => scrollToRef(contactRef, "center")}
              >
                Contact
              </button>
            </li>
          </ul>
          <div className="flex w-[2.25vw] flex-col gap-1 opacity-70">
            <a
              className="transition-all hover:scale-105 hover:drop-shadow-md"
              href="https://github.com/terrytaylor01"
              target="_blank"
              aria-label="Link to Terrence Taylor's Github page"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-black dark:stroke-white"
              >
                <g clipPath="url(#clip0_10_530)">
                  <path
                    d="M17.25 36.4167C9.00833 39.1 9.00833 31.625 5.75 30.6667M28.75 40.25V33.5417C28.75 31.625 28.9417 30.8583 27.7917 29.7083C33.1583 29.1333 38.3333 27.025 38.3333 18.2083C38.331 15.9178 37.4374 13.7182 35.8417 12.075C36.5901 10.0854 36.5212 7.88062 35.65 5.94166C35.65 5.94166 33.5417 5.36666 28.9417 8.43333C25.0455 7.41862 20.9545 7.41862 17.0583 8.43333C12.4583 5.36666 10.35 5.94166 10.35 5.94166C9.47884 7.88062 9.40994 10.0854 10.1583 12.075C8.56262 13.7182 7.669 15.9178 7.66667 18.2083C7.66667 27.025 12.8417 29.1333 18.2083 29.7083C17.0583 30.8583 17.0583 32.0083 17.25 33.5417V40.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_530">
                    <rect width="46" height="46" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/terrence-taylor-863ab71a7"
              target="_blank"
              aria-label="Link to Terrence Taylor's LinkedIn page"
              className="transition-all hover:scale-105 hover:drop-shadow-md"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-black dark:stroke-white"
              >
                <g clipPath="url(#clip0_10_523)">
                  <path
                    d="M8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H36C37.0609 8 38.0783 8.42143 38.8284 9.17157C39.5786 9.92172 40 10.9391 40 12V36C40 37.0609 39.5786 38.0783 38.8284 38.8284C38.0783 39.5786 37.0609 40 36 40H12C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0609 8 36V12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 22V32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 16V16.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 32V22"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 32V26C32 24.9391 31.5786 23.9217 30.8284 23.1716C30.0783 22.4214 29.0609 22 28 22C26.9391 22 25.9217 22.4214 25.1716 23.1716C24.4214 23.9217 24 24.9391 24 26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div className="sticky top-0 z-50 flex h-[10vh] w-screen items-center justify-center lg:hidden">
        {/* mobile / small screen nav */}
        <nav className=" mx-4 flex h-[75%] w-full items-center justify-between rounded-full bg-white bg-opacity-80 px-3 shadow-lg backdrop-blur-lg dark:bg-[#020214] dark:bg-opacity-80 dark:text-white">
          <button
            onClick={() => {
              document.body.scrollTo(0, 0);
            }}
            className="h-full"
          >
            <img
              className="ml-1 max-h-full max-w-[40px] opacity-30 mix-blend-normal dark:opacity-80 dark:mix-blend-plus-lighter dark:brightness-150"
              src={isDark ? whiteBrandLogo : brandLogo}
            />
          </button>
          <ul className="mx-2 flex items-center gap-2 text-base 2xl:text-lg">
            <li>
              <button onClick={() => scrollToRef(aboutRef, "start")}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToRef(projectsRef, "start")}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToRef(contactRef, "center")}>
                Contact
              </button>
            </li>
          </ul>
          <div className="flex w-20 gap-1 opacity-70">
            <a
              href="https://github.com/terrytaylor01"
              target="_blank"
              aria-label="Link to Terrence Taylor's Github page"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-black dark:stroke-white"
              >
                <g clipPath="url(#clip0_10_530)">
                  <path
                    d="M17.25 36.4167C9.00833 39.1 9.00833 31.625 5.75 30.6667M28.75 40.25V33.5417C28.75 31.625 28.9417 30.8583 27.7917 29.7083C33.1583 29.1333 38.3333 27.025 38.3333 18.2083C38.331 15.9178 37.4374 13.7182 35.8417 12.075C36.5901 10.0854 36.5212 7.88062 35.65 5.94166C35.65 5.94166 33.5417 5.36666 28.9417 8.43333C25.0455 7.41862 20.9545 7.41862 17.0583 8.43333C12.4583 5.36666 10.35 5.94166 10.35 5.94166C9.47884 7.88062 9.40994 10.0854 10.1583 12.075C8.56262 13.7182 7.669 15.9178 7.66667 18.2083C7.66667 27.025 12.8417 29.1333 18.2083 29.7083C17.0583 30.8583 17.0583 32.0083 17.25 33.5417V40.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_530">
                    <rect width="46" height="46" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/terrence-taylor-863ab71a7"
              target="_blank"
              aria-label="Link to Terrence Taylor's LinkedIn page"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-black dark:stroke-white"
              >
                <g clipPath="url(#clip0_10_523)">
                  <path
                    d="M8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H36C37.0609 8 38.0783 8.42143 38.8284 9.17157C39.5786 9.92172 40 10.9391 40 12V36C40 37.0609 39.5786 38.0783 38.8284 38.8284C38.0783 39.5786 37.0609 40 36 40H12C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0609 8 36V12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 22V32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 16V16.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 32V22"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 32V26C32 24.9391 31.5786 23.9217 30.8284 23.1716C30.0783 22.4214 29.0609 22 28 22C26.9391 22 25.9217 22.4214 25.1716 23.1716C24.4214 23.9217 24 24.9391 24 26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
