import React, { useEffect, useState } from "react";
import Option from "./Option";
import axios from "axios";

const Section: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res: any) => {
        console.log(res.data);
        setCharacters(res.data.results);
      })
      .catch((err: any) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col  items-center rounded-md border border-gray-400 w-[400px] h-[500px] overflow-scroll ">
      {characters &&
        characters.map((char: any) => (
          <Option
            key={char.id}
            name={char.name}
            img={char.image}
            episodeCount={char.episode.length}
          />
        ))}
    </div>
  );
};
export default Section;
