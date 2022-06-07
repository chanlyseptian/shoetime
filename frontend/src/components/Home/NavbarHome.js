import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  return (
    <nav className="flex justify-between items-center px-4 xl:px-0 lg:mb-10 container mx-auto max-w-screen-sm sm:max-w-screen-xl">
      <div className="flex items-center relative">
        <Link to="/">
          <img
            src="assets/shoe.png"
            alt="logo"
            className="h-20 w-20 sm:w-24 sm:h-24"
          />
        </Link>
        <Link
          to="/"
          className="hidden sm:block text-primary -ml-2 logo-name text-xl"
        >
          Shoe Time
        </Link>
      </div>
      <div className="">
        <ul className="flex space-x-3">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-primary">
              Shop
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center relative ">
        <HiOutlineSearch className="absolute ml-[73px]" />
        <ul className="flex space-x-3">
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="w-24 placeholder:text-xs px-2 py-1 rounded focus:outline-none focus:ring"
            />
          </li>
          <li className="flex items-center">
            <Link to="/login" className="hover:text-primary md:ml-3">
              <FaUserAlt />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarHome;
