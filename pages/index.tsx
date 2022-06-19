import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import { annotate, annotationGroup } from "rough-notation";
import SvgBackground from "../components/branding/SvgBackground";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const myName = useRef() as any;
  const myArchitect = useRef() as any;
  const myDesigner = useRef() as any;
  const myEngineer = useRef() as any;

  useEffect(() => {
    const a1 = annotate(myName.current, {
      type: "underline",
      padding: 1,
    });
    const a2 = annotate(myArchitect.current, {
      type: "bracket",
      brackets: ["top", "bottom"],
      padding: 1,
    });
    const a3 = annotate(myDesigner.current, {
      type: "circle",
      padding: 5,
    });
    const a4 = annotate(myEngineer.current, {
      type: "box",
    });

    const ag = annotationGroup([a2, a3, a4, a1]);

    setTimeout(() => {
      ag.show();
    }, 500);
  }, []);

  return (
    <div className=" w-full py-64">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.5 } },
        }}
        className="  w-1/2 h-2/3 flex flex-col justify-center align-start  "
      >
        <div className="mb-4">
          <p className="text-3xl font-sans font-semibold">
            I&#39;m an <span ref={myArchitect}> architect</span>, a{" "}
            <span ref={myDesigner}> designer</span>, and a{" "}
            <span ref={myEngineer}> software engineer</span>
            focused on digital product design and development.
          </p>
        </div>

        <div className="mb-4">
          <span className="text-base">
            My name is <span ref={myName}> Philip Lewis</span> and I like
            building great things.
          </span>
        </div>

        {/* <div>
            <span className="text-sm font-normal">
              I started a manila based design studio,{" "}
              <a
                href="https://www.westxdx.com"
                className="dark:text-yellow-500 text-blue-700"
              >
                westxdx
              </a>
              .
            </span>
            <br />
            <p className="text-sm font-normal">
              currently building a project management SaaS,{" "}
              <a
                href="https://www.taptaptask.com"
                className="dark:text-yellow-500 text-blue-700"
              >
                taptaptask
              </a>{" "}
              <br />
              and an architectural cost estimator,{" "}
              <a
                href="https://www.archestimator.com"
                className="dark:text-yellow-500 text-blue-700"
              >
                archestimator
              </a>{" "}
            </p>
          </div> */}
      </motion.div>
    </div>
  );
};

export default Home;
