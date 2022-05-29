import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";

const NavbarHome = () => {
  return (
    <nav className="flex justify-between items-center px-4 xl:px-0 container mx-auto max-w-screen-sm sm:max-w-screen-xl">
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
      <div className="mr-3">
        <HiOutlineSearch className="absolute ml-[123px] mt-2.5 text-xl sm:ml-[195px]" />
        <ul className="flex space-x-4">
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="w-full placeholder:text-xs px-3 py-2 rounded focus:outline-none focus:ring"
            />
          </li>
        </ul>
      </div>
      <div className="flex items-center relative ">

        <ul className="flex space-x-4">
          <li className="flex items-center">
            <Link to="/shop" className="hover:text-primary">
              Shop
            </Link>
          </li>

          <li className="flex items-center text-xl ">
            <Link to="/cart" className="hover:text-primary">
              <AiOutlineShoppingCart />
            </Link>
          </li>

          <li className="flex items-center">
            <Link to="/login" className="hover:text-primary">
              <FaUserAlt />
            </Link>
          </li>

          <li className="flex items-center ">
            <IoMdLogOut className="cursor-pointer text-red-700 text-xl hover:text-primary" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarHome;
