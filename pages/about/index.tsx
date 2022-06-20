import React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
const About: NextPage = () => {
  const segment = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start md:mt-8">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        variants={segment}
        className="px-4 md:p-0 md:w-1/3 md:border-r-[1px] md:pr-4"
      >
        <div className="text-2xl font-bold mb-4 text-slate-600 dark:text-slate-200">
          <p>About Me</p>
        </div>
        <div className="text-sm mb-4 ">
          <p>
            Hello 👋, <br /> My name is Philip Lewis.
          </p>
          <br />
          <p>
            I'm an architect, a designer and a self-taught software engineer
            based in manila. I'm motivated by meaningful challenges and inspired
            by building technology that helps people.
          </p>
          <br />
          <p>
            I started my own architecture design studio in 2017. Completed
            projects under my practice range from commercial, office interiors,
            residential & planning projects. Services provided were from, but
            not limited to, architectural design to project management.
          </p>
          <br />
          <p>
            After practicing for 5 years, I decided to move forward from my
            studio and challenge myself even more. Diving into tech was
            definitely challenging but not impossible. I started learning
            programming a year ago and have been building projects ever since.{" "}
            <a
              className="text-red-700 dark:text-teal-300"
              href="https://www.taptaptask.com"
            >
              taptaptask
            </a>
            , a phase-based project & task management app &{" "}
            <a
              className="text-red-700 dark:text-teal-300"
              href="https://www.archestimator.com"
            >
              archestimator
            </a>
            , a cost estimator for architects.
          </p>
          <br />
          <p>
            From my background, I have built myself to be a strategic and
            organized person. In any project, I take pride in being thorough in
            planning to execution and documentation.
          </p>
          <br />
          <p>
            I&#39;m currently looking for a software engineering position in the
            fields of analytics, healthcare, education or finance.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        variants={segment}
        className="px-4 md:p-0 md:w-fit md:px-6 md:border-r-[1px]"
      >
        <div className="text-2xl font-bold mb-4  text-slate-600 dark:text-slate-200">
          <p>Tech Stack</p>
        </div>
        {/* tech stack container */}
        <div className="tech-stack ">
          {/* Primary Tech Stack */}
          <div className="primary mb-4 md:border-b-[1px] md:pb-2">
            <p className="text-base font-semibold mb-2 text-slate-500 dark:text-slate-300 ">
              Primary - MERN
            </p>
            <div className="text-sm ml-4">
              <ul>
                <li className="text-sm font-normal text-teal-600 dark:text-red-300">
                  Front-End
                </li>
                <ul className="ml-4">
                  <li>&gt; React </li>
                  <li>&gt; Next.js</li>
                </ul>
                <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                  Back-End
                </li>
                <ul className="ml-4">
                  <li>&gt; Node.js</li>
                  <li>&gt; Express.js</li>
                </ul>
                <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                  Database
                </li>
                <ul className="ml-4">
                  <li>&gt; MongoDB - NoSQL</li>
                  <li>&gt; Redis</li>
                </ul>
                <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                  Language
                </li>
                <ul className="ml-4">
                  <li>&gt; Javascript + Typescript</li>
                </ul>
                <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                  Styling
                </li>
                <ul className="ml-4">
                  <li>&gt; CSS + Sass</li>
                  <li>&gt; Tailwind</li>
                </ul>
              </ul>
            </div>
          </div>
          {/* End of Primary Tech Stack */}
          {/* Secondary Tech Stack */}
          <div className="secondary mb-4  md:pb-2">
            <p className="text-base font-semibold mb-2 text-slate-500 dark:text-slate-300">
              Secondary Stack
            </p>
            <div className="text-sm ml-4">
              <ul>
                <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                  Front-End
                </li>
                <ul className="ml-4">
                  <li>&gt; Svelte</li>
                  <li>&gt; Gatsby</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* tech stakc container */}

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }}
        variants={segment}
        className="px-4 md:px-6 md:w-fit md:border-r-[1px] md:mr-4 flex-1"
      >
        <div className="mb-4 border-b-[1px]">
          <div className="text-lg font-normal mb-4 text-red-600 dark:text-indigo-400">
            <p>Design</p>
          </div>

          <div className="text-sm mb-4 ">
            <p>I have always believed that design is an</p>
          </div>
        </div>
        <div className="mb-4 border-b-[1px]">
          <div className="text-lg font-normal mb-4 text-red-600 dark:text-indigo-400">
            <p>Egineering</p>
          </div>

          <div className="text-sm mb-4 ">
            <p>I have always believed that design is an</p>
          </div>
        </div>
        <div className="mb-4 border-b-[1px]">
          <div className="text-lg font-normal mb-4 text-red-600 dark:text-indigo-400">
            <p>Leadership</p>
          </div>

          <div className="text-sm mb-4 ">
            <p>I have always believed that design is an</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
