import React from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading = () => {
  return (
    <div className="container mx-auto text-center flex flex-col items-center text-5xl justify-center space-y-4">
      <h1>Loading Data...</h1>
      <AiOutlineLoading3Quarters className="animate-spin" />
    </div>
  );
};

export default Loading;
