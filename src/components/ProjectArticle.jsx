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
      <h2 className="text-center text-xl lg:text-3xl">{title}</h2>
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col items-center gap-6 xl:flex-row lg:gap-12">
          <div className="aspect-[400/320]  max-w-[85vw] overflow-clip rounded-[4rem] object-cover shadow-lg  xl:hidden lg:h-[22rem] w-full ">
            <img className="h-full w-full object-cover" src={imgLink} />
          </div>
          <div className="min-h-[22rem] w-auto max-w-[85vw]  rounded-[4rem] bg-white bg-opacity-[0.85] px-6 py-8 text-base shadow-lg backdrop-blur-lg lg:w-[60%]  lg:px-12 lg:text-lg">
            {body}
          </div>
          <span className="hidden  aspect-[400/320] h-[22rem] overflow-clip rounded-[4rem]  object-cover shadow-lg xl:block  lg:w-auto">
            <img className="h-full w-full object-cover" src={imgLink} />
          </span>
        </div>
        <span className="flex gap-2  lg:gap-12 text-xl lg:text-4xl text-white ">
          <a
            href={codeLink}
            className="rounded-full bg-[#0075FF]  bg-opacity-70 px-8 py-4 shadow-lg backdrop-blur-lg transition-transform hover:scale-105"
          >
            View code
          </a>
          <a
            href={deployLink}
            className="rounded-full bg-[#0500FF] bg-opacity-70 px-8 py-4 shadow-lg backdrop-blur-lg transition-transform hover:scale-105"
          >
            View deployment
          </a>
        </span>
      </div>
    </article>
  );
}
