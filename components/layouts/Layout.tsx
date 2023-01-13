import React, { ReactNode } from 'react';
import Footer from '../navigation/Footer';
import Navbar from '../navigation/Navbar';
import Header from '../navigation/Header';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Meta from './Meta';
import CustomCursor from '../branding/CustomCursor';
import { motion } from 'framer-motion';
import MobileNavbar from '../navigation/MobileNavbar';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ToastContainer />
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
