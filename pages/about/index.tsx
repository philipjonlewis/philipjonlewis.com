import React, { useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { annotate, annotationGroup } from 'rough-notation';

import TechStack from '../../components/pageComponents/about/TechStack';
import DesignStack from '../../components/pageComponents/about/DesignStack';
import { ExternalLinkIcon, DownloadIcon } from '@heroicons/react/solid';
import DownloadCV from '../../components/pageComponents/about/DownloadCV';
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
        className="px-4 md:p-0 border-b-[1px] md:border-b-0 md:w-1/3 md:border-r-[1px] md:pr-4 mb-4 "
      >
        <div className="text-2xl font-bold mb-4 text-slate-600 dark:text-slate-200">
          <p>About Me</p>
        </div>
        <div className="text-sm mb-4 ">
          <p>
            Hello 👋, <br /> My name is{' '}
            <span className="font-semibold text-lime-600 dark:text-lime-500">
              Philip Lewis
            </span>
            .
          </p>
          <br />
          <p>
            I&#39;m a highly skilled and driven architect, a designer and a{' '}
            <span className="font-semibold text-amber-600 dark:text-amber-500 pr-1">
              self-taught developer
            </span>
            With over six years of experience in the Architecture, Engineering
            and Construction (AEC) industry, I have honed my ability to analyze
            and solve complex problems.
          </p>
          <br />
          <p>
            My proficiency in software engineering has enabled me to build
            front-end and back-end software with technical competence.
          </p>
          <br />
          <p>
            {' '}
            As a licensed architect, I have effectively managed the design and
            production of multiple projects, excelling in client presentations
            and coordination with engineers and suppliers.
          </p>
          <br />
          <p>
            My primary tech stack is MERN (MongoDB, Express, React, and Node
            with TypeScript) and I am comfortable working within the
            TypeScript/JavaScript ecosystem. I am always eager to further my
            growth as a multi-disciplinary developer and team player, and I am
            currently self-studying advanced coding topics and exploring
            blockchain and mobile app development. If you&apos;re looking for a
            dedicated and talented developer, look no further than me.
          </p>
          <br />
          <p>
            Through my experience and dedication, I have developed a strong
            skill set in team collaboration and{' '}
            <span className="font-semibold text-emerald-600 dark:text-emerald-500">
              project management.
            </span>{' '}
            I approach each project with a{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-500">
              strategic mindset
            </span>{' '}
            and a focus on organization and efficiency.
          </p>
          <br />
          <p>
            My innate ability to be{' '}
            <span className="font-semibold text-cyan-600 dark:text-cyan-500">
              pragmatic and methodical
            </span>{' '}
            , from the initial planning stages to successful execution and
            documentation, allows me to consistently deliver high-quality
            results.
          </p>
          <br />
          <p>
            I take pride in my ability to lead and be an effective team player,
            making sure that every project I am involved in runs smoothly and
            successfully.
          </p>
          <br />
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
