import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icons, NavbarLoginAdmin } from "../";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/admin/adminSlice";
import { login } from "../../features/admin/adminAction";
import { Loading } from "../";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    userType: "",
    userPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (isError) {
      Swal.fire(
        "User is not found",
        "Enter correct email and password",
        "error"
      );
    }

    if (isSuccess && admin) {
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
      navigate("/admin");
    }

    dispatch(reset());
  }, [admin, isError, isSuccess, message, navigate, dispatch]);

  const submitHandler = (e) => {
    dispatch(login(formData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavbarLoginAdmin />
      <Icons />
      <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl relative flex flex-col justify-center space-y-1 sm:space-y-20 md:space-y-0 sm:flex-row">
        <div className="w-full h-96 lg:mt-10">
          <img src="assets/admin.png" alt="" />
        </div>
        <div className="w-full h-[450px] sm:h-[520px] bg-white flex items-center justify-center flex-col rounded-lg">
          <h1 className="text-4xl text-primary font-bold">Admin Login </h1>
          <h1 className="text-baseline text-red-400 m-7">
            Please log in into your account
          </h1>
          <form action="">
            <div className="flex flex-col w-[300px]">
              <label htmlFor="">Username</label>
              <input
                type="text"
                id="userType"
                name="userType"
                onChange={(e) =>
                  setFormData({ ...formData, userType: e.target.value })
                }
                placeholder="Enter your Type"
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
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
