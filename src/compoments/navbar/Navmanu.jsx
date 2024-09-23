import React from "react";
import { Link } from "react-router-dom";
import DarkAndLight from "../mode/DarkAndLight";

const Navmanu = () => {
  return (
    <nav className="py-8">
      <div className="container">
        <div className="flex justify-between">
          <Link to="/">
            <img src="/Logo.png" alt="nav-logo" />
          </Link>
          <ul className="flex gap-12 font-primary text-base font-medium text-[#18191F]">
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
