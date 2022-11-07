import React, { useState } from "react";
import AlbumCover from "../components/AlbumCover.jsx";
import Searchbar from "../components/Searchbar";

function AlbumSearch ({ albums }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <h1>Albums</h1>
        <Searchbar setSearchTerm={setSearchTerm} />
        <div className="gallery">
          {albums
            .filter((album) => {
              return album.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((album) => (
              <AlbumCover key={album._id} album={album} />
            ))}
        </div>
      </div>
    </>
  );
}

export default AlbumSearch;