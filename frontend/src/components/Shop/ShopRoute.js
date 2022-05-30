import React from "react";
import { ProductList, ShoppingCart } from "..";
import { Routes, Route } from "react-router-dom";

const ShopRoute = () => {
  return (
    <>
      <Routes>
        <Route path="shop" element={<ProductList />}></Route>

        <Route path="cart" element={<ShoppingCart />}></Route>
      </Routes>
    </>
  );
};

export default ShopRoute;