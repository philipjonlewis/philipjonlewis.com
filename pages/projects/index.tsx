/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { GitHubIcon } from "../../components/branding";
import Image from "next/image";
const Projects: NextPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };

  return (
    <motion.div className="mt-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="projects-container"
      >
        <motion.div
          variants={item}
          className=" h-fit bg-slate-100 transition rounded-md p-1 hover:shadow-md flex flex-col justify-between "
        >
          <div className="flex flex-row justify-between px-2 py-4 border-b-[1px] border-slate-200">
            <span className="text-xl font-semibold">taptaptask</span>
            <a href="https://www.taptaptask.com" className="cursor-pointer">
              <ExternalLinkIcon height={24} />
            </a>
          </div>
          <div className="h-full py-2 flex flex-col justify-between">
            <div className="image-container ">
              {" "}
              <Image src="/taptaptask.webp" layout="fill" className={"image"} />
            </div>
            <div className="mb-4 p-2">
              <p className="text-sm ">
                taptaptask is a task management tool for phase-based projects.
              </p>
              <p className="text-right text-sm mt-2">Read More...</p>
            </div>
            <div className="text-xs font-semibold w-full flex gap-1  ">
              <p className="bg-slate-200 inline-block px-2 py-1 rounded-2xl">
                React
              </p>
              <p className="bg-slate-200 inline-block px-2 py-1 rounded-2xl">
                Node
              </p>
              <p className="bg-slate-200 inline-block px-2 py-1 rounded-2xl">
                Express
              </p>
              <p className="bg-slate-200 inline-block px-2 py-1 rounded-2xl">
                Scss
              </p>
              <p className="bg-slate-200 inline-block px-2 py-1 rounded-2xl">
                Vite
              </p>
            </div>
          </div>
          <div className="px-2 py-1 flex justify-end ">
            {/* <p className="text-xs mr-1">See The Project on Github</p> */}
            <a href="http://www.github.com/_jonlewis">
              <GitHubIcon />
            </a>
          </div>
        </motion.div>
        {/* <motion.div variants={item} className="project-card">
          archestimator
        </motion.div>
        <motion.div variants={item} className="project-card">
          quicknotes
        </motion.div>
        <motion.div variants={item} className="project-card">
          easymoney
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
