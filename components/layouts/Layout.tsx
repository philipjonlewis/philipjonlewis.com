import React, { ReactNode } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import Header from "../navigation/Header";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Nextjs-Dev Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen lg:container mx-auto max-w-2xl flex flex-col">

        <Header />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
