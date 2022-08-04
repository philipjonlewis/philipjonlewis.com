import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import UtilitiesNavbar from "../../../components/navigation/UtilitiesNavbar";
const Architecture = ({ imagePaths }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  return (
    <div>
      {/* <UtilitiesNavbar /> */}
      <div className="archontainer">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="architecture-grid-container"
        >
          {imagePaths.map((image, index) => {
            const imageLink = image.replace(".jpg", "");
            return (
              <div className="archi-thumbnail-container" key={index}>
                {/* <Link href={`/projects/architecture/${imageLink}`}>
                  <a> */}
                <Image
                  src={"/images/projects/architecture/thumbnails/" + image}
                  layout="fill"
                  objectFit="cover"
                  //   objectFit="contain"
                  objectPosition="center"
                  alt="image"
                />
                {/* </a>
                </Link> */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Architecture;

export async function getStaticProps(context: any) {
  const imageFilePaths = fs.readdirSync(
    path.join("public/images/projects/architecture/thumbnails")
  );

  const filteredImagePaths = imageFilePaths.filter((fileName) => {
    if (fileName.includes(".jpg")) {
      return fileName;
    }
    return;
  });

  const cleanedImagedPaths = filteredImagePaths.map((fileName) => {
    if (fileName.includes(".jpg")) {
      return fileName;
    }
    return;
  });

  return {
    props: { imagePaths: cleanedImagedPaths },
  };
}
