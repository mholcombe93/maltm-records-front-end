import { useParams } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import AlbumCover from "./AlbumCover";
import { useEffect, useState } from "react";

function FilterCharacter({albums}) {
  const { letter } = useParams()
  const [albumsList, setAlbumsList] = useState([]);
  let searchLetter = letter.toLowerCase()
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const firstLetter = (arr, i)=>{return arr.title.split("")[0].toLowerCase().includes(`${i}`)}

  useEffect(() => {
    let filteredList = [] 
    if (searchLetter == 'numbers') {
      filteredList = albums.filter((album) => {
        for (const number of numbers) {
          console.log(number)
          if(firstLetter(album, number))
          return album.title.split("")[0].includes(`${number}`)
        }
})
      
    } else {
      filteredList = albums.filter((album) => {
        return firstLetter(album, searchLetter)
        //album.title.split("")[0].toLowerCase().includes(searchLetter);
      })
    };

    setAlbumsList(filteredList);
    console.log(filteredList)
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