import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { projectContent } from "../../db/projects/software/softwareProjects";

const Post = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const [projectData, setProjectData] = useState([]);
  const { projectName } = projectData;

  const getProjectData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/software/${projectId}`
    );
    const data = await res.json();
    console.log(data);
    setProjectData(await data.payload);
  };

  useEffect(() => {
    console.log();
    getProjectData();
  }, []);

  return <div>{projectName}</div>;
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
