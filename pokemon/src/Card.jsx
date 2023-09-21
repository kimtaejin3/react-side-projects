import { useEffect } from "react";
import { useState } from "react";

export default function Card({ pokeurl, number }) {
  const [pokemon, setPokemon] = useState("");

  const [name, setName] = useState("");

  const getPokemon = async () => {
    await fetch(`${pokeurl}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    setName(pokemon.name);
  }, [pokemon]);

  return (
    <div
      style={{
        textAlign: "center",
        cursor: "pointer",
        border: "1px solid rgba(0,0,0,0.1)",
        padding: "10px",
      }}
    >
      <div style={{ height: "200px" }}>
        <img
          width="100%"
          height="100%"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`}
          alt={name}
        />
      </div>
      <h2>{name}</h2>
    </div>
  );
}
