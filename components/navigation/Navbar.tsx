import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const { asPath } = useRouter();

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
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center ">
          {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
          <span className="self-center text-sm font-normal whitespace-nowrap dark:text-white cursor-pointer">
            Philip Jon Lewis
          </span>
        </Link>

        <motion.div
          className="flex items-center justify-center h-full gap-2"
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
