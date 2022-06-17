import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((project: { id: { toString: () => any } }) => {
    return {
      params: { softwareProjectId: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: {
  params: { softwareProjectId: any };
}) => {
  const { softwareProjectId } = context.params;

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + softwareProjectId
  );
  const data = await res.json();

  return {
    props: { project: data },
  };
};

const SoftwareProjectPage = (children: any) => {
  const { project } = children;

  return (
    <div>
      Software Project Page
      <p> {project.name}</p>
      <p>{project.email}</p>
      <p>{project.website}</p>
    </div>
  );
};

export default SoftwareProjectPage;
