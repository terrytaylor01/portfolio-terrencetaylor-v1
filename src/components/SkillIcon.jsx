import React from "react";

export default function SkillIcon({ isDark, skill, alt }) {
  return (
    <div className="group relative h-16">
      <img
        className="h-full transition-transform hover:scale-105 drop-shadow-sm"
        src={
          isDark
            ? "https://skillicons.dev/icons?i=" + skill + "&theme=dark"
            : "https://skillicons.dev/icons?i=" + skill + "&theme=light"
        }
        alt={alt}
      />
      <div className="absolute -bottom-24 left-1/2 -translate-x-[50%] rounded-md  bg-white  bg-opacity-70 px-3 py-2 opacity-0 shadow-md  transition-opacity group-hover:opacity-100 dark:bg-[#020214] dark:text-white">
        <p>{alt}</p>
      </div>
    </div>
  );
}
