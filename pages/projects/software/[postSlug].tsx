import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const SoftwarePost = ({
  postSlug,
  frontMatter: { projectName, projectDescription },
  content,
}) => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <button onClick={() => router.back()}>Go Back</button>
      <div>{postSlug}</div>
      <div>{projectName}</div>
      <div>{projectDescription}</div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default SoftwarePost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("db/projects/software"));

  const paths = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    return {
      params: { postSlug: slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { postSlug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("db/projects/software", postSlug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: { postSlug, frontMatter, content },
  };
}
