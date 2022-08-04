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
  frontMatter: { projectName, projectDescription, techStack, features },
  content,
}) => {
  const router = useRouter();
  console.log(postSlug);
  return (
    <div className="fullstack-page">
      {/* <button onClick={() => router.back()}>Go Back</button> */}
      <div className="slider-container">
        <SwiperSlider
          imageList={[
            // "/images/projects/fullstack/archestimator.png",
            // "/images/projects/fullstack/authserver.png",
            // "/images/projects/fullstack/philipjonlewis.png",
            // "/images/projects/fullstack/quicknotes.png",
            `/images/projects/fullstack/${postSlug}.png`,
            // "/images/projects/fullstack/giphy.gif",
          ]}
        />
      </div>
      <div className="content-container">
        <div className="title-container">
          <p>Project Name</p>
          <p>{projectName}</p>
        </div>
        <div className="label-text-container">
          <p>Project Description</p>
          <p>{projectDescription}</p>
        </div>

        <div className="display flex">
          <div className="tech-stack-container">
            <p>Tech Stack</p>
            <ul>
              {techStack?.map((stack, index) => {
                return <li key={index}>- {stack}</li>;
              })}
            </ul>
          </div>
          <div className="features-container">
            <p className="features-title">Features</p>
            <ul>
              <li className="pb-2">
                <p className="sub-li-title">Current</p>
                {features?.current?.map((stack, index) => {
                  return <li key={index}>- {stack}</li>;
                })}
              </li>
              <li>
                <p className="sub-li-title">Upcoming</p>
                {features?.future?.map((stack, index) => {
                  return <li key={index}>- {stack}</li>;
                })}
              </li>
            </ul>
          </div>
        </div>

        {/* <ReactMarkdown>{content}</ReactMarkdown>
        <p>lorem500</p> */}
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

  const imagePaths = fs.readdirSync(
    path.join("./public/images/projects/fullstack")
  );

  console.log(imagePaths);

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: { postSlug, frontMatter, content, imagePaths },
  };
}
