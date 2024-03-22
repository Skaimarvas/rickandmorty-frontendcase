import React from "react";
import rick from "../assets/rm.png";

interface OptionProp {
  img: string;
  name: string;
  episodeCount: number;
}

const Option: React.FC<OptionProp> = ({ img, name, episodeCount }) => {
  return (
    <div className="flex justify-start gap-5 px-2 border-b border-gray-300 w-full">
      <div className="flex justify-center items-center">
        <input type="checkbox" />
      </div>
      <div>
        <img
          src={img ? `${img}` : rick}
          alt=""
          className="w-12 h-12 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <span> {name ? `${name}` : `Rick Sanchez`}</span>
        <span className="text-sm">
          {" "}
          {episodeCount ? `${episodeCount}` : `51`} Episodes{" "}
        </span>
      </div>
    </div>
  );
};

export default Option;
