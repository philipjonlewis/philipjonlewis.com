import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      projects: data,
    },
  };
};

const Projects: NextPage = (children) => {
  const { projects } = children as any;

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(projects);
  }, [projects]);

  return (
    <div>
      <h1>Project</h1>
      <Link href={"/projects/software"}>Software</Link>
      <Link href={"/projects/architecture"}>Architecture</Link>

      {projectList.length >= 1 &&
        projects.map((project: any) => {
          return (
            <div key={project.id}>
              <a>
                <h3>{project.name}</h3>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
