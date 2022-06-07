import React from "react";
import { Admin, AdminLogin, AdminProducts, AddProducts } from "..";
import { Routes, Route } from "react-router-dom";

const HomeRoute = () => {
  return (
    <>
      <Routes>
        <Route path="admin" element={<Admin />}></Route>

        <Route path="adminlogin" element={<AdminLogin />}></Route>

        <Route path="products" element={<AdminProducts />}></Route>

        <Route path="addproducts" element={<AddProducts />}></Route>
      </Routes>
    </>
  );
};

export default HomeRoute;
