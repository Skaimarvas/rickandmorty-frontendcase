import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../hooks/hook";
import { checkedChar, uncheckedChar } from "../store/actions/charActions";

interface OptionProp {
  character: any;
}

const Option: React.FC<OptionProp> = ({ character }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const { image, name, episode, checked, id } = character;

  const handleChecked = () => {
    if (checked) {
      dispatch(uncheckedChar(id));
    } else {
      dispatch(checkedChar(id));
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <label className="flex justify-start gap-5 px-2 border-b border-gray-300 container">
        <div className="flex justify-center items-center">
          <input
            {...register("checked")}
            type="checkbox"
            checked={checked}
            onClick={() => handleChecked()}
          />
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
