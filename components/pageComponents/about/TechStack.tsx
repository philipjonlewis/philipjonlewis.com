import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const TechStack = () => {
  return (
    <>
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
          <div className="text-sm ml-2">
            <ul>
              <li className="text-sm font-normal text-teal-600 dark:text-red-300">
                Front-End
              </li>
              <ul className="ml-2">
                <li>&#8250; React </li>
                <li>&#8250; Next.js</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                Back-End
              </li>
              <ul className="ml-2">
                <li>&#8250; Node.js</li>
                <li>&#8250; Express.js</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                Database
              </li>
              <ul className="ml-2">
                <li>&#8250; MongoDB - NoSQL</li>
                <li>&#8250; Redis</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                CMS
              </li>
              <ul className="ml-2">
                <li>&#8250; Strapi</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                API
              </li>
              <ul className="ml-2">
                <li>&#8250; REST / RESTful</li>
                <li>&#8250; GraphQL</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                Language
              </li>
              <ul className="ml-2">
                <li>&#8250; Javascript + Typescript</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                Styling
              </li>
              <ul className="ml-2">
                <li>&#8250; CSS + Sass</li>
                <li>&#8250; Tailwind</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-teal-600  dark:text-red-300">
                Others
              </li>
              <ul className="ml-2">
                <li>&#8250; Google Firebase</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* End of Primary Tech Stack */}
        {/* Secondary Tech Stack */}
        <div className="secondary mb-2  md:pb-2">
          <p className="text-base font-semibold mb-2 text-slate-500 dark:text-slate-300">
            Secondary Stack
          </p>
          <div className="text-sm ml-2">
            <ul>
              <li className="text-sm font-normal mt-2 text-teal-600 dark:text-red-300">
                Front-End
              </li>
              <ul className="ml-2">
                <li>&#8250; Svelte</li>
                <li>&#8250; Gatsby</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
