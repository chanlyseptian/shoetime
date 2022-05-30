import React from "react";
import { Link } from "react-router-dom";
import { BsCartX } from 'react-icons/bs'
import { BsArrow90DegLeft } from 'react-icons/bs'

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center text-xl font-bold">
        Your cart is currently empty
      </h1>
      <BsCartX className="text-6xl text-gray-400" />
      <Link
        to="/shop"
        className="text-center flex items-center text-primary font-bold hover:text-red-700"
      >
        <BsArrow90DegLeft className="mr-3 text-2xl" /> Start Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;