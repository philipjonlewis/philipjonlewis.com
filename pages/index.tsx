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
  const openPosition = useRef() as any;

  useEffect(() => {
    const a1 = annotate(myName.current, {
      type: "underline",
      padding: 1,
      // color: "red",
      strokeWidth: 1,
    });
    const a2 = annotate(myArchitect.current, {
      type: "bracket",
      brackets: ["top", "bottom"],
      // padding: 1,
      // color: "green",
      strokeWidth: 1,
    });
    const a3 = annotate(myDesigner.current, {
      type: "circle",
      padding: 5,
      // color: "yellow",
      strokeWidth: 1,
    });
    const a4 = annotate(myEngineer.current, {
      type: "box",
      // color: "blue",
      strokeWidth: 1,
    });
    const a5 = annotate(openPosition.current, {
      type: "bracket",
      brackets: ["left", "right"],
      // padding: 1,
      // color: "green",
      strokeWidth: 1,
    });

    const ag = annotationGroup([a2, a3, a4, a1, a5]);

    setTimeout(() => {
      ag.show();
    }, 1000);
  }, []);

  return (
    <div className=" w-full py-36">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.5 } },
        }}
        className=" h-2/3 flex flex-col justify-center align-start  "
      >
        <div className="mb-4">
          <p className="text-3xl font-sans font-semibold">
            I&#39;m an <span ref={myArchitect}> architect</span>, a{" "}
            <span ref={myDesigner}> designer</span>, and a{" "}
            <span ref={myEngineer}> software engineer</span>
            <br />
            focused on digital product design and development.
          </p>
        </div>

        <div className="mb-4">
          <span className="text-lg font-semibold">
            My name is <span ref={myName}> Philip Lewis</span> and I love
            challenges and building great things.
          </span>
        </div>

        <div className="mb-12 text-sm ">
          <span className=" font-normal">
            one man team behind{" "}
            <a
              href="https://www.westxdx.com"
              className="dark:text-blue-500 text-orange-700"
            >
              westxdx,
            </a>{" "}
            a manila based web design and development studio.
          </span>
          <br />
          <p className=" font-normal">
            also building a project management SaaS,{" "}
            <a
              href="https://www.taptaptask.com"
              className="dark:text-blue-500 text-orange-700"
            >
              taptaptask
            </a>{" "}
            and an architectural cost estimator,{" "}
            <a
              href="https://www.archestimator.com"
              className="dark:text-blue-500 text-orange-700"
            >
              archestimator.
            </a>{" "}
          </p>
        </div>
        <div className="mb-4 w-fit">
          <p className="text-sm " ref={openPosition}>
            I&#39;m currently looking for a web development role in the fields
            of construction, healthcare, education and finance.
          </p>
        </div>
        <div className="flex flex-row justify-start gap-2 items-center w-1/3 h-16 text-sm ">
          <a className="py-4 px-8 rounded-md cursor-pointer border bg-orange-600 hover:bg-orange-500 text-white border-orange-500  dark:border-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 ">
            <p className="font-semibold">Let&apos;s Work Together!</p>
          </a>
          {/* <a className="px-4 py-4 rounded-md cursor-pointer bg-orange-100 border border-orange-500 text-orange-500">
            <p>Download Resume</p>
          </a> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
