import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavbarShop } from "..";

const Order = () => {
  return (
    <>
      <NavbarShop />

      <div className="w-full h-auto">
        <h1 className="text-center text-4xl py-12 font-bold">
          My <span className="text-primary">Order</span>
        </h1>
        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl flex justify-center">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full md:w-[650px] text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Nike Air Max
                  </th>
                  <td className="">Jl. Bunga Indah </td>
                  <td className="px-8 py-4">7</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-5 text-green-600 font-semibold">
                    Finished
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
