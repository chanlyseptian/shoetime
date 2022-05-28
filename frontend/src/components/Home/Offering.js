import React from "react";
import { BsClockHistory, BsCashCoin } from "react-icons/bs";
import { MdLocalOffer } from 'react-icons/md'
import { MdCardMembership } from 'react-icons/md'

const Offering = () => {
  return (
    <>
      <div className="w-full h-[1440px] md:h-[485px] bg-mygray mt-16">
        <h1 className="text-center text-4xl py-12 font-bold">
          What we <span className="text-primary">offer</span>{" "}
        </h1>
        <div className="container mx-auto max-w-screen-sm sm:max-w-screen-xl grid md:grid-cols-4 justify-items-center gap-8">
          <div className="w-64 h-72 bg-slate-100 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mt-8 flex flex-col justify-center items-center space-y-1">
              <span className="text-slate-400 text-6xl">
                <BsClockHistory />
              </span>
              <span className="text-sm text-slate-400 font-semibold">24/7</span>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h1 className="text-xl font-bold text-myyellow">24/7 Support</h1>
              <p className="text-center mt-3 text-myfont text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="w-64 h-72 bg-slate-100 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mt-8 flex flex-col justify-center items-center space-y-1">
              <span className="text-slate-400 text-6xl">
                <BsCashCoin />
              </span>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h1 className="text-xl font-bold text-myyellow">Cash Back</h1>
              <p className="text-center mt-3 text-myfont text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="w-64 h-72 bg-slate-100 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mt-8 flex flex-col justify-center items-center space-y-1">
              <span className="text-slate-400 text-6xl">
                <MdLocalOffer />
              </span>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h1 className="text-xl font-bold text-myyellow">Monthly Offer</h1>
              <p className="text-center mt-3 text-myfont text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="w-64 h-72 bg-[#141414] flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-white mt-8 flex flex-col justify-center items-center space-y-1">
              <span className="text-slate-400 text-5xl">
                <MdCardMembership />
              </span>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h1 className="text-xl font-bold text-primary">Membership</h1>
              <p className="text-center mt-3 text-[#989898] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offering;
