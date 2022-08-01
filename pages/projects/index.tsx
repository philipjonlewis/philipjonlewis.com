/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import ProjectsLayout from "../../components/layouts/ProjectsLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";

const index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/projects/software");
  }, [router]);

  return <></>;
};

export default index;
