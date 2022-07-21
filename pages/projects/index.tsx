/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { GitHubIcon } from "../../components/branding";
import Image from "next/image";

const projectContent = [
  {
    projectId: 1,
    projectName: "taptaptask",
    projectDescription:
      "taptaptask is a task management tool for phase-based projects.",
    techStack: [
      "Typescript",
      "React",
      "Redux Toolkit",
      //   "RTK Query",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Css + Sass",
      "Vite",
    ],
    siteLink: "https://www.taptaptask.com",
    imageLink: "/taptaptask.webp",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://www.github.com/_jonlewis",
      },
      {
        name: "Back-End",
        link: "https://www.github.com/_jonlewis",
      },
    ],
  },
  {
    projectId: 2,
    projectName: "archestimator",
    projectDescription:
      "archestimator is a construction cost estimator for architects.",
    techStack: ["Typescript", "Svelte", "Css + Sass", "Rollup"],
    siteLink: "https://www.archestimator.com",
    imageLink: "/archestimator.jpeg",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://www.github.com/_jonlewis",
      },
    ],
  },
  {
    projectId: 3,
    projectName: "quicknotes",
    projectDescription: "quicknotes is a minimalist block style editor",
    techStack: [
      "Typescript",
      "React",
      "EditorJs",
      "Css + Sass",
      "Vite",
      "Firebase + Firestore",
    ],
    siteLink: "https://quicknotesbyphilip.netlify.app",
    imageLink: "/quicknotes.png",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://www.github.com/_jonlewis",
      },
    ],
  },
  // {
  //   projectId: 4,
  //   projectName: "easymoney",
  //   projectDescription: "easymoney is a finance management app",
  //   techStack: [
  //     "Typescript",
  //     "React",
  //     "EditorJs",
  //     "Css + Sass",
  //     "Vite",
  //     "Firebase + Firestore",
  //   ],
  //   siteLink: "https://quicknotesbyphilip.netlify.app",
  //   imageLink: "/easymoney.webp",
  //   gitHubLinks: [
  //     {
  //       name: "Front-End",
  //       link: "https://www.github.com/_jonlewis",
  //     },
  //   ],
  // },
  {
    projectId: 5,
    projectName: "philipjonlewis",
    projectDescription: "philipjonlewis portfolio website",
    techStack: ["Typescript", "React + NextJs", "Tailwind", "Css + Sass"],
    siteLink: "https://quicknotesbyphilip.netlify.app",
    imageLink: "/philipjonlewis.png",
    gitHubLinks: [
      {
        name: "Front-End",
        link: "https://www.github.com/_jonlewis",
      },
    ],
  },
];

const Projects: NextPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };

  return (
    <motion.div className="projects-page">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="projects-container"
      >
        {projectContent.map((project) => {
          const {
            projectId,
            projectName,
            projectDescription,
            techStack,
            gitHubLinks,
            siteLink,
            imageLink,
          } = project;
          return (
            <motion.div
              variants={item}
              className="project-card"
              key={projectId}
            >
              <div className="title-header">
                <span className="title">{projectName}</span>
                <a
                  href={siteLink}
                  target="_blank"
                  className="cursor-pointer"
                  rel="noreferrer"
                >
                  <ExternalLinkIcon height={24} />
                </a>
              </div>
              <div className="content-container">
                <div className="image-container ">
                  {" "}
                  <Image src={imageLink} layout="fill" className={"image"} />
                </div>
                <div className="description-container">
                  <p>{projectDescription}</p>
                  {/* <p>Read More...</p> */}
                </div>
                <div className="tech-stack-container">
                  {techStack.map((stack, index) => {
                    return <span key={index}>{stack}</span>;
                  })}
                </div>
              </div>
              <div className="github-link-container">
                {gitHubLinks.map((link, index) => {
                  return (
                    <div key={index}>
                      <a href={link.link} target="_blank" rel="noreferrer">
                        <GitHubIcon />
                      </a>
                      <p>{link.name}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
