import { useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import { annotate, annotationGroup } from 'rough-notation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLinkIcon, ArrowRightIcon } from '@heroicons/react/solid';
import dynamic from 'next/dynamic';

// const ComputerModel = dynamic(dynamicOptions: () => import "../components/3D/ThreeJsModel")

const Home: NextPage = () => {
  const myName = useRef() as any;
  const myArchitect = useRef() as any;
  const myDesigner = useRef() as any;
  const myEngineer = useRef() as any;
  const productDesign = useRef();
  const openPosition = useRef() as any;
  const circleButton = useRef() as any;

  useEffect(() => {
    // const a1 = annotate(myName.current, {
    //   type: "underline",
    //   padding: 1,
    //   // color: "red",
    //   strokeWidth: 1,
    // });
    const a2 = annotate(myArchitect.current, {
      type: 'bracket',
      brackets: ['left', 'right'],
      // padding: 1,
      // color: "green",
      strokeWidth: 1,
    });
    const a3 = annotate(myDesigner.current, {
      type: 'circle',
      // padding: 5,
      // color: "yellow",
      strokeWidth: 1,
    });
    const a4 = annotate(myEngineer.current, {
      type: 'box',
      // color: "blue",
      strokeWidth: 1,
    });
    const a5 = annotate(openPosition.current, {
      type: 'highlight',
      // type: "bracket",
      // brackets: ["left", "right"],
      // padding: 1,
      color: 'darkorange',
      strokeWidth: 1,
    });
    const a6 = annotate(productDesign.current, {
      type: 'underline',
      // brackets: ["left", "right"],
      // padding: 1,
      // color: "green",
      strokeWidth: 1,
    });
    const a7 = annotate(myName.current, {
      type: 'bracket',
      brackets: ['top', 'bottom'],
      padding: 2,
      // color: "green",
      strokeWidth: 1,
    });
    const a8 = annotate(circleButton.current, {
      type: 'circle',
      // brackets: ["left", "right"],
      padding: 20,
      // color: "green",
      strokeWidth: 1,
    });

    const ag = annotationGroup([a2, a3, a4, a6, a7, a5]);
    // const ag = annotationGroup([a8]);

    setTimeout(() => {
      ag.show();
    }, 1000);

    return () => {
      ag.hide();
    };
  }, []);

  return (
    <div className="w-full px-4 md:px-0 mt-16 md:mt-36 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.5 } },
        }}
        className=" h-fit flex flex-col justify-center align-start"
      >
        <div className="mb-4">
          <p className="text-xl md:text-3xl font-sans font-semibold">
            I&#39;m an <span ref={myArchitect}>Architect</span>, a{' '}
            <span ref={myDesigner}>Designer</span>, and a{' '}
            <span ref={myEngineer}>Software Engineer</span>
            <br /> focused on{' '}
            <span ref={productDesign}>product design & development</span>
          </p>
        </div>

        <div className="mb-4">
          <span className="text-sm md:text-md font-semibold">
            My name is <span ref={myName}>Philip Lewis</span> and I love
            challenges and building great things.
          </span>
        </div>
        <div className="mb-12 flex justify-center items-center h-6 w-fit text-xs cursor-pointer text-orange-700 dark:text-blue-500">
          <Link href="/about">
            <div className="flex justify-center items-center">
              <p>Read more about me</p>
              <ArrowRightIcon className="h-4 w-4 ml-2 text-orange-700 dark:text-blue-500" />
            </div>
          </Link>
        </div>

        <div className="mb-12 md:mb-6 w-fit">
          <p
            className="text-sm font-semibold dark:text-slate-50"
            ref={openPosition}
          >
            I&#39;m currently looking for a position in tech.
          </p>
        </div>
        <div
          ref={circleButton}
          className="ml-auto sm:ml-0 w-fit py-4 px-8 text-sm h-12 flex justify-center items-center   rounded-md cursor-pointer border
         border-slate-800 
         bg-slate-800 
         text-white

         hover:bg-transparent 
         hover:text-slate-800 



          dark:bg-white
        dark:text-slate-800

         dark:hover:bg-transparent
         dark:hover:text-white 
          dark:border-slate-300 
       
         
         "
        >
          <Link href="/contact" className="font-semibold">
            Let&apos;s Talk!
          </Link>
          {/* <p className="font-semibold">Let&apos;s Work Together!</p> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
