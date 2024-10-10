import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../all-compts/Button";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";
--------------------------------------

import { ThemeContext } from "../mode/DarkAndLight";

const Navbar = () => {
  const { theme, taggleTheme } = useContext(ThemeContext);
  return (
    <nav className="">
      <div className="py-8 dark:bg-gray-800">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="/Logo.png" alt="nav-logo" />
            </Link>
            <ul className="flex flex-col w-1/2 gap-6 font-primary text-base font-medium dark:text-white absolute top-0 left-0 bg-slate-700 h-screen">
              <li className="hover:text-brand transition-all">
                <Link>Home</Link>
              </li>
              <li className="hover:text-brand transition-all">
                <Link>Service</Link>
              </li>
              <li className="hover:text-brand transition-all">
                <Link>Feature</Link>
              </li>
              <li className="hover:text-brand transition-all">
                <Link>Product</Link>
              </li>
              <li className="hover:text-brand transition-all">
                <Link>Testimonial</Link>
              </li>
              <li className="hover:text-brand transition-all">
                <Link>FAQ</Link>
              </li>
            </ul>
            <div className="flex gap-3 items-center">
              {theme === "light" ? (
                <button
                  onClick={taggleTheme}
                  className="text-2xl bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center"
                >
                  <MdDarkMode />
                </button>
              ) : (
                <button
                  onClick={taggleTheme}
                  className="text-2xl bg-gray-500 text-white h-8 w-8 rounded-full flex items-center justify-center"
                >
                  <MdLightMode />
                </button>
              )}
              {/* <Button title="Login" />
              <Button title="Sign up" /> */}
              <FaBars className="text-2xl dark:text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
