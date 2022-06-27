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
    <div className=" container bg-gray-100 p-2 rounded-sm flex justify-start items-center gap-2">
      <div
        className={
          activePath == "software"
            ? "bg-gray-50 py-2 px-4 text-orange-500 text-sm"
            : "hover:bg-gray-50 py-2 px-4 text-sm"
        }
      >
        <Link href={"/projects/software"}>Software</Link>
      </div>
      <div
        className={
          activePath == "architecture"
            ? "bg-gray-50 py-2 px-4 text-orange-500 text-sm"
            : "hover:bg-gray-50 py-2 px-4 text-sm"
        }
      >
        <Link href={"/projects/architecture"}>Architecture</Link>
      </div>
    </div>
  );
};
