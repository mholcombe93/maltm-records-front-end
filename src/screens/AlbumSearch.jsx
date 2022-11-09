import React, { useState } from "react";
import AlbumCover from "../components/AlbumCover.jsx";
import Searchbar from "../components/Searchbar";
import "../App.css";

function AlbumSearch({ albums }) {
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <>
      <div>
        <h1>Albums</h1>
        <div className="alpha">
          {console.log(character)}
          {alphabet.map((letter) => (
            <div className="alphabet" onClick={(e) => handleClick(e, letter)}>
              {letter}
            </div>
          ))}
        </div>
        <div className="gallery">
          {albums
            .filter((album) => {
              return album.title.split("")[0].includes(character);
            })
            .map((album) => (
              <AlbumCover key={album._id} album={album} />
            ))}
        </div>

        <Searchbar setSearchTerm={setSearchTerm} />
        <div className="gallery">
          {albums
            .filter((album) => {
              return album.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((album) => (
              <AlbumCover key={album._id} album_id={album._id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default AlbumSearch;

// import React, { useState } from "react";
// import AlbumCover from "../components/AlbumCover.jsx";
// import Searchbar from "../components/Searchbar";
// import "../App.css"
// import SearchFilter from "../components/SearchFilter.jsx";

// function AlbumSearch ({ albums }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <>
//       <div>
//         <h1>Albums</h1>
//         <div className="alpha">
//         <SearchFilter albums={albums} />
//         </div>
//         <br></br>
//         <Searchbar setSearchTerm={setSearchTerm} />
//         <div className="gallery">
//           {albums
//             .filter((album) => {
//               return album.title
//                 .toLowerCase()
//                 .includes(searchTerm.toLowerCase());
//             })
//             .map((album) => (
//               <AlbumCover key={album._id} album={album} />
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AlbumSearch;
