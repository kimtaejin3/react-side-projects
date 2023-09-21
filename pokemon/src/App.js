import { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import Card from "./Card";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(20);

  const getPokemon = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=1`)
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  };

  useEffect(() => {
    getPokemon();
  }, [limit]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      console.log(window.innerHeight + scrollTop, offsetHeight);
      if (window.innerHeight + scrollTop >= offsetHeight - 1) {
        setLimit((prevItem) => prevItem + 20);
        console.log("true");
      } else {
        console.log("false");
      }
    };

    const throttleHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttleHandleScroll);
    return () => window.removeEventListener("scroll", throttleHandleScroll);
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
      className="App"
    >
      <h1>포켓몬 도감</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 -5px",
          rowGap: "10px",
        }}
      >
        {pokemon.map((p, i) => {
          return (
            <div
              style={{
                width: "25%",
                padding: "0 5px",
                boxSizing: "border-box",
              }}
            >
              <Card pokeurl={p.url} number={i + 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
