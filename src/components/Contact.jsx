import React from "react";

export default function Contact() {
  return (
    <article className="flex h-72 flex-col justify-between gap-2  p-6 font-slab font-normal">
      <div>
        <h1 className="text-4xl ">Contact</h1>

        <div className="flex justify-between text-lg">
          <p>Want to talk? Feel free to reach out</p>
          <div>
            <p>Email: terrencetaylor01@gmail.com</p>
            <p>Location: Melbourne, Australia</p>
          </div>
        </div>
      </div>
      <div className=" max-w-sm text-sm opacity-60">
        <p>
          This site has been designed and Figma and coded by me. Built using
          React.js and Tailwind CSS. Deployed on Cloudflare Pages. See the
          source code here-{">"}
        </p>
      </div>
    </article>
  );
}
