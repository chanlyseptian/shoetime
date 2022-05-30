import React from "react";

const About = () => {
  return (
    <>
      <div
        className="w-full h-[1280px] md:h-[540px] bg-mygray mt-16"
        id="about"
      >
        <h1 className="text-center text-4xl py-12 font-bold">
          What our clients say <br></br>
          <span className="text-primary">About Us</span>{" "}
        </h1>
        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl grid md:grid-cols-3 justify-items-center ">
          <div className="w-72 sm:w-96 h-80 sm:h-72 bg-slate-100 rounded-lg flex flex-col mb-10 sm:mb-0">
            <div className="w-12 h-12 m-8 flex flex-row items-center ">
              <img
                src="assets/profile1.jpg"
                alt=""
                className="w-full h-full rounded-full"
              />
              <div className="flex flex-col w-full text-sm ml-2">
                <h5 className="text-myyellow font-bold">Anne</h5>
                <p className="text-[#666666]">Designer</p>
              </div>
            </div>

            <div className="text-justify text-sm -mt-9 p-10">
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                molestiae doloribus reprehenderit eum dolor, molestias esse eos?
                Esse, sapiente consequatur.Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Odit molestiae doloribus
              </p>
            </div>
          </div>

          <div className="w-72 sm:w-96 h-80 sm:h-72 bg-slate-100 rounded-lg flex flex-col mb-10 sm:mb-0">
            <div className="w-12 h-12 m-8 flex flex-row items-center">
              <img
                src="assets/profile2.jpg"
                alt=""
                className="w-full h-full rounded-full"
              />
              <div className="flex flex-col w-full text-sm ml-2">
                <h5 className="text-myyellow font-bold">Alex</h5>
                <p className="text-[#666666]">Designer</p>
              </div>
            </div>

            <div className="text-justify text-sm -mt-9 p-10">
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                molestiae doloribus reprehenderit eum dolor, molestias esse eos?
                Esse, sapiente consequatur.Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Odit molestiae doloribus
              </p>
            </div>
          </div>

          <div className="w-72 sm:w-96 h-80 sm:h-72 bg-slate-100 rounded-lg flex flex-col">
            <div className="w-12 h-12 m-8 flex flex-row items-center">
              <img
                src="assets/profile3.jpg"
                alt=""
                className="w-full h-full rounded-full"
              />
              <div className="flex flex-col w-full text-sm ml-2">
                <h5 className="text-myyellow font-bold">John</h5>
                <p className="text-[#666666]">Designer</p>
              </div>
            </div>

            <div className="text-justify text-sm -mt-9 p-10">
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                molestiae doloribus reprehenderit eum dolor, molestias esse eos?
                Esse, sapiente consequatur.Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Odit molestiae doloribus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;