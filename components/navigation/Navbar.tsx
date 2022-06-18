import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Philip Lewis Portfolio</title>
        <meta name="keywords" content="Developer" />
      </Head>

      <nav className={styles.navbarContainer}>
        <Image src="/logo.png" width={128} height={77} alt="logo" />

        <h1 className="text-3xl font-bold underline bg-red-300 text-blue-400">
          Navbar
        </h1>

        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/articles"}>Articles</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
