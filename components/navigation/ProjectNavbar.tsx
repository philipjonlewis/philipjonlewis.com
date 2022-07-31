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
    <div className="container mt-2 pt-2 pb-2 mb-2 flex justify-start items-center gap-2 border-b-[1px] border-t-[1px] border-gray-300 dark:border-neutral-700">
      <div
        className={
          activePath == "branding" ? "active-sub-nav-link" : "sub-nav-link"
        }
      >
        <Link href={"/projects/branding"}>Branding</Link>
      </div>

      <div
        className={
          activePath == "architecture" ? "active-sub-nav-link" : "sub-nav-link"
        }
      >
        <Link href={"/projects/architecture"}>Architecture</Link>
      </div>
      <div
        className={
          activePath == "software" ? "active-sub-nav-link" : "sub-nav-link"
        }
      >
        <Link href={"/projects/software"}>Software</Link>
      </div>
    </div>
  );
};
