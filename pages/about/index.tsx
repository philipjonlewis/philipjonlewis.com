import React, { useRef, useEffect } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { annotate, annotationGroup } from "rough-notation";

import TechStack from "../../components/pageComponents/about/TechStack";
import DesignStack from "../../components/pageComponents/about/DesignStack";
import { ExternalLinkIcon, DownloadIcon } from "@heroicons/react/solid";
import DownloadCV from "../../components/pageComponents/about/DownloadCV";
const About: NextPage = () => {
  const segment = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start md:mt-8 mb-28 md:mb-0">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        variants={segment}
        className="px-4 md:p-0 md:w-1/3 md:border-r-[1px] md:pr-4 mb-4 border-b-[1px] "
      >
        <div className="text-2xl font-bold mb-4 text-slate-600 dark:text-slate-200">
          <p>About Me</p>
        </div>
        <div className="text-sm mb-4 ">
          <p>
            Hello 👋, <br /> My name is{" "}
            <span className="font-semibold text-lime-600 dark:text-lime-500">
              Philip Lewis
            </span>
            .
          </p>
          <br />
          <p>
            I&#39;m an architect, a designer and a{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-500">
              self-taught software developer
            </span>
            . I&#39;m motivated by meaningful challenges and inspired by
            building technology that helps people.
          </p>
          <br />
          <p>
            Prior to shifting careers into tech, completed projects under my
            architectural practice range from commercial, office interiors,
            residential &#x26; planning projects. Services provided were from,
            but not limited to, architectural design to project management.
          </p>
          <br />

          <p>
            I have built myself to be a{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-500">
              strategic team player
            </span>{" "}
            and an{" "}
            <span className="font-semibold text-purple-700 dark:text-purple-500">
              organized leader. <br />
            </span>{" "}
            I take pride in being{" "}
            <span className="font-semibold text-cyan-700 dark:text-cyan-400">
              pragmatic
            </span>{" "}
            right from the beginning up to the execution and documentation of
            any project that I am involved with.
          </p>

          <br />

          <p>
            My primary tech stack is MERN (MongoDB,Express,React & Node with
            typescript. I mainly work within the typescript/javascript ecosystem
            but as a self-taught developer, should the need to learn and use
            additional languages and/or technologies arise, I wouldn&apos;t
            hesitate to take on that challenge.
          </p>

          <br />

          <p>
            I&apos;m interested in pursuing mobile app development & information
            security in the near future
          </p>
          <br />
          <p>
            It would be best to judge me as a developer through my projects:{" "}
            <span className="text-orange-700 dark:text-blue-500 inline-block">
              <a href="https://www.taptaptask.com">TapTapTask</a>
              <ExternalLinkIcon className="h-4 w-4 ml-1 inline-block " />
            </span>
            , a phase-based project &#x26; task management app and{" "}
            <span className="text-orange-700 dark:text-blue-500 inline-block">
              <a href="https://quicknotesbyphilip.netlify.app/">QuickNotes</a>
              <ExternalLinkIcon className="h-4 w-4 ml-1 inline-block " />
            </span>
            , a minimalist block style editor.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        variants={segment}
        className="stack-container"
      >
        <TechStack />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
        variants={segment}
        className="stack-container"
      >
        <DesignStack />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        variants={segment}
        className="cv-container"
      >
        <DownloadCV />
      </motion.div>
    </div>
  );
};

export default About;
