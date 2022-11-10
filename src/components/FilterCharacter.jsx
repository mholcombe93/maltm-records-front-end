import { useParams } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import AlbumCover from "./AlbumCover";
import { useEffect, useState } from "react";

function FilterCharacter({albums}) {
  const { letter } = useParams()
  const [albumsList, setAlbumsList] = useState([]);

  useEffect(() => {
 
    let filteredList = albums.filter((album) => {
        return album.title.split("")[0].includes(letter);
      });

      setAlbumsList(filteredList);
    }, [letter]);
  
  return (
    <div>
      <div className="alpha">
      <SearchFilter/>
      </div>
      <h1 className="center">Albums starting with {letter}</h1>
      <br></br>
     <div className="gallery">
          {albumsList.map((album) => (
              <AlbumCover key={album._id} album_id={album._id} />
              ))}
        </div>
    </div>
    )
  }
  
  

export default FilterCharacter