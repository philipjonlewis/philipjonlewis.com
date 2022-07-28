import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { projectContent } from "../../db/projects/software/softwareProjects";

const Post = () => {
  const router = useRouter();
  const { projectId } = router.query;

  console.log(projectId);

  return <div>{projectId}</div>;
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
//   const apiPath =
//     process.env.ENVIRONMENT == "production"
//       ? process.env.API_PATH_PRODUCTION
//       : process.env.API_PATH_DEVELOPMENT;

//   const projectId = context.params.projectId;
//   const res = await fetch(`${apiPath}/api/projects/software/${projectId}`);
//   const data = await res.json();

//   return {
//     props: { project: data.payload },
//   };
// }
