import React from "react";
import { BsArrowRightSquare } from "react-icons/bs";

const LandingPage = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center relative">
      <div className="flex flex-row justify-center mt-8 sm:mt-0 lg:mt-10 w-32 h-32 md:w-96 md:h-92 lg:w-full lg:h-full">
        <div className="space-y-5 ">
          <h1 className="text-5xl font-bold">Summer Collections</h1>
          <h1 className="text-4xl text-primary font-bold">2022</h1>
          <p>
            Find your shoes from our various collections. Here shoes are endless
            and profit is also endless
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
      <div className="flex flex-row justify-center items-start rounded-xl  mt-64 sm:mt-16 w-96 h-64 md:w-96 md:h-92 lg:w-full lg:h-[400px] bg-red-50 sm:ml-32">
        <div>
          <a href="">
            <img src="assets/airmax.png" alt="" className="-rotate-[35deg]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
