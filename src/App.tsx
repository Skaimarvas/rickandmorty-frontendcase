import "./App.css";
import Section from "./components/Section";

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 pt-10">
        <h2 className="text-2xl font-bold text-center">
          Rick and Morty Universe
        </h2>

        <Section />
      </div>
    </>
  );
};

export default App;
