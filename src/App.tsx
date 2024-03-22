import "./App.css";
import Option from "./components/Option";

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center">
          Rick and Morty Universe
        </h2>
        <Option />
      </div>
    </>
  );
};

export default App;
