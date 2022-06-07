import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const LineItems = () => {
  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl flex justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full md:w-[650px] text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3"></th>
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
              <td className="px-9 py-4">Sport</td>
              <td className="px-8 py-4">7</td>
              <td className="px-6 py-4">$2999</td>
              <td className=" text-xl  cursor-pointer">
                <RiDeleteBin6Line className="hover:text-red-800 text-primary" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LineItems;
