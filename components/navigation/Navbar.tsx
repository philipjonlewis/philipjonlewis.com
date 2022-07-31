import React, { useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { GitHubIcon, LinkedInIcon, TwitterIcon } from "../branding";

const Navbar = () => {
  const router = useRouter();
  const { asPath } = useRouter();
  // const logoReference = useRef() as any;

  useEffect(() => {
    // const logo = annotate(logoReference.current, {
    //   type: "highlight",
    //   color: "red",
    // });
    // logo.show();
  }, []);
  // console.log(router.pathname);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <nav className="h-12">
      <div className="h-full container flex justify-between items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="flex px-4 md:px-0"
        >
          <motion.a
            variants={item}
            target="_blank"
            href="https://github.com/philipjonlewis"
            className="mr-8 hover:text-orange-500 dark:hover:text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            <GitHubIcon />
          </motion.a>

          <motion.a
            variants={item}
            target="_blank"
            href="https://www.linkedin.com/in/philipjonlewis/"
            className="mr-8 hover:text-orange-500 dark:hover:text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            href="https://twitter.com/__jonlewis"
            className="mr-8 hover:text-orange-500 dark:hover:text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            <TwitterIcon />
          </motion.a>
        </motion.div>

        <motion.div
          className="hidden md:flex"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <Link href="/">
            <motion.a
              variants={item}
              className={router.pathname == "/" ? "active-navlink" : "nav-link"}
            >
              Home
            </motion.a>
          </Link>

          <Link href="/about">
            <motion.a
              variants={item}
              className={
                router.pathname.includes("/about")
                  ? "active-navlink"
                  : "nav-link"
              }
            >
              About
            </motion.a>
          </Link>

          <Link href="/articles">
            <motion.a
              variants={item}
              className={
                router.pathname.includes("/articles")
                  ? "active-navlink"
                  : "nav-link"
              }
            >
              Articles
            </motion.a>
          </Link>

          <Link href="/projects">
            <motion.a
              variants={item}
              className={
                router.pathname.includes("/projects")
                  ? "active-navlink"
                  : "nav-link"
              }
            >
              Projects
            </motion.a>
          </Link>

          <Link href="/contact">
            <motion.a
              variants={item}
              className={
                router.pathname.includes("/contact")
                  ? "active-navlink"
                  : "nav-link"
              }
            >
              Contact
            </motion.a>
          </Link>
          {/* <motion.a
            href="#"
            // download
            variants={item}
            className="text-sm font-medium py-3 px-6 cursor-pointer border-[1px] rounded-sm border-blue-700 text-blue-700 dark:text-yellow-500 dark:border-yellow-500 hover:text-orange-500 hover:border-orange-500 dark:hover:bg-orange-800"
          >
            Resume
          </motion.a> */}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
