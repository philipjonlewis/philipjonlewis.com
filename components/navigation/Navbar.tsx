import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { annotate, annotationGroup } from "rough-notation";

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
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="text-xs"
        >
          <motion.a
            variants={item}
            target="_blank"
            href="https://github.com/philipjonlewis"
            className="mr-8 dark:hover:text-blue-500"
            rel="noreferrer"
          >
            GitHub
          </motion.a>

          <motion.a
            variants={item}
            target="_blank"
            href="https://www.linkedin.com/in/philipjonlewis/"
            className="mr-8 dark:hover:text-blue-500"
            rel="noreferrer"
          >
            LinkedIn
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            href="https://twitter.com/__jonlewis"
            className="mr-8 dark:hover:text-blue-500"
            rel="noreferrer"
          >
            Twitter
          </motion.a>
          <motion.a
            variants={item}
            target="_blank"
            href="https://medium.com/@philipjonlewis"
            className="mr-8 dark:hover:text-blue-500"
            rel="noreferrer"
          >
            Medium
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
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
