/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import UtilitiesNavbar from "../../../components/navigation/UtilitiesNavbar";
import { toast } from "react-toastify";

const Architecture = ({ imagePaths }) => {
  // useEffect(() => {
  //   toast.warning("🏗️ - This section is under construction", {
  //     position: "top-center",
  //     autoClose: 10000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }, []);

  return (
    <div>
      <div className="branding-container">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="show"
          className="branding-grid-container"
        >
          {imagePaths.map((image, index) => {
            // const imageLink = image.replace(".jpg", "");
            return (
              <div className="branding-thumbnail-container" key={index}>
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
