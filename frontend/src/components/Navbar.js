import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 xl:px-0">
      <div className="flex items-center relative">
        <a href="#">
          <img src="assets/shoe.png" alt="logo" className="h-20 w-20 sm:w-24 sm:h-24" />
        </a>
        <a href="#" className="hidden sm:block text-primary -ml-2 logo-name text-xl">Shoe Time</a>
      </div>
      <div className="">
        <ul className="flex space-x-3">
          <li>
            <a href="#" className="hover:text-primary">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">Shop</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary mr-3 sm:mr-0">About</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center relative ">
        <HiOutlineSearch className="absolute ml-[73px]"/>
        <ul className="flex space-x-3">
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="w-24 placeholder:text-xs px-2 py-1 rounded focus:outline-none focus:ring"
            />
          </li>
          <li className="flex items-center">
            <a href="" className="hover:text-primary md:ml-3">
              <FaUserAlt/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
