import React from "react";
import type { NextPage } from "next";
import {} from "next/router";

import { projectContent } from "../../db/projects/software/softwareProjects";

const Post = ({ project }) => {
  return <div>{project.projectName}</div>;
};

export default Post;

export async function getStaticPaths() {
  const paths = projectContent.map((project) => {
    return { params: { projectId: project.projectId.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId;
  const res = await fetch(
    `http://localhost:3000/api/projects/software/${projectId}`
  );
  const data = await res.json();

  return {
    props: { project: data.payload },
  };
}
