import React, { useState } from "react";
import handlePrevious from "react";
interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

const NavBar = ({
  pokemonIndex,
  setPokemonIndex,
  pokemonList,
}: NavBarProps) => {
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
    <nav>
      <input type="button" value="Précédent" onClick={handlePrevious} />
      <input type="button" value="Suivant" onClick={handleNext} />
    </nav>
  );
};

export default NavBar;
