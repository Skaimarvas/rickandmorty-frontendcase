import React from "react";
//Icon
import { Icon } from "@iconify/react";
import { useAppDispatch } from "../hooks/hook";
import { uncheckedChar } from "../store/actions/charActions";
interface PropState {
  name: string;
  id: number;
}

const Tag: React.FC<PropState> = ({ name = "Rick Sanchez", id }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row gap-2 items-center bg-gray-200 py-1 px-2 rounded-md">
      <div>
        <span className=" text-nowrap ">{name}</span>
      </div>

      <button onClick={() => dispatch(uncheckedChar(id))}>
        <Icon
          icon="iconoir:cancel"
          className="bg-gray-400 text-white text-2xl rounded-md"
        />
      </button>
    </div>
  );
};
export default Tag;
