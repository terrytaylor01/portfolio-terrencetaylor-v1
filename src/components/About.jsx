import React from "react";

import sampleHeadshot from "../assets/sample-headshot.png";

export default function About() {
  return (
    <section className="flex min-h-[50vh] max-w-[1240px] flex-col items-center justify-center gap-10 text-base xl:text-xl">
      <div>
        <h1 className="text-5xl ">About</h1>
      </div>
      <div className="flex flex-col items-center gap-12 lg:flex-row ">
        <span className="block aspect-square h-full w-fit overflow-clip rounded-[4rem] object-cover shadow-lg lg:hidden  lg:w-auto">
          <img
            src={sampleHeadshot}
            alt="Headshot of Terrence Taylor, what a stunning young man"
          />
        </span>
        <span className="w-auto rounded-[4rem] bg-white bg-opacity-80 px-12 py-8 shadow-lg  backdrop-blur-lg lg:w-[72%]">
          <p>
            Hi, I’m Terrence Taylor, an enthusiastic frontend developer
            passionate about making responsive and engaging digital experiences.
            <br />
            <br />
          </p>

          <p>
            I have a useful skill set including HTML, CSS and JavaScript, React,
            TailwindCSS. With this foundation I can craft dynamic and compelling
            interfaces helmed by clean code and cutting-edge techniques. I have
            thrived in delivering projects as a team-player with my
            opportunities to deliver projects as part of a team.
          </p>
        </span>
        <span className="hidden aspect-square h-full w-fit overflow-clip rounded-[4rem] object-cover shadow-lg lg:block  lg:w-auto">
          <img
            src={sampleHeadshot}
            alt="Headshot of Terrence Taylor, what a stunning young man"
          />
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-2 rounded-[4rem] bg-white bg-opacity-90 px-8 py-4 shadow-lg backdrop-blur-lg lg:flex-row lg:gap-0 lg:px-12 lg:py-8">
        <h2 className="mr-6 w-fit xl:w-48">
          My skills, technologies and tools:
        </h2>
        <div className="flex grow justify-center xl:mx-[15%]">
          <img
            className="w-full"
            src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,python,cloudflare,firebase,figma&theme=light"
            alt="HTML, CSS, JavaScript, ReactJs, Tailwind CSS, Python, Cloudflare, Firebase, Figma"
          />{" "}
        </div>
      </div>
    </section>
  );
}
