import React, { useEffect, useState } from "react";
import Option from "./Option";

import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { addListData } from "../store/thunks/charThunk";

interface OptionProp {
  boldifyMatchingLetters: any;
}

const Section: React.FC<OptionProp> = ({ boldifyMatchingLetters }) => {
  const { charactersList, initialUrl, errorState } = useAppSelector(
    (store) => store
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addListData(initialUrl));
  }, []);

  return (
    <div className="flex flex-col  items-center rounded-md border border-gray-400 w-[400px] h-[500px] overflow-scroll ">
      {errorState ||
        (charactersList &&
          charactersList.map((char: any) => (
            <Option
              key={char.id}
              character={char}
              boldifyMatchingLetters={boldifyMatchingLetters}
            />
          )))}
    </div>
  );
};
export default Section;
