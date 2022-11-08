import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtist } from "../services/artists";
import { Link } from "react-router-dom";

function GenreDetail({ artists }) {
  const [artistsList, setArtistsList] = useState([]);

  const { genre_option } = useParams()

  useEffect(() => {
    let filteredList = artists.filter((artist) => {
      console.log(artist.genre)
      return artist.genre.includes(genre_option)
    })

    setArtistsList(filteredList)
  }, [genre_option]);


  return (
    <div>
        <h1 className="center">{genre_option}</h1>
      {artistsList.map((artist) => (
        <div>
          <h1>{artist.name}</h1>
        </div>
      ))}

      <Link to='/genres'>
        <h1>Back to GENRES</h1>
      </Link>
    </div>
  )
}

export default GenreDetail;
