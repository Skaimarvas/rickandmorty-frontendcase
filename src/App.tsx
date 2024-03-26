import { useForm } from "react-hook-form";
import "./App.css";
import Section from "./components/Section";
import Tag from "./components/Tag";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { useEffect } from "react";
import { searchCharList } from "./store/thunks/charThunk";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((store) => store.characters);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const name = watch("name");
  useEffect(() => {
    dispatch(searchCharList(name));
  }, [name]);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 py-10">
        <h2 className="text-2xl font-bold text-center">
          Rick and Morty Universe
        </h2>

        <div className="flex flex-wrap border border-gray-400 rounded-md  gap-1 p-1 truncate w-[400px] ">
          {characters &&
            characters.map((char) =>
              char.checked == true ? <Tag name={char.name} id={char.id} /> : ""
            )}
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <input
              {...register("name")}
              type="text"
              className="max-w-[150px] focus:bg-gray-200  px-2 py-1 w-full rounded-md"
            />
          </form>
        </div>
        <Section />
        <div className="flex justify-between w-[400px]">
          <button className="px-4 py-1 bg-blue-500 rounded-md shadow-md hover:bg-blue-300 text-white">
            <span>Prev</span>
          </button>
          <button className="px-4 py-1 bg-blue-500 rounded-md shadow-md hover:bg-blue-300 text-white">
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
