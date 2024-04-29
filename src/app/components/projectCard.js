import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
      <div
        className="h-[11rem] md:h-[16rem] rounded-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "100%", backgroundSize: "cover"}}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl}>
            <CodeBracketIcon className="border rounded-full border-[#BBBABC] hover:border-white h-10 w-10 mr-5 text-[#BBBABC] hover:text-white" />
          </Link>
          <Link href={previewUrl}>
            <EyeIcon className="border rounded-full border-[#BBBABC] hover:border-white h-10 w-10 text-[#BBBABC] hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl py-3 px-4">
        <h1 className="text-white font-semibold mb-1">{title}</h1>
        <p className="text-[#BBBABC] font-semibold mb-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
