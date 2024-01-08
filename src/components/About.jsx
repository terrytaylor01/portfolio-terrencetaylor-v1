import React from "react";

import headshot from "../assets/terrence-taylor2.webp";
import { ThemeContext } from "../App";
import SkillIcon from "./SkillIcon";

export default function About() {
  const isDark = React.useContext(ThemeContext);
  return (
    <section className="flex min-h-[60vh] max-w-[1240px] flex-col items-center justify-center gap-10 text-base dark:text-white dark:text-opacity-80 lg:pb-24 lg:pt-64 xl:text-xl">
      <div>
        <h1 className="text-5xl opacity-60 ">About</h1>
      </div>
      <div className="flex h-fit w-full flex-col items-center gap-12 lg:h-96 lg:flex-row">
        <span className="block  w-fit  grow overflow-clip rounded-[4rem] border-2 border-white object-cover  shadow-lg lg:hidden lg:w-auto ">
          <img
            className="aspect-square  h-96   object-cover"
            src={headshot}
            alt="Headshot of Terrence Taylor, what a stunning young man"
          />
        </span>
        <div className="flex h-full w-auto grow items-center rounded-[4rem] bg-white bg-opacity-[0.8] p-5  py-6 shadow-lg backdrop-blur-lg transition-colors dark:bg-[#020214]  dark:bg-opacity-80 lg:w-[72%] xl:px-12">
          <p className="h-fit text-3xl tracking-tight font-thin">
            Hello, I’m Terrence Taylor, a dedicated front-end developer based in
            Melbourne, Australia. I’m passionate about creating responsive and
            engaging digital experiences that captivate users. My skill set
            includes HTML, CSS, JavaScript, TypeScript, React, and TailwindCSS.
            Leveraging these tools, I’m able to craft dynamic and compelling
            interfaces underpinned by clean code and cutting-edge techniques.
        
          </p>
        </div>
        <span className="hidden  w-fit  grow overflow-clip rounded-[4rem] object-cover shadow-lg lg:block  lg:w-auto">
          <img
            className="aspect-square  h-96  object-cover "
            src={headshot}
            alt="Headshot of Terrence Taylor, what a stunning young man"
          />
        </span>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-2 rounded-[4rem] bg-white bg-opacity-[0.8] px-8 py-4 shadow-lg backdrop-blur-lg transition-colors dark:bg-[#020214] dark:bg-opacity-80 lg:flex-row lg:gap-0 lg:px-12 lg:py-8">
        <h2 className="mr-6 w-fit xl:w-48">
          My skills, technologies and tools:
        </h2>
        <div className="grid w-full grow grid-cols-3 items-center justify-center gap-4 md:flex md:gap-4 [&>*]:ml-auto [&>*]:mr-auto ">
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
          <SkillIcon isDark={isDark} skill={"ts"} alt={"TypeScript"} />
          <SkillIcon isDark={isDark} skill={"react"} alt={"React"} />
          <SkillIcon isDark={isDark} skill={"nextjs"} alt={"NextJS"} />
          <SkillIcon isDark={isDark} skill={"tailwind"} alt={"TailwindCSS"} />
          <SkillIcon isDark={isDark} skill={"python"} alt={"Python"} />
          <SkillIcon isDark={isDark} skill={"cloudflare"} alt={"Cloudflare"} />
          <SkillIcon isDark={isDark} skill={"figma"} alt={"Figma"} />
        </div>
      </div>
    </section>
  );
}
