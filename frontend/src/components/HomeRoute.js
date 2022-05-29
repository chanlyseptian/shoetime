import React from "react";
import { Login, Register, LandingPage, NavbarHome, Icons } from ".";
import { Routes, Route } from "react-router-dom";

const HomeRoute = () => {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="login" element={<Login />}></Route>

        <Route path="register" element={<Register />}></Route>

      </Routes>
    </>
  );
};

export default HomeRoute;
