import React, { useState } from "react";
import { Link } from "react-router-dom";
import { albums } from "../services/albums";
import FilterCharacter from "./FilterCharacter";
import AlbumCover from "./AlbumCover";

function SearchFilter({ albums }) {
  const [character, setCharacter] = useState();
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "#",
  ];

  const handleClick = (e, letter) => {
    e.preventDefault();
    setCharacter(letter);
  };
  console.log(handleClick);

  return alphabet.map((letter) => {
    return (
      <Link to={`/albums/search/${letter}`} letter={character} albums={albums}>
        <div className="alphabet" onClick={(e) => handleClick(e, letter)}>
          {letter}
        </div>
      </Link>
    );
  });
}

export default SearchFilter

