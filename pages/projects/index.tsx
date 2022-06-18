import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <div className="dark:bg-gray-900  dark:text-gray-100 ">
      <h1>Project</h1>
      <Link href={"/projects/software"}>Software</Link>
      <Link href={"/projects/architecture"}>Architecture</Link>

      {/* {projectList.length >= 1 &&
        projects.map((project: any) => {
          return (
            <Link key={project.id} href={`/projects/software/${project.id}`}>
              <a>
                <h3>{project.name}</h3>
              </a>
            </Link>
          );
        })} */}
    </div>
  );
};

export default Projects;
