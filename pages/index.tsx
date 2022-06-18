import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/navigation/Footer";

import Navbar from "../components/navigation/Navbar";
import Layout from "../components/layouts/Layout";

const Home: NextPage = () => {
  return (
    // <Layout>
      <div className="dark:bg-gray-800">
        <h1 className=" dark:bg-gray-900  dark:text-gray-100 ">
          This is H1 heading
        </h1>
      </div>
    // </Layout>
  );
};

export default Home;
