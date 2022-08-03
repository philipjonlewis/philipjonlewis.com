/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const Architecture = ({ imagePaths }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <div className="branding-container">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="branding-grid-container"
      >
        {imagePaths.map((image, index) => {
          // const imageLink = image.replace(".jpg", "");
          return (
            <Link
              href={`/projects/branding/${image.replace(".png", "")}`}
              key={index}
            >
              <div className="branding-thumbnail-container">
                <a>
                  {/* <img
                    src={`/images/projects/branding/${image}/pure.svg`}
                    // layout="fill"
                    // objectFit="cover"
                    // //   objectFit="contain"
                    // objectPosition="center"
                    alt="image"
                    className="temp-image"
                  /> */}
                  <Image
                    src={`/images/projects/branding/thumbnails/${image}`}
                    layout="fixed"
                    height={200}
                    width={200}
                    objectFit="cover"
                    objectPosition="center"
                    alt="image"
                    className="thumb-image"
                  />
                  {/* <Image
                    src={`/images/projects/branding/${image}/colored.svg`}
                    layout="fill"
                    objectFit="cover"
                    //   objectFit="contain"
                    objectPosition="center"
                    alt="image"
                    className="brand-image"
                  /> */}
                </a>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Architecture;

export async function getStaticProps(context: any) {
  const imageFilePaths = fs.readdirSync(
    path.join("public/images/projects/branding/thumbnails")
  );

  // imageFilePaths.forEach((file) => {
  //   fs.writeFile(
  //     `db/projects/branding/${file.replace(".png", ".md")}`,
  //     `---\r\nprojectName : "${file.replace(
  //       ".png",
  //       ""
  //     )}"\r\nimageLink : "/images/projects/branding/thumbnails/${file}"\r\n---`,
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // });

  // console.log(imageFilePaths);

  // const cleanedImagedPaths = filteredImagePaths.map((fileName) => {
  //   if (fileName.includes(".jpg")) {
  //     return fileName;
  //   }
  //   return;
  // });

  return {
    props: { imagePaths: imageFilePaths },
  };
}
