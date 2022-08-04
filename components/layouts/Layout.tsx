import React, { ReactNode } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import Header from "../navigation/Header";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Meta from "./Meta";
import CustomCursor from "../branding/CustomCursor";
import { motion } from "framer-motion";
import MobileNavbar from "../navigation/MobileNavbar";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ToastContainer />

      <Meta />
      <div className=" ">
        <Header />
        <Navbar />

        <main className="container">{children}</main>

        <MobileNavbar />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
