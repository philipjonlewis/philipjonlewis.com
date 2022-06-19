import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { annotate, annotationGroup } from "rough-notation";
import { DownloadIcon } from "@heroicons/react/solid";
import { FiGithub, FiTwitter } from "react-icons/Fi";
import { RiMediumLine } from "react-icons/Ri";
import { AiOutlineLinkedin, AiOutlineMedium } from "react-icons/Ai";

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
  console.log(router.pathname);

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
    <nav className=" px-2  h-16 rounded flex">
      <div className="container flex flex-wrap justify-between items-center mx-auto  ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="text-xs h-full flex justify-center items-center"
        >
          <motion.a
            variants={item}
            target="_blank"
            href="https://github.com/philipjonlewis"
            className="mr-8 hover:text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            <FiGithub size={22} />
          </motion.a>

          <motion.a
            variants={item}
            target="_blank"
            href="https://www.linkedin.com/in/philipjonlewis/"
            className="mr-8 hover:text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            <AiOutlineLinkedin size={24} />
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            href="https://twitter.com/__jonlewis"
            className="mr-8 hover:text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            <FiTwitter size={22} />
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            href="https://medium.com/@philipjonlewis"
            className="mr-8 hover:text-blue-500 cursor-pointer"
            rel="noreferrer"
          >
            <RiMediumLine size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center h-full gap-2 ml-auto"
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
                router.pathname == "/about" ? "active-navlink" : "nav-link"
              }
            >
              About
            </motion.a>
          </Link>

          <Link href="/articles">
            <motion.a
              variants={item}
              className={
                router.pathname == "/articles" ? "active-navlink" : "nav-link"
              }
            >
              Articles
            </motion.a>
          </Link>

          <Link href="/projects">
            <motion.a
              variants={item}
              className={
                router.pathname == "/projects" ? "active-navlink" : "nav-link"
              }
            >
              Projects
            </motion.a>
          </Link>

          <Link href="/contact">
            <motion.a
              variants={item}
              className={
                router.pathname == "/contact" ? "active-navlink" : "nav-link"
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
