import React, { useState } from "react";
import ArtistImage from "../components/ArtistImage";
import Searchbar from "../components/Searchbar";
import "../App.css"
import { Link } from "react-router-dom"


function ArtistSearch({artists}) {
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
            .map((artist, index) => (
              <Link to={`/artists/${artist._id}`}> 
              <ArtistImage key={index} artist={artist} />
            </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default ArtistSearch;
