import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const DesignStack = () => {
  return (
    <>
      <div className="text-2xl font-bold mb-4  text-slate-600 dark:text-slate-200">
        <p>Other Skills</p>
      </div>
      {/* tech stack container */}
      <div className="tech-stack ">
        {/* Primary Tech Stack */}
        <div className="primary mb-4  md:pb-2">
          <p className="text-base font-semibold mb-2 text-slate-500 dark:text-slate-300 ">
            Misc
          </p>
          <div className="text-sm ml-2">
            <ul>
              <li className="text-sm font-normal text-sky-600 dark:text-orange-300">
                Graphic Design
              </li>
              <ul className="ml-2">
                <li>&#8250; Photoshop </li>
                <li>&#8250; Illustrator </li>
                <li>&#8250; InDesign </li>
              </ul>
              <li className="text-sm font-normal mt-2 text-sky-600 dark:text-orange-300">
                UX & UI
              </li>
              <ul className="ml-2">
                <li>&#8250; Figma</li>
                <li>&#8250; Adobe XD</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-sky-600 dark:text-orange-300">
                Office
              </li>
              <ul className="ml-2">
                <li>&#8250; MS Word</li>
                <li>&#8250; MS Excel</li>
                <li>&#8250; MS Powerpoint</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-sky-600 dark:text-orange-300">
                Project Management
              </li>
              <ul className="ml-2">
                <li>&#8250; asana</li>
              </ul>
              <li className="text-sm font-normal mt-2 text-sky-600 dark:text-orange-300">
                Architecture
              </li>
              <ul className="ml-2">
                <li>&#8250; AutoCAD</li>
                <li>&#8250; SketchUp</li>
                <li>&#8250; Vray</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* End of Primary Tech Stack */}
        {/* Secondary Tech Stack */}
      </div>
    </>
  );
};

export default DesignStack;
