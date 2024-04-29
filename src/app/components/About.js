"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import about_pic from "../../../public/images/about_pic.jpg";
import TapButton from "./TapButton";
import Link from "next/link";

const Tab_Data = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul>
        <li className="list-disc pl-2">MCKV INSTITUTE OF Engineering</li>
        <li className="ml-2">
          B.tech, Computer Science and Engineering(Data Science)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-4">
          FULL STACK Development Using MERN Stack
          <span className="ml-3">
            <Link
              href="https://drive.google.com/drive/folders/1uZJeO480TwnuvmgqKeaW3AMezBmohATd?usp=drive_link"
              className="inline-flex h-[10px]  items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-br  from-blue-700 via-green-500 to-yellow-400 rounded-lg hover:bg-gradient-to-bl  focus:outline-none  dark:focus:ring-green-400"
            >
              View
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </span>
        </li>
        <li>DEEP LEARNING Using Tenserflow and Keras
        <span className="ml-3">
            <Link
              href="https://drive.google.com/drive/folders/162ADW1E4RNYRYhuS_pVh48Dcow8M9reH?usp=drive_link"
              className="inline-flex h-[10px] items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-br  from-blue-700 via-green-500 to-yellow-400 rounded-lg hover:bg-gradient-to-bl  focus:outline-none  dark:focus:ring-green-400"
            >
              View
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </span>
        </li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransitions] = useTransition();

  const handelTabChange = (id) => {
    startTransitions(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:gap-2">
        <Image
          src={about_pic}
          alt="..."
          width="auto"
          height="auto"
          priority={true}
          className="rounded-lg"
         
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-2 mt-2">About Me</h2>
          <p className="text-base lg:text-lg ">
            As a pursuing B.Tech in Computer Science and Engineering (Data
            Science), also working as a Full Stack Developer intern, possess
            strong proficiency in MERN STACK, Nextjs, Meterial UI, Bootstrap and
            also in Deep Learning. Through my academic projects and internships,
            I have developed a solid understanding of Web Development and Data
            Science. I am passionate about coding and thrive in a collaborative
            environment where I can contribute my skills to develop innovative
            software solutions.
          </p>
          <div className="flex flex-row justify-start mt-4">
            <TapButton
              selectTab={() => handelTabChange("Skills")}
              active={tab === "Skills"}
            >
              {" "}
              Skills{" "}
            </TapButton>
            <TapButton
              selectTab={() => handelTabChange("Education")}
              active={tab === "Education"}
            >
              {" "}
              Education{" "}
            </TapButton>
            <TapButton
              selectTab={() => handelTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              {" "}
              Certifications{" "}
            </TapButton>
          </div>
          <div className="mt-2">
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
