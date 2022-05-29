import React from "react";
import NavbarShop from "./NavbarShop";
import EmptyCart from "./EmptyCart";
import LineItems from './LineItems'

const ShoppingCart = () => {
  return (
    <>
      <NavbarShop />
      <div className="w-full h-auto">
        <h1 className="text-center text-4xl py-12 font-bold">
          Shopping <span className="text-primary">Cart</span>
        </h1>

        {/* <EmptyCart/> */}

        <LineItems/>

        <div className="flex flex-col items-center mt-10">
          <div className="flex space-x-10">
            <h1>Sub Total </h1>
            <h1 className="font-bold text-gray-600">Rp.99.999</h1>
          </div>
          <button className="bg-primary text-white text-sm hover:bg-red-800 mt-3 w-auto py-2 px-3 rounded h-full">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
