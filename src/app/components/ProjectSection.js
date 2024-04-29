"use client";

import React, { useState } from "react";
import ProjectCard from "./projectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Job Portal Website",
    description: "I used MERN STACK for build this project",
    image: "/images/project1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Neelava9681/Job_Dekho_Website.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Human Before Resouce Pvt. Ltd. official website",
    description:
      "Its a Nextjs based website. I contributed my efforts for build this website for this company when I was doing my first internship in Human Before Resourece Pvt. Ltd.. The source code is restricted according to the company rules. ",
    image: "/images/HBR.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://humanbeforeresource.com",
  },
  {
    id: 3,
    title: "Weather Forecast website",
    description: "I am used React for build this project",
    image: "/images/weather_forecast.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Neelava9681/weather_forecast.git",
    previewUrl: "https://weatherappallcitys.netlify.app",
  },
  {
    id: 4,
    title: "Library_system",
    description: "I am used MERN stack for build this project",
    image: "/images/add_book.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://addbookscardanyonecanvisit.netlify.app",
  },
  {
    id: 5,
    title: "Driver Drowsiness Detection System",
    description: "I am used Tenserflow, Keras and opencv for build this project",
    image: "/images/final_year_project.jpg",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Changing color by buttons",
    description: "I am used Mern Stack for build this project",
    image: "/images/color_buttons.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Neelava9681/Changing_colors_by_buttons.git",
    previewUrl: "https://colorchangingbuttons.netlify.app",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handelTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      {/* <div className="flex items-center justify-center"> */}

      <h2
        className="text-4xl font-bold mb-6 mt-2 text-white flex items-center justify-center"
        id="Projects"
      >
        My Projects
      </h2>
     
      <div className="text-white flex flex-row flex-wrap justify-center items-center py-2 pl-7 mb-2 gap-2">
        <ProjectTag
          onClick={handelTagChange}
          name="All"
          isSelected={tag === "All"}
        ></ProjectTag>
        <ProjectTag
          onClick={handelTagChange}
          name="Web"
          isSelected={tag === "Web"}
        ></ProjectTag>
        <ProjectTag
          onClick={handelTagChange}
          name="AI"
          isSelected={tag === "AI"}
        ></ProjectTag>
      </div>
  

      <div className="grid md:grid-cols-3 gap-8 md:gap-8">
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
