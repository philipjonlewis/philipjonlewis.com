import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import Image from "next/image";

import ReactMarkdown from "react-markdown";
import SwiperSlider from "../../../components/carousel/SwiperSlider";
const SoftwarePost = ({
  postSlug,
  frontMatter: { projectName, projectDescription },
  content,
}) => {
  const router = useRouter();
  return (
    <div className="fullstack-page">
      {/* <button onClick={() => router.back()}>Go Back</button> */}
      <div className="slider-container">
        <SwiperSlider
          imageList={[
            "/images/projects/fullstack/archestimator.png",
            "/images/projects/fullstack/authserver.png",
            "/images/projects/fullstack/philipjonlewis.png",
            "/images/projects/fullstack/quicknotes.png",
            "/images/projects/fullstack/taptaptask.png",
            "/images/projects/fullstack/giphy.gif",
          ]}
        />
      </div>
      <div className="content-container">
        <div>{postSlug}</div>
        <div>{projectName}</div>
        <div>{projectDescription}</div>
        <ReactMarkdown>{content}</ReactMarkdown>
        <p>lorem500</p>
      </div>
    </div>
  );
};

export default SoftwarePost;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("db/projects/fullstack"));

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
    path.join("db/projects/fullstack", postSlug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: { postSlug, frontMatter, content },
  };
}
