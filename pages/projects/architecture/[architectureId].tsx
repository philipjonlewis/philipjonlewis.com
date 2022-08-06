import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import SwiperSlider from "../../../components/carousel/SwiperSlider";
const ArchitecturePage = ({
  architectureId,
  frontMatter: { projectName, location },
  content,
}) => {
  // console.log(architectureId);
  return (
    <div className="architecture-page">
      <div className="slider-container">
        {" "}
        <SwiperSlider
          imageList={[
            "/images/projects/architecture/thumbnails/" +
              architectureId +
              ".jpg",
          ]}
        />
      </div>

      <div className="content-container">
        <p>Project Name : {projectName}</p>
        <p>Location : {location}</p>
      </div>
    </div>
  );
};

export default ArchitecturePage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("db/projects/architecture"));

  const paths = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    return {
      params: { architectureId: slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { architectureId } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("db/projects/architecture", architectureId + ".md"),
    "utf-8"
  );

  console.log("what", gifPaths);

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: { architectureId, frontMatter, content },
  };
}
