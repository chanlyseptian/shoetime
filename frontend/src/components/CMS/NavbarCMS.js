import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/admin/adminAction";
import { reset } from "../../features/admin/adminSlice";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

const NavbarCMS = () => {
  const { isError, isLogout } = useSelector((state) => state.admin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/adminlogin");
  };


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
            <Link to="/admin" className="hover:text-primary">
              Order
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center relative ">
        <ul className="flex space-x-3">
          <li className="flex items-center" type="button" onClick={onLogout}>
            <Link
              to="/adminlogin"
              className="hover:text-primary md:ml-3 flex items-center"
            >
              <FiLogOut className="mr-1" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarCMS;
