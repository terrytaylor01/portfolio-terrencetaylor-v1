import ProjectArticle from "./ProjectArticle";

import simpliFramedImg from "../assets/simpliframed.webp";

export default function Projects() {
  return (
    <section className="flex min-h-[50vh] max-w-[1240px] flex-col items-center justify-center gap-6 text-base text-black dark:text-white dark:text-opacity-80 lg:gap-10 lg:px-10 xl:text-xl">
      <div>
        <h1 className=" text-5xl ">Projects</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 lg:gap-24">
        <ProjectArticle
          title={"SimpliFramed"}
          body={
            <>
              <p>
                Delivered a production-ready e-commerce store capable of
                accepting orders and generating revenue. Made using NextJS and
                Typescript. The site allows users to upload their own files to
                order them as framed prints. <br /> Design included a unique
                landing page with captivating scroll-based image animations,
                enhancing user engagement and brand storytelling. Utilised
                NextJS’ API routes to interact with BigCommerce's REST API,
                ensuring a smooth ordering experience that effortlessly handles
                product fetching, checkout generation and cart utilities.
                Architected a robust image uploading and processing pipeline for
                the user utilising third party S3 interfacing services, enabling
                users to effortlessly upload custom images and receive
                client-side feedback on resolution and sizing suitability.
              </p>
            </>
          }
          imgLink={simpliFramedImg}
          codeLink={null}
          deployLink={"https://simpliframed-webstore.vercel.app/"}
        />

        <ProjectArticle
          title={"Klepit"}
          body={
            <>
              <p>
                This project is a clone of the Reddit homepage, it features a
                list of posts in rows, with the ability to expand text posts to
                see the body text, and image posts to preview the image.
              </p>
              <br></br>
              <p>
                This project was a great opportunity for me to showcase my
                skills in front-end development, particularly with TypeScript,
                React, as well as interfacing with a SQL database. Using Reddit
                as a base showed how I can create intuitive and responsive user
                interfaces emulating a large commercial product. Also with
                robust and type-safe code through the use of TypeScript. The
                implementation of user authentication, post filtering, and
                voting features required a deep understanding of how to
                integrate with back-end services, a crucial aspect for any
                front-end developer.
              </p>
            </>
          }
          imgLink={"https://imgur.com/uFgXN8R.jpg"}
          codeLink={"https://github.com/terrytaylor01/Klepit"}
          deployLink={"https://klepit.pages.dev/"}
          deployTooltip={"username: test123@sample.io pw: qwerty123"}
        />
        <ProjectArticle
          title={"Strong Hearts Sanctuary Website"}
          body={
            <>
              <p>
                Bridging the gap between the rescue organization and the
                community, this site facilitates pet adoption profiles,
                volunteer sign-ups, and educational resources.
              </p>
              <br></br>
              <p>
                A 19+ page project encompassing many aspects of the rescue.
                Creating this involved serving dynamic content in the form of
                the animal adoption profiles which is taken from a third party
                RESTful API that the organisation uses for their profiles. To
                obscure their API keys a backend API handler had to be created
                which was implemented using Cloudflare’s edge functions
              </p>{" "}
              <br></br>
              <p>
                Designed using Figma. Built using React, TailwindCSS, Cloudflare
                Pages Functions and Vite.
              </p>
            </>
          }
          imgLink={"https://imgur.com/5ZQJxnu.png"}
          codeLink={"https://github.com/terrytaylor01/strong-hearts-public"}
          deployLink={"https://strong-hearts-website-gh.pages.dev/"}
        />
      </div>
    </section>
  );
}
