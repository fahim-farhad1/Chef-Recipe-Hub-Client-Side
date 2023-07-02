import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>About Me</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Skills</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>Resume</NavLink>
    </>
  );

  return (
    <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30  bg-black text-white">
      {/* <div className=""> */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
        <a className="text-2xl font-bold">
            Fah<span className="text-orange-700">i</span>m
          </a>
        </div>
        {/* <div className="flex"> */}
        {/* <div> */}
        {/* </div> */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
        {/* </div> */}
      </div>
    // </div>
  );
};

export default Navbar;
