// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkAndLight from "../mode/DarkAndLight";

const Navmanu = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <nav className="py-8">
      <div className="container">
        <div className="flex justify-between">
          <Link to="/">
            <img src="/Logo.png" alt="nav-logo" />
          </Link>
          <ul
            className={`flex gap-12 font-primary text-base font-medium ${
              mode == "dark" ? "text-white" : "text-black"
            }`}
          >
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
          <div className="flex gap-3">
            <DarkAndLight />
            <Link>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navmanu;
