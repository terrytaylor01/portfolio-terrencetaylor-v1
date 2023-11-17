import React from "react";

import sampleHeadshot from "../assets/sample-headshot.png";
import { ThemeContext } from "../App";
import SkillIcon from "./SkillIcon";

export default function About() {
  const isDark = React.useContext(ThemeContext);
  return (
    <section className="flex min-h-[60vh] max-w-[1240px] flex-col items-center justify-center gap-10 text-base dark:text-white dark:text-opacity-80 lg:pb-24 lg:pt-64 xl:text-xl">
      <div>
        <h1 className="text-5xl  ">About</h1>
      </div>
      <div className="flex flex-col items-center gap-12 lg:flex-row ">
        <span className="block aspect-square h-full w-fit overflow-clip rounded-[4rem] object-cover shadow-lg lg:hidden  lg:w-auto">
          <img
            src={sampleHeadshot}
            alt="Headshot of Terrence Taylor, what a stunning young man"
          />
        </span>
        <span className="w-auto rounded-[4rem] bg-white bg-opacity-[0.8] px-12 py-8 shadow-lg backdrop-blur-lg transition-colors dark:bg-[#020214] dark:bg-opacity-80  md:h-[295px] lg:w-[72%]">
          <p>
            Hi, I’m <b className="text-xl">Terrence Taylor</b>, an enthusiastic
            frontend developer passionate about making responsive and engaging
            digital experiences. I am based in Melbourne, Australia.
            <br />
            <br />
          </p>

          <p>
            I have a useful skill set including HTML, CSS and JavaScript, React,
            TailwindCSS. With this foundation I can craft dynamic and compelling
            interfaces helmed by clean code and cutting-edge techniques. I have
            thrived in delivering projects as a team-player with my
            opportunities to deliver projects as part of a team. FIX THIS
            SENTENCE
          </p>
        </span>
        <span className="hidden aspect-square h-full w-fit overflow-clip rounded-[4rem] object-cover shadow-lg lg:block  lg:w-auto">
          <img
            src={sampleHeadshot}
            alt="Headshot of Terrence Taylor, what a stunning young man"
          />
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-2 rounded-[4rem] bg-white bg-opacity-[0.8] px-8 py-4 shadow-lg backdrop-blur-lg transition-colors dark:bg-[#020214] dark:bg-opacity-80 lg:flex-row lg:gap-0 lg:px-12 lg:py-8">
        <h2 className="mr-6 w-fit xl:w-48">
          My skills, technologies and tools:
        </h2>
        <div className="flex grow justify-center gap-4 ">
          {/* <img
            className="h-16"
            src={
              isDark
                ? "https://skillicons.dev/icons?i=html,css,js,react,tailwind,python,cloudflare,firebase,figma&theme=dark"
                : "https://skillicons.dev/icons?i=html"
            }
            alt="HTML, CSS, JavaScript, ReactJs, Tailwind CSS, Python, Cloudflare, Firebase, Figma"
          /> */}
          <SkillIcon isDark={isDark} skill={"html"} alt={"HTML5"} />
          <SkillIcon isDark={isDark} skill={"css"} alt={"CSS3"} />
          <SkillIcon isDark={isDark} skill={"js"} alt={"JavaScript"} />
          <SkillIcon isDark={isDark} skill={"react"} alt={"React"} />
          <SkillIcon isDark={isDark} skill={"tailwind"} alt={"TailwindCSS"} />
          <SkillIcon isDark={isDark} skill={"supabase"} alt={"Supabase"} />
          <SkillIcon isDark={isDark} skill={"python"} alt={"Python"} />
          <SkillIcon isDark={isDark} skill={"cloudflare"} alt={"Cloudflare"} />
          <SkillIcon isDark={isDark} skill={"firebase"} alt={"Firebase"} />
          <SkillIcon isDark={isDark} skill={"figma"} alt={"Figma"} />
        </div>
      </div>
    </section>
  );
}
