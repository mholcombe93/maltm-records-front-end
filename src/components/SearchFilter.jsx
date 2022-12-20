import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

function SearchFilter() {

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
  "#"
];

  return alphabet.map((letter) => {
    return (
      <Link to={ letter == '#' && `/albums/search/numbers`||`/albums/search/${letter}`} >
        <div className="alphabet">
          {letter}
        </div>
      </Link>
    );
  });
}

export default SearchFilter

