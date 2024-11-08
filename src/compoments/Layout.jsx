import React from "react";
import Navbar from "./fixed/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./fixed/Footer";
import DarkAndLight from "./mode/DarkAndLight";

const Layout = () => {
  return (
    <>
      <DarkAndLight>
        <Navbar />
        <Outlet />
        <Footer />
        <Footer />
        <Footer />
      </DarkAndLight>
    </>
  );
};

export default Layout;
