import React, { useState } from "react";
import ArtistImage from "../components/ArtistImage";
import Searchbar from "../components/Searchbar";

function ArtistSearch({ artists }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <h1>Artists</h1>
        <Searchbar setSearchTerm={setSearchTerm} />
        <div className="gallery">
          {artists
            .filter((artist) => {
              return artist.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((artist) => (
              <ArtistImage key={artist._id} artist={artist} />
            ))}
        </div>
      </div>
    </>
  );
}

export default ArtistSearch;
