import React from "react";
import NavbarShop from "./NavbarShop";
import EmptyCart from "./EmptyCart";
import LineItems from "./LineItems";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";

const ShoppingCart = () => {
  return (
    <>
      <NavbarShop />
      <div className="w-full h-auto">
        <h1 className="text-center text-4xl py-12 font-bold">
          Shopping <span className="text-primary">Cart</span>
        </h1>

        {/* <EmptyCart/> */}

        <LineItems />

        <div className="flex flex-col items-center mt-10 ">
          <div className="flex space-x-10 mb-8">
            <h1>Sub Total </h1>
            <h1 className="font-bold border-b-2 border-primary">Rp.99.999</h1>
          </div>

          <button className="w-32 p-1.5 text-white rounded bg-primary hover:bg-red-800 flex items-center">
            <IoBagCheckOutline className="mx-2 text-xl"/>
            <span className="text-sm">Check Out</span> 
          </button>
          <p className="text-gray-800 m-2">or</p>
          <Link
            to="/shop"
            type="button"
            className="flex items-center text-primary hover:text-red-700 font-semibold"
          >
            <BsArrowLeft className="mr-2 text-2xl" /> Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;