import React from "react";

export default function Contact() {
  return (
    <section className="mb-16 flex min-h-[50vh] flex-col gap-12 text-center text-black dark:text-white dark:text-opacity-80">
      <h1 className="text-5xl">Contact</h1>
      <h2 className="text-2xl lg:text-3xl">Want to talk? Reach out</h2>
      <span className="flex h-fit w-full flex-col items-center gap-12 lg:flex-row">
        <a
          href="mailto:terrencetaylor01@gmail.com"
          className="w-auto rounded-[4rem] bg-white bg-opacity-[0.8] px-6  py-4 shadow-lg backdrop-blur-lg transition-all hover:scale-105 dark:bg-[#020214]  dark:bg-opacity-80 lg:px-12 lg:py-8 "
          draggable="false"
        >
          <p className="text-xl lg:text-3xl">
            Email: terrencetaylor01@gmail.com
          </p>
        </a>
        <div className="flex h-fit w-full flex-row items-center justify-center gap-12 ">
          <a
            href="https://github.com/terrytaylor01"
            aria-label="Link to Terrence Taylor's GitHub page"
            target="_blank"
            className="w-auto rounded-full bg-[#0075FF] bg-opacity-50 p-6  shadow-lg  backdrop-blur-lg transition-transform hover:scale-105 "
          >
            <svg
              className="h-12"
              width="100%"
              height="100%"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_530)">
                <path
                  d="M17.25 36.4167C9.00833 39.1 9.00833 31.625 5.75 30.6667M28.75 40.25V33.5417C28.75 31.625 28.9417 30.8583 27.7917 29.7083C33.1583 29.1333 38.3333 27.025 38.3333 18.2083C38.331 15.9178 37.4374 13.7182 35.8417 12.075C36.5901 10.0854 36.5212 7.88062 35.65 5.94166C35.65 5.94166 33.5417 5.36666 28.9417 8.43333C25.0455 7.41862 20.9545 7.41862 17.0583 8.43333C12.4583 5.36666 10.35 5.94166 10.35 5.94166C9.47884 7.88062 9.40994 10.0854 10.1583 12.075C8.56262 13.7182 7.669 15.9178 7.66667 18.2083C7.66667 27.025 12.8417 29.1333 18.2083 29.7083C17.0583 30.8583 17.0583 32.0083 17.25 33.5417V40.25"
                  stroke="white"
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
            aria-label="Link to Terrence Taylor's LinkedIn page"
            target="_blank"
            className="w-auto rounded-full bg-[#0500FF] bg-opacity-60 p-6 shadow-lg  backdrop-blur-lg transition-transform hover:scale-105 "
          >
            <svg
              className="h-12"
              width="100%"
              height="100%"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_523)">
                <path
                  d="M8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H36C37.0609 8 38.0783 8.42143 38.8284 9.17157C39.5786 9.92172 40 10.9391 40 12V36C40 37.0609 39.5786 38.0783 38.8284 38.8284C38.0783 39.5786 37.0609 40 36 40H12C10.9391 40 9.92172 39.5786 9.17157 38.8284C8.42143 38.0783 8 37.0609 8 36V12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 22V32"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 16V16.02"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 32V22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 32V26C32 24.9391 31.5786 23.9217 30.8284 23.1716C30.0783 22.4214 29.0609 22 28 22C26.9391 22 25.9217 22.4214 25.1716 23.1716C24.4214 23.9217 24 24.9391 24 26"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </a>
        </div>
      </span>
    </section>
  );
}
