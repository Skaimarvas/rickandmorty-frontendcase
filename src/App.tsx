import "./App.css";
import Section from "./components/Section";
import Tag from "./components/Tag";
//Hooks
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { useEffect } from "react";
//Thunks
import { addListData, searchCharList } from "./store/thunks/charThunk";

interface Character {
  id: number;
  name: string;
  checked: boolean;
}

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { charactersList, prev, next, pages } = useAppSelector(
    (store) => store
  );
  const getPageNumber = (url: string | null) => {
    if (!url) return 0;
    const params = new URLSearchParams(new URL(url).search);
    return Number(params.get("page") || 0);
  };
  const pageNumber =
    getPageNumber(next || "") == 0 ? pages : getPageNumber(next || "") - 1;
  console.log("PAGE", pageNumber);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const name = watch("name");
  useEffect(() => {
    if (name) dispatch(searchCharList(name));
  }, [name]);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 py-10">
        <h2 className="text-2xl font-bold text-center">
          Rick and Morty Universe
        </h2>

        <div className="flex flex-wrap border border-gray-400 rounded-md  gap-1 p-1 w-[400px] ">
          {charactersList &&
            charactersList.map((char: Character) =>
              char.checked == true ? (
                <Tag key={char.id} name={char.name} id={char.id} />
              ) : (
                ""
              )
            )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              type="text"
              className="focus:bg-gray-200  px-2 py-1 w-full rounded-md"
            />
          </form>
        </div>
        <Section />
        <div className="flex justify-between items-center w-[400px]">
          <button
            disabled={!prev}
            onClick={() => {
              if (prev) {
                dispatch(addListData(prev));
              }
            }}
            className={`${
              !prev && "cursor-not-allowed disabled:bg-blue-300"
            } px-4 py-1 bg-blue-500 rounded-md shadow-md hover:bg-blue-300 text-white`}
          >
            <span>Prev</span>
          </button>
          <div className="flex flex-col gap-2">
            <span>Page: {pageNumber} </span>
            <span>Total Page: {pages} </span>
          </div>
          <button
            disabled={!next}
            onClick={() => {
              if (next) {
                dispatch(addListData(next));
              }
            }}
            className={`${
              !next && "cursor-not-allowed disabled:bg-blue-300"
            } px-4 py-1 bg-blue-500 rounded-md shadow-md hover:bg-blue-300 text-white`}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
