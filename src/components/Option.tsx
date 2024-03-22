import React from "react";
import rick from "../assets/rm.png";

const Option: React.FC = () => {
  return (
    <div className="flex justify-start gap-5 px-2 border-b border-gray-300 ">
      <div className="flex justify-center items-center">
        <input type="checkbox" />
      </div>
      <div>
        <img src={rick} alt="" className="w-12 h-12 rounded-md" />
      </div>
      <div className="flex flex-col">
        <span>Rick Sanchez</span>
        <span className="text-sm"> 51 Episodes </span>
      </div>
    </div>
  );
};

export default Option;
