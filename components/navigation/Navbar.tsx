import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { asPath } = useRouter();

  console.log(router.pathname);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 h-16 rounded dark:bg-gray-800 flex">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com" className="flex items-center">
          {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Philip Jon Lewis
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="flex items-center justify-center h-full gap-2">
          <Link href="/">
            <a
              className={router.pathname == "/" ? "active-navlink" : "nav-link"}
            >
              Home
            </a>
          </Link>

          <Link href="/about">
            <a
              className={
                router.pathname == "/about" ? "active-navlink" : "nav-link"
              }
            >
              About
            </a>
          </Link>

          <Link href="/articles">
            <a
              className={
                router.pathname == "/articles" ? "active-navlink" : "nav-link"
              }
            >
              Articles
            </a>
          </Link>

          <Link href="/projects">
            <a
              className={
                router.pathname == "/projects" ? "active-navlink" : "nav-link"
              }
            >
              Projects
            </a>
          </Link>

          <Link href="/contact">
            <a
              className={
                router.pathname == "/contact" ? "active-navlink" : "nav-link"
              }
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
