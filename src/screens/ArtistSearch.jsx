import React, { useState } from "react";
import Image from "../components/Image";
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
              <Image key={artist._id} artist={artist} />
            ))}
        </div>
      </div>
    </>
  );
}

export default ArtistSearch;
