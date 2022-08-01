import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { projectContent } from "../../../db/projects/software/softwareProjects";
import type { ProjectContentFormat } from "../../../db/projects/software/softwareProjects";
import ReactMarkdown from "react-markdown";
import ProjectsLayout from "../../../components/layouts/ProjectsLayout";
const Post = ({ projectData }) => {
  // const router = useRouter();
  // const { projectName, projectDescription } = projectData;
  // return (
  //   <div>
  //     <button onClick={() => router.back()}>Go Back</button>
  //     <p>Project Name : {projectName}</p>
  //     <p>Project Description : {projectDescription}</p>
  //     <ReactMarkdown># Hello, *world*!</ReactMarkdown>
  //   </div>
  // );
};

export default Post;

// export async function getStaticPaths() {
//   const paths = projectContent.map((project) => {
//     return { params: { projectId: project.projectId.toString() } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const projectId = context.params.projectId;
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/projects/software/${projectId}`
//   );
//   const data = await res.json();

//   return {
//     props: { projectData: data.payload },
//   };
// }
