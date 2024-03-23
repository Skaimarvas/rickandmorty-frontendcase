import { useForm } from "react-hook-form";
import "./App.css";
import Section from "./components/Section";

const App: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        <h2 className="text-2xl font-bold text-center">
          Rick and Morty Universe
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[400px]">
          <div>
            <input
              {...register("name")}
              type="text"
              className="border border-gray-400 px-2 py-1 w-full rounded-md"
            />
          </div>
        </form>

        <Section />
      </div>
    </>
  );
};

export default App;
