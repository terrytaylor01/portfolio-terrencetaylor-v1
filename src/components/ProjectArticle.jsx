import React from "react";

export default function ProjectArticle({
  body,
  title,
  imgLink,
  codeLink,
  deployLink,
}) {
  return (
    <article className="flex flex-col items-center justify-center gap-12">
      <h2 className="text-center text-xl lg:text-3xl ">{title}</h2>
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col items-center gap-6 lg:h-[25rem] lg:gap-12 xl:flex-row">
          <div className=" aspect-[400/320] w-full max-w-[85vw] overflow-clip rounded-[4rem] object-cover shadow-lg  lg:h-[22rem] lg:w-[60%] xl:hidden ">
            <img
              className="h-full w-full object-cover"
              src={imgLink}
              alt="Screenshot of project"
            />
          </div>
          <div className="h-full min-h-[22rem]  max-w-[85vw]  rounded-[4rem] bg-white bg-opacity-[0.8]  px-6  py-8 text-base shadow-lg backdrop-blur-xl transition-colors dark:bg-[#020214]  dark:bg-opacity-80 lg:w-[75%]  lg:px-12 lg:text-lg">
            {body}
          </div>
          <div className="hidden h-full  overflow-clip rounded-[4rem]  object-cover shadow-lg lg:w-auto  xl:block">
            <img
              className="h-full w-full object-cover"
              src={imgLink}
              alt="Screenshot of project"
            />
          </div>
        </div>
        <span className="flex gap-2  text-xl text-white lg:gap-12 lg:text-4xl ">
          <a
            href={codeLink}
            target="_blank"
            className="rounded-full bg-[#0075FF] bg-opacity-70 px-8 py-4  text-center shadow-lg backdrop-blur-lg transition-transform hover:scale-105 dark:bg-black dark:bg-opacity-40"
          >
            View code
          </a>
          <a
            href={deployLink}
            target="_blank"
            className="rounded-full bg-[#0500FF] bg-opacity-60 px-8 py-4 text-center shadow-lg backdrop-blur-lg transition-transform hover:scale-105"
          >
            View deployment
          </a>
        </span>
      </div>
    </article>
  );
}
