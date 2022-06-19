import React, { ReactNode } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import Header from "../navigation/Header";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Meta from "./Meta";
import CustomCursor from "../branding/CustomCursor";
import { motion } from "framer-motion";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <CustomCursor /> */}
      <Meta />
      <div className="min-h-screen min-w-screen flex flex-col">
        <Header />
        <Navbar />

        <main className="container">{children}</main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
