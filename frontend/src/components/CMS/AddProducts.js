import React, { useEffect, useState } from "react";
import { NavbarCMS, Icons } from "../";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const AddProducts = () => {
  const { admin } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate("/adminlogin");
    }
  }, [admin, navigate]);

  return (
    <>
      <NavbarCMS />
      <Icons />
      <div className="w-full h-auto relative">
        <h1 className="text-center text-4xl py-12 font-bold relative">
          Add <span className="text-primary">Product</span>
        </h1>
        <Link to="/products" className="absolute z-10 ml-[700px] -mt-[80px]">
          <RiArrowGoBackLine className="text-3xl text-red-400" />
        </Link>
        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl flex justify-center relative">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full justify-center flex h-screen md:h-[1200px]">
            <form action="">
              <div className="flex flex-col w-[300px] md:w-[500px]">
                <label htmlFor="">Product Name</label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Description</label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Price</label>
                <input
                  type="number"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Stock</label>
                <input
                  type="number"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Expire</label>
                <input
                  type="number"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Weight</label>
                <input
                  type="number"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Category</label>
                <input
                  type="text"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Condition</label>
                <input
                  type="text"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Total Sold</label>
                <input
                  type="number"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Rating</label>
                <input
                  type="number"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Views</label>
                <input
                  type="number"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <label htmlFor="">Product Brands</label>
                <input
                  type="text"
                  id="userPassword"
                  name="userPassword"
                  className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-red-700 text-white p-2.5 rounded mb-4 uppercase"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
