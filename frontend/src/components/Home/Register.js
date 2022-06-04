import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarHome, Icons } from "../";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import { register } from "../../features/auth/authAction";
import { Loading } from "../";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      Swal.fire("Please enter valid data", "data must be valid", "warning");
    }

    if (isSuccess) {
      Swal.fire("Successfully registered", "You can login now", "success");
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // useEffect(() => {
  //   user && navigate("/shop");
  // }, [user, navigate]);

  const submitHandler = (e) => {
    dispatch(register(formData));
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
          <img src="assets/register.png" alt="" className="sm:ml-24 sm:mt-8" />
        </div>
        <div className="w-full h-[500px] sm:h-[550px] bg-white flex items-center justify-center flex-col rounded-lg">
          <h1 className="text-4xl text-primary font-bold relative z-10">
            Get's started !
          </h1>
          <h1 className="text-baseline text-red-400 m-7">Create an account</h1>
          <form action="">
            <div className="flex flex-col w-[300px]">
              <label htmlFor="">Name</label>
              <input
                type="text"
                id="userName"
                name="userName"
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
                placeholder="Enter your Name"
                className="bg-slate-100 mb-4 p-3 rounded focus:outline-none"
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
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
                type="submit"
                onClick={(e) => submitHandler()}
                className="w-full bg-primary hover:bg-red-700 text-white p-2.5 rounded mb-4"
              >
                REGISTER
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-400">
            Have an account ?
            <Link
              to="/login"
              className="text-primary border-b-2 border-red-300 hover:text-red-700 hover:border-red-700 ml-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
