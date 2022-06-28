/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { GitHubIcon } from "../../components/branding";
import Image from "next/image";

const Projects: NextPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projectContent = [
    {
      projectId: 1,
      projectName: "taptaptask",
      projectDescription:
        "taptaptask is a task management tool for phase-based projects.",
      techStack: [
        "React",
        "Redux Toolkit",
        "RTK Query",
        "Node",
        "Express",
        "MongoDB",
        "Mongoose",
        "Scss",
        "Vite",
      ],
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
  ];

  return (
    <motion.div className="mt-10">
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
          } = project;
          return (
            <motion.div
              variants={item}
              className="project-card"
              key={projectId}
            >
              <div className="title-header">
                <span className="title">{projectName}</span>
                <a href="https://www.taptaptask.com" className="cursor-pointer">
                  <ExternalLinkIcon height={24} />
                </a>
              </div>
              <div className="content-container">
                {/* <div className="image-container ">
                  {" "}
                  <Image
                    src="/taptaptask.webp"
                    layout="fill"
                    className={"image"}
                  />
                </div> */}
                <div className="description-container">
                  <p>{projectDescription}</p>
                  <p>Read More...</p>
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
                      <a href={link.link}>
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
