import React from "react";
import shProject from "../assets/sh-project.png";
import redditProject from "../assets/reddit-project.png";

export default function Projects() {
  return (
    <article className="flex flex-col gap-4 py-2 pt-6  font-slab font-light">
      <h1 className="px-6 text-4xl leading-normal">Projects</h1>
      <div className="flex flex-col gap-2">
        <section className="grid  w-full grid-cols-1 grid-rows-2 items-center justify-center gap-2 md:grid-cols-2 md:grid-rows-1  ">
          <img
            src={shProject}
            className="h-full w-full bg-black object-cover text-white"
          />

          <div className="flex h-full flex-col  gap-4 bg-black p-6 text-white">
            <h2 className=" text-2xl font-normal">
              Website for Strong Hearts Sanctuary
            </h2>
            <text className="pr-12 text-sm">
              <p>
                An animal rescue organisation, with 4 branches specialising in
                farmed animals, cats, dogs, and rabbits respectively.
              </p>{" "}
              <br />
              <p>
                This website provides serves as a vital point of contact and
                information the rescue, as well as displaying dynamic
                information about their animals in care so that they can more
                easily be adopted.
              </p>{" "}
              <br />
              <p>
                Made using React, Tailwind. Back-end API handling created using
                Cloudflare Functions
              </p>{" "}
              <br />
            </text>
            <div className="mt-auto flex flex-col opacity-70">
              <a>See the live deployment here -{">"}</a>
              <a>See the source code here -{">"}</a>
            </div>
          </div>
        </section>
        <section className="grid  w-full grid-cols-1 grid-rows-2 items-center justify-center gap-2 md:grid-cols-2 md:grid-rows-1  ">
          <img
            src={redditProject}
            className="h-full w-full bg-black object-cover text-white"
          />

          <div className="flex h-full flex-col  gap-4 bg-black p-6 text-white">
            <h2 className=" text-2xl font-normal">Kleptit</h2>
            <text className="pr-12 text-sm">
              <p>
                Kleptit is a reddit clone to demonstrate my work within a
                consumer-base and commercial product. This application serves
                pieces of content and also allows interactivity from the user.
              </p>{" "}
              <br />
              <p>
                Made using React, Tailwind as well as Google Firebase for
                authentication ,database storage, and hosting.
              </p>{" "}
            </text>
            <div className="mt-auto flex flex-col opacity-70">
              <a>See the live deployment here -{">"}</a>
              <a>See the source code here -{">"}</a>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
