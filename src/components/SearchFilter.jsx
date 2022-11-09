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
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

  const handleClick = (e, letter) => {
    e.preventDefault();
    setCharacter(letter);
  };
  console.log(handleClick);

  return alphabet.map((letter) => {
    return (
      <Link to={`/albums/search/${letter}`} >
        <div className="alphabet">
          {letter}
        </div>
      </Link>
    );
  });
}

export default SearchFilter

