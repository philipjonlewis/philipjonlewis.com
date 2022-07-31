/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { GitHubIcon } from "../../../components/branding";
import Image from "next/image";
import Link from "next/link";

import type { ProjectContentFormat } from "../../../types/projects/software/softwareProjectTypes";
import ProjectsLayout from "../../../components/layouts/ProjectsLayout";

const Projects: NextPage = ({
  projectList,
}: {
  projectList: ProjectContentFormat[];
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      // transition: {
      //   staggerChildren: 0.5,
      // },
    },
  };

  const item = {
    // hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      // y: 0,
      // transition: { type: "spring" },
    },
  };

  // const [projectList, setProjectList] = useState<ProjectContentFormat[]>([]);

  // const getProjectData = async () => {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_URL}/api/projects/software`
  //   );
  //   const data = await res.json();
  //   setProjectList(await data.payload);
  // };

  // useEffect(() => {
  //   getProjectData();
  // }, []);

  return (
    <motion.div className="projects-page">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="projects-container"
      >
        {projectList?.map((project: ProjectContentFormat) => {
          const {
            projectId,
            projectName,
            projectDescription,
            techStack,
            gitHubLinks,
            siteLink,
            imageLink,
            status,
          }: ProjectContentFormat = project;
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
                  <div
                    className="project-status"
                    title="Project Status
                  "
                  >
                    <p>{status}</p>{" "}
                  </div>
                  <Image src={imageLink} layout="fill" className={"image"} />
                </div>
                <div className="description-container">
                  <p>{projectDescription}</p>
                  {/* <p>Read More...</p> */}
                </div>

                <div className="page-link-container">
                  <Link href={`/projects/software/${projectId}`}>
                    <span>
                      <p>Read More</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </Link>
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

export async function getStaticProps(context: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/software`
  );
  const data = await res.json();

  return {
    props: { projectList: await data.payload },
  };
}

export default Projects;
