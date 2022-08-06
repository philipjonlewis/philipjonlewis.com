import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SwiperSlider from "../../../components/carousel/SwiperSlider";
import { ArrowLeftIcon } from "@heroicons/react/outline";
const SoftwarePost = ({
  frontMatter: {
    projectName,
    projectDescription,
    techStack,
    features,
    carouselImages,
  },
}) => {
  const [cookieCrumbs, setCookieCrumbs] = useState("");
  const router = useRouter();

  useEffect(() => {
    const crumbs = router.asPath
      .replace("/", "")
      .split("/")
      .map((page) => page.charAt(0).toUpperCase() + page.slice(1))
      .join(" > ");
    console.log(crumbs);
    setCookieCrumbs(crumbs);
  }, []);

  const goBackPage = () => {
    router.back();
  };

  return (
    <>
      <div className="fullstack-nav">
        <div className="go-back" onClick={goBackPage}>
          <ArrowLeftIcon />
          <p>Go Back</p>
        </div>
        {/* <p>Hilo</p> */}
        <div className="crumbs-container">
          <p>{cookieCrumbs}</p>
        </div>
      </div>

      <div className="fullstack-title">
        <p>{projectName}</p>
        <p>{projectDescription}</p>
      </div>

      <div className="fullstack-page">
        <div className="slider-container">
          <SwiperSlider imageList={carouselImages} />
        </div>

        <div className="content-container">
          <div className="tech-stack-container">
            <p>Tech Stack</p>
            <ul>
              {techStack?.map((stack, index) => {
                return <li key={index}>{stack}</li>;
              })}
            </ul>
          </div>

          <div className="features-container">
            <p className="features-title">Features</p>
            <ul>
              <li className="pb-2">
                <p className="sub-li-title">Current</p>
                {features?.current?.map((stack, index) => {
                  return <li key={index}>{stack}</li>;
                })}
              </li>
              <li>
                <p className="sub-li-title">Upcoming</p>
                {features?.future?.map((stack, index) => {
                  return <li key={index}>{stack}</li>;
                })}
              </li>
            </ul>
          </div>

          {/* <ReactMarkdown>{content}</ReactMarkdown>
        <p>lorem500</p> */}
        </div>
      </div>
    </>
  );
};

export default SoftwarePost;

export const getStaticPaths: GetStaticPaths = async () => {
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
};

export const getStaticProps: GetStaticProps = ({ params: { postSlug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("db/projects/fullstack", postSlug + ".md"),
    "utf-8"
  );

  // console.log("islug", postSlug);

  // const imagePaths = fs.readdirSync(
  //   path.join("./public/images/projects/fullstack")
  // );

  // const gifNames = fs
  //   .readdirSync(path.join(`./public/images/projects/fullstack/${postSlug}`))
  //   .sort((a, b) => {
  //     return a.localeCompare(b, undefined, {
  //       numeric: true,
  //       sensitivity: "base",
  //     });
  //   });

  // console.log(gifNames);

  // const gifRoutePaths = gifNames.map((name) => {
  //   return `/images/projects/fullstack/taptaptask/${name}`;
  // });

  // console.log(gifRoutePaths);

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: { postSlug, frontMatter, content },
  };
};
