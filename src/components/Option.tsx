import React from "react";

interface OptionProp {
  character: any;
}

const Option: React.FC<OptionProp> = ({ character }) => {
  const { image, name, episode } = character;

  return (
    <form className="w-full">
      <label className="flex justify-start gap-5 px-2 border-b border-gray-300 container">
        <div className="flex justify-center items-center">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </div>
        <div>
          <img src={image} alt="" className="w-12 h-12 rounded-md" />
        </div>
        <div className="flex flex-col">
          <span> {name}</span>
          <span className="text-sm"> {episode.length} Episodes </span>
        </div>
      </label>
    </form>
  );
};

export default Option;
