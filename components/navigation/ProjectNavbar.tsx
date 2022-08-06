import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const ProjectNavbar = () => {
  const router = useRouter();
  const [activePath, setActivePath] = useState("");
  // if (router.asPath.includes("architecture")) {
  //   console.log(router.asPath.split("/"));
  // }

  useEffect(() => {
    console.log(router.asPath.split("/")[2]);
    setActivePath(router.asPath.split("/")[2]);
  }, [router.asPath]);

  return (
    <div className="project-navbar-container">
      <Link href={"/projects/branding"}>
        <div
          className={
            activePath == "branding" ? "active-sub-nav-link" : "sub-nav-link"
          }
        >
          Branding{" "}
          <span className="hidden md:inline-block"> & Graphic Design</span>
        </div>
      </Link>

      <Link href={"/projects/architecture"}>
        <div
          className={
            activePath == "architecture"
              ? "active-sub-nav-link"
              : "sub-nav-link"
          }
        >
          Architecture{" "}
          <span className="hidden md:inline-block"> & Interiors</span>
        </div>
      </Link>

      <Link href={"/projects/fullstack"}>
        <div
          className={
            activePath == "fullstack" ? "active-sub-nav-link" : "sub-nav-link"
          }
        >
          Full-Stack Development
        </div>
      </Link>
    </div>
  );
};
