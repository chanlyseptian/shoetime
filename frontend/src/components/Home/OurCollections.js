import React from "react";

const OurCollections = () => {
  return (
    <>
      <div className="w-full h-auto" id="collections">
        <h1 className="text-center text-4xl py-12 font-bold">
          Our <span className="text-primary">collection</span>{" "}
        </h1>
        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl grid md:grid-cols-3 justify-items-center">
          <div className="w-72 h-72 bg-mysecondarygray mb-20">
            <img
              src="assets/nike1.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <p className="-mt-10 text-center font-semibold">Rp.99.999</p>
            <p className="text-center mt-8 font-bold text-xl">
              Air Max Pegasus 37
            </p>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-20">
            <img
              src="assets/nike2.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <p className="-mt-10 text-center font-semibold">Rp.99.999</p>
            <p className="text-center mt-8 font-bold text-xl">
              Air Max Pegasus 37
            </p>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-10 sm:mb-20">
            <img
              src="assets/nike6.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <p className="-mt-10 text-center font-semibold">Rp.99.999</p>
            <p className="text-center mt-8 font-bold text-xl">
              Air Max Pegasus 37
            </p>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-20 hidden sm:block">
            <img
              src="assets/nike7.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <p className="-mt-10 text-center font-semibold">Rp.99.999</p>
            <p className="text-center mt-8 font-bold text-xl">
              Air Max Pegasus 37
            </p>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-20 hidden sm:block">
            <img
              src="assets/nike9.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <p className="-mt-10 text-center font-semibold">Rp.99.999</p>
            <p className="text-center mt-8 font-bold text-xl">
              Air Max Pegasus 37
            </p>
          </div>

          <div className="w-72 h-72 bg-mysecondarygray mb-10 hidden sm:block">
            <img
              src="assets/nike10.png"
              alt=""
              className="object-scale-down w-full h-full hover:scale-125"
            />
            <p className="-mt-10 text-center font-semibold">Rp.99.999</p>
            <p className="text-center mt-8 font-bold text-xl">
              Air Max Pegasus 37
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCollections;