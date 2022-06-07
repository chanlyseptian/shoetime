import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarHome, Icons } from "../";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import { login } from "../../features/auth/authAction";
import { Loading } from "../";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      Swal.fire(
        "User is not found",
        "Enter correct email and password",
        "error"
      );
    }

    if (isSuccess && user) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      navigate("/shop");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // useEffect(() => {
  //   user && navigate("/");
  // }, [user, navigate]);

  const submitHandler = (e) => {
    dispatch(login(formData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavbarHome />
      <Icons />
      <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl relative flex flex-col justify-center space-y-1 sm:space-y-20 md:space-y-0 sm:flex-row">
        <div className="w-full h-96 ">
          <img src="assets/login.png" alt="" />
        </div>
        <div className="w-full h-[450px] sm:h-[520px] bg-white flex items-center justify-center flex-col rounded-lg ">
          <h1 className="text-4xl text-primary font-bold z-10">
            Welcome Back !
          </h1>
          <h1 className="text-baseline text-red-400 m-7">
            Please log in into your account
          </h1>
          <form action="">
            <div className="flex flex-col w-[300px]">
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                onChange={(e) =>
                  setFormData({ ...formData, userEmail: e.target.value })
                }
                placeholder="Enter your email"
                className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="userPassword"
                name="userPassword"
                onChange={(e) =>
                  setFormData({ ...formData, userPassword: e.target.value })
                }
                placeholder="Password"
                className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
              />

              <button
                id="submit"
                type="submit"
                onClick={(e) => submitHandler()}
                className="w-full bg-primary hover:bg-red-700 text-white p-2.5 rounded mb-4"
              >
                LOGIN
              </button>
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
