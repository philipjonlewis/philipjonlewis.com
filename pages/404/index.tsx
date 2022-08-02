import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const NotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go("/");
      router.push("/");
    }, 3000);
  }, [router]);

  return <div>Error 404 : Page Not Found</div>;
};

export default NotFound;
