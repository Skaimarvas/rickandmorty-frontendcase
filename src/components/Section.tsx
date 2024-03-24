import React, { useEffect } from "react";
import Option from "./Option";

import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { addListData } from "../store/thunks/charThunk";

const Section: React.FC = () => {
  const { characters } = useAppSelector((store) => store.characters);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addListData());
  }, []);

  return (
    <div className="flex flex-col  items-center rounded-md border border-gray-400 w-[400px] h-[500px] overflow-scroll ">
      {characters &&
        characters.map((char: any) => (
          <Option key={char.id} character={char} />
        ))}
    </div>
  );
};
export default Section;
