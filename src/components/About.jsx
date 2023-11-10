import React from "react";

export default function About() {
  return (
    <article className="p-6 font-slab font-light flex flex-col gap-4 pb-24">
      <h1 className="text-4xl leading-normal">About</h1>
      <div className=" flex [&>*]:max-w-sm">
        <p>
          Hi, I’m Terrence Taylor. A enthusiastic frontend developer based in
          Melbourne, Australia. I am passionate in building responsive and
          engaging digital experiences. Outside of coding I love fostering
          animals, 3d modelling or listening to music.
        </p>
        <p>
          As a frontend developer I have an awesome range within my skill set,
          this includes HTML, CSS, JavaScript, React and Tailwind. On top of
          this foundation I have worked with many different tools and
          technologies including Figma, Github, Firebase, Cloudflare Pages and
          Functions, and Vite.
        </p>
      </div>
    </article>
  );
}
