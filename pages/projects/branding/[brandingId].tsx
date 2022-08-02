import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import SwiperSlider from "../../../components/carousel/SwiperSlider";
const ArchitecturePage = ({
  brandingId,
  frontMatter: { projectName, imageLink },
  content,
}) => {
  console.log(brandingId);
  return (
    <div className="architecture-page">
      <div className="slider-container">
        {" "}
        <SwiperSlider imageList={[imageLink]} />
      </div>
      <div className="content-container">
        <p>Project Name : {projectName}</p>
        {/* <p>Location : {location}</p> */}
      </div>
    </div>
  );

  return <p>Hello</p>;
};

export default ArchitecturePage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("db/projects/branding"));

  const paths = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    return {
      params: { brandingId: slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { brandingId } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("db/projects/branding", brandingId + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: { brandingId, frontMatter, content },
  };
}
