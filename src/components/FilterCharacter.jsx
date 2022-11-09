import { Link, useParams } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import AlbumCover from "./AlbumCover";
import { useEffect, useState } from "react";

function FilterCharacter({letter, albums}) {
  const { character } = useParams
  const [albumsList, setAlbumsList] = useState([]);

  useEffect(() => {
 
    let filteredList = albums.filter((album) => {
        return album.title.split("")[0].includes(character);
      });

      setAlbumsList(filteredList);
    }, [character]);
  
  return (
    <div>
      <SearchFilter/>
      <h1>Albums starting with {character}</h1>
      <br></br>
     <div className="gallery">
          {albumsList.map((album) => (
              <AlbumCover key={album._id} album={album} />
              ))}
        </div>
    </div>
    )
  }
  
  

export default FilterCharacter