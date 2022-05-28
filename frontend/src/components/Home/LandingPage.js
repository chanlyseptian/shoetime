import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";
import { GiArrowDunk } from "react-icons/gi";
import Offering from "./Offering";
import OurCollections from './OurCollections'
import About from './About'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center relative container mx-auto max-w-screen-sm sm:max-w-screen-xl">
        <div className="flex flex-row justify-center mt-10 sm:mt-0 lg:mt-10 w-32 h-32 md:w-96 md:h-92 lg:w-full lg:h-full">
          <div className="space-y-5 ">
            <h1 className="text-5xl font-bold">Summer Collections</h1>
            <h1 className="text-4xl text-primary font-bold">2022</h1>
            <p>
              Find your shoes from our various collections. Here shoes are
              endless and profit is also endless
            </p>
            <div className="w-32 h-10 bg-primary flex justify-center rounded">
              <a href="" type="button" className="text-white self-center ">
                <span className="flex items-center">
                  Shop <BsArrowRightSquare className="ml-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-start drop-shadow-lg rounded-xl  mt-64 sm:mt-16 w-96 h-64 md:w-96 md:h-92 lg:w-full lg:h-[400px]  sm:ml-32">
          <div>
            <a href="">
              <img src="assets/airmax.png" alt="" className="-rotate-[35deg]" />
            </a>
          </div>
        </div>
        <div className="absolute font-semibold  mt-[565px] ml-[250px] sm:mt-52 sm:ml-[599px] md:ml-[750px] lg:mt-80 lg:ml-[1009px] xl:mt-[300px] xl:ml-[1100px]">
          <div className="absolute -mt-8 ml-8 lg:-mt-20 lg:-ml-1 animate-pulse">
            <GiArrowDunk className="text-primary text-3xl lg:text-7xl" />
          </div>
          <div className="">
            <p className="">Nike air max</p>
          </div>
          <div className="mt-2 animate-pulse">
            <a
              href="#"
              className="w-32 h-32  py-1 px-4 outline outline-primary text-primary"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <Offering />
      <OurCollections/>
      <About/>
      <Footer/>
    </>
  );
};

export default LandingPage;
