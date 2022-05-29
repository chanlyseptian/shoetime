import React from "react";
import NavbarShop from "./NavbarShop";
import { BsCartPlus } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const ProductList = () => {
  return (
    <>
      <NavbarShop />
      <div className="w-full h-auto">
        <h1 className="text-center text-4xl py-12 font-bold">
          Shop <span className="text-primary">products</span>
        </h1>
        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl grid md:grid-cols-4 gap-4 justify-items-center">
          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike1.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike2.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike10.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>


          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike4.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike5.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>


          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike6.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>


          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike7.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike8.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike9.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-40">
            <img
              src="assets/nike10.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <div className="flex flex-col items-center">
              <p className="mt-2 text-center text-xl font-semibold">
                Nike air Max
              </p>
              <div className="flex">
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-amber-400" />
                <AiFillStar className="text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-semibold text-gray-800">Rp.99.000</p>
              <button className="bg-primary text-white rounded py-1.5 px-3 hover:bg-red-800 text-sm flex items-center">
                <BsCartPlus className="mr-1.5" /> add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
