import React from "react";
import Navbar from "./fixed/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./fixed/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
