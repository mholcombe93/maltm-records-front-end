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
  let arr = [];
  const handleClick = (e, letter) => {
    e.preventDefault();
    setCharacter(letter)
    // albums.filter((album) => {
    //   if (
    //     album.title.split("")[0].toLowerCase().includes(letter.toLowerCase())
    //   ) {
    //     arr.push(album);

    //     arr.map((album) => <AlbumCover key={album._id} album={album} />);
    //   }
    // });
  };

  return alphabet.map((letter) => {
    return (
      <div className="alphabet" onClick={(e) => handleClick(e, letter)}>
        {letter}

        <div className="gallery">
          {albums.filter((album) => {
            if (
              album.title
                .split("")[0]
                .toUpperCase()
                .includes(character)
            ) {
              // arr.push(album);
              console.log(album)
              arr.map((album) => (<AlbumCover key={album._id} album={album} />))
            }
          })}
        </div>
      </div>
    );
  });
}

export default SearchFilter;
