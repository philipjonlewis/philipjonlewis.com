import React, { ReactNode } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
