import React from "react";
import ProjectArticle from "./ProjectArticle";

import shProject from "../assets/sh-project.png";
import redditProject from "../assets/reddit-project.png";

export default function Projects() {
  return (
    <section className="flex min-h-[50vh] max-w-[1240px] flex-col items-center justify-center gap-6 text-base text-black dark:text-white dark:text-opacity-80 lg:gap-10 lg:px-10 xl:text-xl">
      <div>
        <h1 className="text-5xl ">Projects</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 lg:gap-24">
        <ProjectArticle
          title={"Strong Hearts Sanctuary Website"}
          body={
            <>
              <p>
                This site acts a connection point between the animal rescue
                organisation and the community in which it operates.
              </p>
              <br></br>
              <p>
                A 17+ page (not including dynamic pages) project encompassing
                many aspects of the rescue. Creating this involved serving
                dynamic content in the form of the animal adoption profiles
                which is taken from a third party API that the organisation uses
                for their profiles. To obscure their API keys a backend API
                handler had to be created which was implemented using
                Cloudflare’s edge functions
              </p>{" "}
              <br></br>
              <p>
                Built using React, TailwindCSS, Cloudflare Pages Functions and
                Vite.
              </p>
            </>
          }
          imgLink={shProject}
          codeLink={"https://google.com"}
          deployLink={"https://google.com"}
        />
        <ProjectArticle
          title={"Keptit"}
          body={
            <>
              <p>
                This project is a clone of popular social media site, Reddit.
              </p>
              <br></br>
              <p>
                The development of this was to demonstrate my capabilities of
                working on an enumulated large-scale commercial application
              </p>
            </>
          }
          imgLink={redditProject}
          codeLink={"https://google.com"}
          deployLink={"https://google.com"}
        />
      </div>
    </section>
  );
}
