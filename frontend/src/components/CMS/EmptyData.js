import React from "react";

import { FcDeleteDatabase } from 'react-icons/fc'


const EmptyData = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center text-xl font-bold">There is no data yet</h1>
      <FcDeleteDatabase className="text-6xl text-gray-400" />
    </div>
  );
};

export default EmptyData;
