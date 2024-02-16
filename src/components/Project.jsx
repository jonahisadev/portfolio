import React from "react";
import Pill from "./Pill";

const variants = {
  blue: "bg-sky-600 !shadow-sky-600/25",
  pink: "bg-pink-500 !shadow-pink-500/25",
  green: "bg-green-500 !shadow-green-500/25",
  purple: "bg-purple-500 !shadow-purple-500/25",
  orange: "bg-orange-400 !shadow-orange-400/25",
  red: "bg-red-400 !shadow-red-400/25",
  gray: "bg-zinc-400 !shadow-zinc-400/25 !text-zinc-900",
  white: "bg-slate-300 !shadow-slate-300/25 !text-slate-900",
};

const Project = ({ project }) => {
  const variant = variants[project.variant] || variants["blue"];

  return (
    <a
      href={project.href || "#"}
      target="_blank"
      className="pointer-events-auto"
      rel="noreferrer"
    >
      <div
        className={`${variant} min-h-[10rem] md:min-h-[20rem] shadow-lg rounded-md p-2 hover:scale-[102%] hover:shadow-xl cursor-pointer transition-all`}
      >
        <h3 className="font-bold text-2xl text-center">{project.title}</h3>
        <div>
          {project.tags.map((tag, i) => (
            <Pill key={Date.now() + i}>{tag}</Pill>
          ))}
        </div>
        <p
          className="text-lg card-desc"
          dangerouslySetInnerHTML={{ __html: project.desc || "" }}
        />
      </div>
    </a>
  );
};

export default Project;
