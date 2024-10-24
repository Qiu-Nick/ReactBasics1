import React, {useState} from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    const previousIndex = pokemonIndex - 1;
    if (previousIndex >= 0) {
      setPokemonIndex(previousIndex);
    }
  };

  const handleNext = () => {
    const nextIndex = pokemonIndex + 1;
    if (nextIndex < pokemonList.length) {
      setPokemonIndex(nextIndex);
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      <input type="button" value="Précédent" onClick={handlePrevious} />
      <input type="button" value="Suivant" onClick={handleNext} />
    </div>
  );
}

export default App;
