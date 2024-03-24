import { useForm } from "react-hook-form";
import "./App.css";
import Section from "./components/Section";
import Tag from "./components/Tag";
import { useAppSelector } from "./hooks/hook";

const App: React.FC = () => {
  const { characters } = useAppSelector((store) => store.characters);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data, "a");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        <h2 className="text-2xl font-bold text-center">
          Rick and Morty Universe
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[400px]">
          <div className="flex border border-gray-400 rounded-md overflow-x-hidden gap-1 p-1 ">
            {characters &&
              characters.map((char) =>
                char.checked == true ? (
                  <Tag name={char.name} id={char.id} />
                ) : (
                  ""
                )
              )}

            <input
              {...register("name")}
              type="text"
              className="  px-2 py-1 w-full rounded-md"
            />
          </div>
        </form>

        <Section />
      </div>
    </>
  );
};

export default App;
