import React from "react";
import { MdOutlineCircle } from "react-icons/md";
import { BiSquare } from "react-icons/bi";
import { IoTriangleOutline } from 'react-icons/io5'

const Icons = () => {
  return (
    <div>
      <div>
        <MdOutlineCircle
          className="text-5xl font-thin text-amber-100
        absolute -ml-5 lg:-ml-7 xl:-ml-28 2xl:-ml-[135px]"
        />
      </div>
      <div className="flex absolute justify-end ml-52 mt-32">
        <BiSquare className="text-5xl text-right text-amber-100" />
      </div>
      <div className="flex absolute justify-end ml-32 sm:ml-96 mt-64">
        <IoTriangleOutline className="text-5xl text-right text-amber-100"/>
      </div>

      <div className="flex z-10 absolute justify-end ml-[360px] md:ml-[850px] lg:ml-[800px] mt-96 lg:mt-12">
        <IoTriangleOutline className="text-5xl text-right text-red-100"/>
      </div>
      <div className="flex absolute z-10 justify-end ml-[100px] md:ml-[850px] lg:ml-[850px] mt-96 lg:mt-[500px]">
        <BiSquare className="text-5xl text-right text-red-100"/>
      </div>
      <div className="flex absolute z-10 justify-end ml-[50px] md:ml-[850px] lg:ml-[1369px] mt-[600px] lg:mt-12">
        <MdOutlineCircle className="text-5xl text-right text-red-100"/>
      </div>

    </div>
  );
};

export default Icons;
//
