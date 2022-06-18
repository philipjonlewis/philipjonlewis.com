import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import { annotate, annotationGroup } from "rough-notation";

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
    const a3 = annotate(myDesigner.current, { type: "circle" });
    const a4 = annotate(myEngineer.current, {
      type: "box",
    });

    const ag = annotationGroup([a1, a2, a3, a4]);
    ag.show();
  }, []);

  return (
    <div className=" w-full">
      <div className="flex flex-row justify-between my-48">
        <div className="">
          <p className="text-3xl font-sans font-semibold">
            Hi! im <span ref={myName}> Philip Lewis</span> <br />
            And i like building things.
          </p>
          <p className="text-sm mt-6">
            Im an <span ref={myArchitect}> architect</span>, a
            <span ref={myDesigner}> designer</span> and a{" "}
            <span ref={myEngineer}> software engineer</span>
          </p>
        </div>
        <div>{/* <p>This is the second container</p> */}</div>
      </div>
    </div>
  );
};

export default Home;
