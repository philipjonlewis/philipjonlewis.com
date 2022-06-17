import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

const Navbar = ({ title }) => {
  const router = useRouter();
  const { asPath } = useRouter();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Head>
        <title>Philip Lewis Portfolio</title>
        <meta name="keywords" content="Developer" />
      </Head>

      <nav className={styles.navbarContainer}>
        <Image src="/logo.png" width={128} height={77} alt="logo" />

        <h1>Navbar</h1>

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
