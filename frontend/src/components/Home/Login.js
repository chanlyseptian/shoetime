import React from "react";
import { Link } from "react-router-dom";
import { NavbarHome, Icons } from "../";

const Login = () => {
  return (
    <>
      <NavbarHome />
      <Icons />
      <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl relative flex flex-col justify-center space-y-1 sm:space-y-20 md:space-y-0 sm:flex-row">
        <div className="w-full h-96 ">
          <img src="assets/login.png" alt="" />
        </div>
        <div className="w-full h-[450px] sm:h-[520px] bg-white flex items-center justify-center flex-col rounded-lg">
          <h1 className="text-4xl text-primary font-bold">Welcome Back !</h1>
          <h1 className="text-baseline text-red-400 m-7">
            Please log in into your account
          </h1>
          <form action="">
            <div className="flex flex-col w-[300px]">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
              />
            </div>
          </form>
          <p className="text-sm text-gray-400">
            Doesn't have an account ?{" "}
            <Link
              to="/register"
              className="text-primary border-b-2 border-red-300 hover:text-red-700 hover:border-red-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;